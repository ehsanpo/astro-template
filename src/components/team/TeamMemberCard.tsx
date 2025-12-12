import { Linkedin } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  linkedin?: string;
  img?: string;
}

export default function TeamMemberCard({ name, role, linkedin, img }: TeamMemberCardProps) {
  const initials = name.split(" ").map(n => n[0]).join("");
  
  return (
    <div className="flex items-center gap-3 p-3 bg-white dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-neutral-700 hover:shadow-md transition-shadow">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center text-white font-semibold text-lg overflow-hidden">
        {img ? (
          <img src={img} alt={name} className="w-full h-full object-cover" />
        ) : (
          initials
        )}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm text-gray-900 dark:text-white truncate">
          {name}
        </h4>
        <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
          {role}
        </p>
      </div>
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 p-2 text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          aria-label={`${name}'s LinkedIn profile`}
        >
          <Linkedin size={18} />
        </a>
      )}
    </div>
  );
}
