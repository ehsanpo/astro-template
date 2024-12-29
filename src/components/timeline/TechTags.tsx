import React from 'react';

interface TechTagsProps {
  technologies: string[];
}

export const TechTags: React.FC<TechTagsProps> = ({ technologies }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/70 border border-white/20"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};