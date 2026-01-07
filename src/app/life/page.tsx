import TimelineLife from "@/components/timeline/TimelineLife";
import { Hero } from "@/components/hero/Hero";
import BoxReveal from "@/components/ui/box-reveal";
import Link from "@/components/Link";
import portfolioData from "@/data/portfolio.json";

export const metadata = {
  title: "Life Journey - Ehsan Pourhadi",
  description: "Personal milestones and life timeline of Ehsan Pourhadi",
};

export default function LifePage() {
  const { life } = portfolioData;
  const lifeHighlight = life.filter((item: any) => item.highlighted === true);
  const sortedLife = lifeHighlight.sort(
    (a: any, b: any) => parseInt(a.year) - parseInt(b.year)
  );

  return (
    <>
      <Hero fullHeight title="Life Journey" img="/img/life/ep.jpg">
        <div>
          <BoxReveal boxColor="bg-secondary-500" duration={0.1} delay={0.2}>
            <p className="mb-5 text-2xl dark:text-gray-300">
              From Tehran to Malmö - A journey of growth, learning, and
              memorable moments.
            </p>
          </BoxReveal>
          <BoxReveal boxColor="bg-primary-500" duration={0.5} delay={0.2}>
            <p className="text-xl dark:text-gray-300">
              Every milestone tells a story. Here&apos;s a glimpse into the
              personal moments that shaped who I am today.
            </p>
          </BoxReveal>
          <BoxReveal boxColor="bg-primary-500" duration={0.6} delay={0.3}>
            <div>
              <Link
                href="/about"
                className="mt-3"
                text="Professional Journey"
              />
              <Link href="/contact" className="mt-3" text="Get in Touch" />
            </div>
          </BoxReveal>
        </div>
      </Hero>

      <section className="container mx-auto px-4 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Timeline of My Life
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400">
            Personal milestones, achievements, and memorable moments that
            defined my journey
          </p>
        </div>
      </section>

      <TimelineLife lifeData={sortedLife} />

      <section className="bg-opium py-20 dark:bg-neutral-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Want to Know More?
          </h2>
          <p className="mb-8 text-xl text-gray-600 dark:text-gray-300">
            Explore my professional journey and projects
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/about"
              text="Professional Journey"
              className="btn-primary"
            />
            <Link
              href="/portfolio"
              text="View Portfolio"
              className="btn-secondary"
            />
          </div>
        </div>
      </section>
    </>
  );
}
