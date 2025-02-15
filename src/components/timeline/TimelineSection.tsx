import React from "react";
import { ParallaxBanner, Parallax } from "react-scroll-parallax";
import { Award } from "lucide-react";
import { Project } from "./Project";
import { TechTags } from "./TechTags";

interface TimelineSectionProps {
  year: string;
  title: string;
  company: string;
  description: string;
  image: string;
  technologies: string[];
  project?: {
    title: string;
    description: string;
    image?: string;
    link?: {
      href: string;
      title: string;
    };
    github?: string;
    technologies: string[];
  };
  awards?: string[];
  reverse?: boolean;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  year,
  title,
  company,
  description,
  image,
  technologies,
  project,
  awards,
  reverse = false,
}) => {
  return (
    <section
      className={`relative  ${awards ? "min-h-[1000px]" : "min-h-[600px]"} ${
        reverse ? "clip -my-2" : ""
      }`}
    >
      <ParallaxBanner
        layers={[
          {
            image,
            speed: -20,
            opacity: [0.8, 1],
          },
        ]}
        className={`relative  ${awards ? "min-h-[1000px]" : "min-h-[600px]"}`}
      >
        <div className="absolute inset-0 bg-black/50">
          <Parallax speed={-25}>
            <div
              className={`absolute container left-[5%]  right-[5%] text-8xl  font-basement text-secondary-500 ${
                reverse ? "text-left" : "text-right"
              }`}
            >
              {year}
            </div>
          </Parallax>

          <div
            className={`container mx-auto h-full flex items-center ${
              reverse ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xl ${
                reverse ? "ml-auto" : "mr-auto"
              } bg-black/40 backdrop-blur-md p-8 rounded-lg text-white border border-white/10`}
            >
              <h2 className="text-xl md:text-4xl font-bold mb-1 text-primary-500">
                {company}
              </h2>
              <h3 className="text-base md:text-2xl text-secondary-500/90 mb-2">
                {title}
              </h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                {description}
              </p>

              <TechTags technologies={technologies} />

              {project && Object.keys(project).length > 0 && (
                <Project {...project} />
              )}

              {awards && awards.length > 0 && (
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-amber-400 mt-6">
                    <Award size={20} />
                    <span className="font-semibold">Awards</span>
                  </div>
                  {awards.map((award, index) => (
                    <div key={index} className="ml-7 text-sm text-white/70">
                      {award}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </ParallaxBanner>
    </section>
  );
};
