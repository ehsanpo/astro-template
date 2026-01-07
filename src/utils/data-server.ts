import { getCollection } from "@/lib/content";
import path from "path";

type CollectionEntry<T> = any;

// Helper function to convert image filename to proper path
// Note: Image metadata extraction via sharp is disabled to prevent build timeouts
// Re-enable by uncommenting the getImageMetadata calls when needed
function getImagePath(
  dirPath: string,
  collection: string,
  imageName: any
): {
  src: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
} | null {
  if (!imageName) return null;
  // If it's already an object with src, return it
  if (typeof imageName === "object" && imageName.src) {
    return {
      src: imageName.src,
      width: imageName.width,
      height: imageName.height,
      blurDataURL: imageName.blurDataURL,
    };
  }
  // If it's a string, construct the path and return as object
  if (typeof imageName === "string") {
    let fullPath = "";

    // If it's already a full path starting with /content/, use it
    if (imageName.startsWith("/content/")) {
      fullPath = imageName;
    } else {
      // Clean up imageName and dirPath to ensure no double slashes
      const cleanDirPath = dirPath.replace(/^\/+/, "").replace(/\/+$/, "");
      const cleanImageName = imageName.replace(/^\/+/, "");

      if (cleanDirPath) {
        fullPath = `/content/${collection}/${cleanDirPath}/${cleanImageName}`;
      } else {
        fullPath = `/content/${collection}/${cleanImageName}`;
      }
    }

    // Return with default dimensions
    // TODO: Add build-time image metadata extraction with caching
    return {
      src: fullPath,
      width: 800,
      height: 600,
    };
  }
  return null;
}

export const getPortfolioItems = async () => {
  const portfolioEntries = await getCollection("portfolio");

  return portfolioEntries.map((entry: CollectionEntry<"portfolio">) => {
    const dirPath = entry.dirPath || "";

    return {
      ...entry.data,
      slug: entry.slug,
      background_image: getImagePath(
        dirPath,
        "portfolio",
        entry.data.background_image
      ),
      logo: getImagePath(dirPath, "portfolio", entry.data.logo),
      bilder:
        entry.data.images?.map((img: any) => {
          const imgPath = getImagePath(dirPath, "portfolio", img);
          return imgPath || { src: "", width: 800, height: 600 };
        }) || [],
      content: entry,
    };
  });
};

export const getProductItems = async () => {
  const productEntries = await getCollection("products");

  return productEntries.map((entry: CollectionEntry<"products">) => {
    const dirPath = entry.dirPath || "";

    return {
      ...entry.data,
      slug: entry.data.permalink || entry.slug,
      permalink: entry.data.permalink || entry.slug,
      background_image: getImagePath(
        dirPath,
        "products",
        entry.data.background_image
      ),
      logo: getImagePath(dirPath, "products", entry.data.logo),
      bilder:
        entry.data.images?.map((img: any) => {
          const imgPath = getImagePath(dirPath, "products", img);
          return imgPath || { src: "", width: 800, height: 600 };
        }) || [],
      content: entry,
    };
  });
};

export const getBlogPosts = async () => {
  const blogEntries = await getCollection("blog", ({ data }) => {
    return data.draft !== true;
  });

  return blogEntries
    .map((entry: CollectionEntry<"blog">) => {
      const dirPath = entry.dirPath || "";
      return {
        ...entry.data,
        slug: entry.slug,
        cover: entry.data.cover
          ? getImagePath(dirPath, "blog", entry.data.cover)
          : null,
        content: entry,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
