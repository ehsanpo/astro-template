import Image from "next/image";
import { notFound } from "next/navigation";
import { getRoles } from "@/utils/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const roles = getRoles();
  return roles.map((r: any) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const role = getRoles().find((r: any) => r.slug === slug);
  if (!role) return { title: "Role Not Found" };
  return {
    title: `${role.title} - Role`,
    description: role.description,
  };
}

export default async function RolePage({ params }: Props) {
  const { slug } = await params;
  const role = getRoles().find((r: any) => r.slug === slug);
  if (!role) return notFound();

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 h-48 w-full overflow-hidden rounded-lg">
            <div className="relative h-48 w-full">
              <Image
                src={role.image}
                alt={role.title}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
          <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            {role.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300">{role.description}</p>
        </div>

        {role.tags?.length ? (
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {role.tags.map((t: string) => (
              <span
                key={t}
                className="rounded bg-neutral-100 px-2 py-1 text-sm text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        {/* Placeholder for expanding role details */}
        <div className="prose max-w-none dark:prose-invert">
          <p>
            More details about responsibilities, outcomes, and relevant case
            studies can be added here.
          </p>
        </div>
      </div>
    </section>
  );
}
