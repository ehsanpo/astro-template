import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

export interface ImageMetadata {
  width: number;
  height: number;
  aspectRatio: number;
  blurDataURL?: string;
  format?: string;
}

/**
 * Extract image metadata using sharp for build-time optimization
 *
 * @param imagePath - Absolute file system path to the image
 * @returns Image metadata including dimensions and blur placeholder
 */
export async function getImageMetadata(
  imagePath: string
): Promise<ImageMetadata | null> {
  try {
    const image = sharp(imagePath);
    const metadata = await image.metadata();

    if (!metadata.width || !metadata.height) {
      return null;
    }

    // Generate a tiny blur placeholder (10px width maintains aspect ratio)
    const blurBuffer = await image.resize(10).webp({ quality: 20 }).toBuffer();

    const blurDataURL = `data:image/webp;base64,${blurBuffer.toString(
      "base64"
    )}`;

    return {
      width: metadata.width,
      height: metadata.height,
      aspectRatio: metadata.width / metadata.height,
      blurDataURL,
      format: metadata.format,
    };
  } catch (error) {
    console.error(`Failed to get metadata for image: ${imagePath}`, error);
    return null;
  }
}

/**
 * Process an image and generate multiple responsive sizes
 *
 * @param imagePath - Absolute file system path to the image
 * @param outputDir - Directory to save the generated images
 * @param sizes - Array of widths to generate (default: [640, 750, 828, 1080, 1200, 1920])
 * @returns Array of generated image paths with their dimensions
 */
export async function generateResponsiveImages(
  imagePath: string,
  outputDir: string,
  sizes: number[] = [640, 750, 828, 1080, 1200, 1920]
): Promise<Array<{ path: string; width: number; height: number }>> {
  try {
    const image = sharp(imagePath);
    const metadata = await image.metadata();

    if (!metadata.width || !metadata.height) {
      throw new Error("Could not read image dimensions");
    }

    // Ensure output directory exists
    await fs.mkdir(outputDir, { recursive: true });

    const ext = path.extname(imagePath);
    const basename = path.basename(imagePath, ext);
    const results: Array<{ path: string; width: number; height: number }> = [];

    // Only generate sizes smaller than or equal to the original
    const validSizes = sizes.filter((size) => size <= metadata.width);

    for (const width of validSizes) {
      const height = Math.round((width / metadata.width) * metadata.height);
      const outputPath = path.join(outputDir, `${basename}-${width}w${ext}`);

      await image.clone().resize(width, height).toFile(outputPath);

      results.push({ path: outputPath, width, height });
    }

    return results;
  } catch (error) {
    console.error(
      `Failed to generate responsive images for: ${imagePath}`,
      error
    );
    return [];
  }
}

/**
 * Get image metadata from content-relative path (e.g., from markdown)
 * Resolves paths like "./image.jpg" or "folder/image.png" relative to content directory
 *
 * @param relativePath - Relative path from content markdown file
 * @param contentDir - Absolute path to the content directory containing the image
 * @returns Image metadata or null if not found
 */
export async function getContentImageMetadata(
  relativePath: string,
  contentDir: string
): Promise<ImageMetadata | null> {
  try {
    const absolutePath = path.join(contentDir, relativePath);
    return await getImageMetadata(absolutePath);
  } catch (error) {
    console.error(
      `Failed to get content image metadata: ${relativePath}`,
      error
    );
    return null;
  }
}
