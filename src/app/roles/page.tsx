import Image from "next/image";
import Link from "next/link";
import { getRoles } from "@/utils/data";

export const metadata = {
  title: "Professional Roles",
  description:
    "Exploring different facets of my expertise across engineering, product, and creative domains.",
};

export default function RolesPage() {
  const roles = getRoles();

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Versatile Expertise
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-700 dark:text-gray-300">
            Throughout my career, I&apos;ve worn many hats and adapted to
            various roles. Each position has shaped my understanding of
            technology, product development, and team dynamics. Explore the
            different roles where I can add value to your organization.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roles.map((role: any) => (
            <div
              key={role.slug}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-neutral-800"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={role.image}
                  alt={role.title}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl" aria-hidden>
                      {role.icon}
                    </div>
                    <h3 className="font-basement text-lg font-semibold text-white">
                      {role.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="relative z-10 p-6">
                <p className="mb-4 leading-relaxed text-sm text-gray-600 dark:text-gray-300">
                  {role.description}
                </p>

                <div className="flex flex-wrap gap-2 text-xs">
                  {role.tags?.map((t: string) => (
                    <span
                      key={t}
                      className="rounded bg-neutral-100 px-2 py-1 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/roles/${role.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  Learn more
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 p-8 text-center text-white">
          <h3 className="mb-4 text-2xl font-bold">Ready to Work Together?</h3>
          <p className="mb-6 text-lg opacity-90">
            Whether you need technical expertise, strategic leadership, or
            creative solutions, I&apos;m here to help bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-primary-600 transition-all hover:bg-gray-100 hover:shadow-lg"
          >
            Get in Touch
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h8m-8 0l4 4m-4-4l4-4"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
