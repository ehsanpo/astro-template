import React from "react";
import { ProjectLink } from "./ProjectLink";
import { ExternalLink, Github } from "lucide-react";
import { Parallax } from "react-scroll-parallax";

interface ProjectProps {
  title: string;
  description: string;
  image?: string;
  link?: {
    href: string;
    title: string;
  };
  github?: string;
  technologies: string[];
}

export const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  link,
  github,
  technologies,
}) => {
  return (
    <Parallax translateY={[-2, 4]}>
      <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
        <h4 className="text-lg font-semibold text-amber-400 mb-2">{title}</h4>
        <p className="text-white/70 text-sm mb-4">{description}</p>

        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-32 object-cover rounded-md mb-4"
          />
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-black/20 text-white/70 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mb-3">
          {link && <ProjectLink {...link} />}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white/80 transition-colors"
            >
              <Github size={16} />
              <span className="underline">View Code</span>
            </a>
          )}
        </div>
      </div>
    </Parallax>
  );
};
