import { getPortfolioItems } from "@/utils/data-server";
import PortfolioHeader from "@/components/portfolio/PortfolioHeader";
import Gallery from "@/components/portfolio/Gallery";
import { sanitizeMarkdown } from "@/lib/sanitize";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const items = await getPortfolioItems();
  return items.map((item: any) => ({
    slug: item.permalink,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const items = await getPortfolioItems();
  const item = items.find((i: any) => i.permalink === slug);

  if (!item) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${item.title} - Portfolio`,
    description:
      item.description || item.tagline || `${item.title} - ${item.client}`,
  };
}

export default async function PortfolioItemPage({ params }: Props) {
  const { slug } = await params;
  const items = await getPortfolioItems();
  const item = items.find((i: any) => i.permalink === slug);

  if (!item) {
    return <div>Project not found</div>;
  }

  // Pre-resolve relative image sources inside Markdown/HTML to /content paths
  const resolvedBody = (item.content.body || "").replace(
    /(src=["'])(?!https?:|\/?content\/)([^"']+)(["'])/g,
    (_m: string, p1: string, p2: string, p3: string) => {
      const baseDir = item.content?.dirPath
        ? `/content/${item.content.collection}/${item.content.dirPath}`
        : `/content/${item.content.collection}`;
      const normalized = p2.startsWith("/") ? p2 : `${baseDir}/${p2}`;
      return `${p1}${normalized}${p3}`;
    }
  );

  return (
    <article className="relative min-h-screen bg-white pt-4 dark:bg-neutral-900">
      <PortfolioHeader item={item} />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-10">
        <div
          className="prose mx-auto mb-20 max-w-3xl dark:prose-invert"
          dangerouslySetInnerHTML={{
            __html: sanitizeMarkdown(resolvedBody),
          }}
        />

        <Gallery images={item.bilder} alt={item.title} />

        {item.case_link_url && (
          <div className="pb-20 text-center">
            <a
              href={item.case_link_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-primary-600 px-6 py-3 text-white transition-colors hover:bg-primary-700"
            >
              Visit Project
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

// MDX is not used on portfolio pages to avoid build breaks from malformed HTML
