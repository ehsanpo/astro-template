import { getBlogPosts } from "@/utils/data-server";
import { sanitizeMarkdown } from "@/lib/sanitize";
import Link from "next/link";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const posts = await getBlogPosts();
  const post = posts.find((p: any) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const posts = await getBlogPosts();
  const post = posts.find((p: any) => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const resolvedBody = (post.content.body || "").replace(
    /(src=["'])(?!https?:|\/?content\/)([^"']+)(["'])/g,
    (_m: string, p1: string, p2: string, p3: string) => {
      const baseDir = post.content?.dirPath
        ? `/content/${post.content.collection}/${post.content.dirPath}`
        : `/content/${post.content.collection}`;
      const normalized = p2.startsWith("/") ? p2 : `${baseDir}/${p2}`;
      return `${p1}${normalized}${p3}`;
    }
  );

  return (
    <article className="min-h-screen bg-white pt-4 dark:bg-neutral-900">
      <div className="mx-auto max-w-3xl px-4 py-16">
        {post.cover && (
          <div className="mb-8 overflow-hidden rounded-lg">
            <Image
              src={post.cover.src}
              alt={post.title}
              width={post.cover.width || 800}
              height={post.cover.height || 400}
              className="h-64 w-full object-cover md:h-96"
            />
          </div>
        )}

        <header className="mb-12 text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            {post.title}
          </h1>

          {post.description && (
            <p className="mx-auto mb-6 max-w-3xl text-xl text-gray-600 dark:text-gray-400">
              {post.description}
            </p>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={post.date}>{formatDate(post.date)}</time>

            {post.author && (
              <>
                <span>•</span>
                <span>By {post.author}</span>
              </>
            )}

            {post.category && post.category.length > 0 && (
              <>
                <span>•</span>
                <div className="flex flex-wrap gap-2">
                  {post.category.map((cat: string) => (
                    <span
                      key={cat}
                      className="rounded-md bg-primary-100 px-2 py-1 text-xs text-primary-800 dark:bg-primary-900 dark:text-primary-200"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </header>

        <div
          className="prose prose-base max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{
            __html: sanitizeMarkdown(resolvedBody),
          }}
        />

        {post.tag && post.tag.length > 0 && (
          <footer className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
            <div className="flex flex-wrap gap-2">
              <span className="mr-2 text-sm text-gray-500 dark:text-gray-400">
                Tags:
              </span>
              {post.tag.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </footer>
        )}

        <div className="mt-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-white transition-colors hover:bg-primary-700"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
    </article>
  );
}
