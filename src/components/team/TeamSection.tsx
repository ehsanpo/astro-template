import { useState } from "react";
import { Users, ChevronDown, ChevronUp } from "lucide-react";
import TeamMemberCard from "./TeamMemberCard";

interface TeamMember {
  name: string;
  role: string;
  linkedin?: string;
  img?: string;
}

interface TeamSectionProps {
  team: TeamMember[];
}

export default function TeamSection({ team }: TeamSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!team || team.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 border-t border-white/20 pt-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-left group hover:text-primary-400 transition-colors"
      >
        <div className="flex items-center gap-2 text-white/90">
          <Users size={20} />
          <span className="font-semibold">
            Team Members ({team.length})
          </span>
        </div>
        {isExpanded ? (
          <ChevronUp size={20} className="text-white/70 group-hover:text-primary-400" />
        ) : (
          <ChevronDown size={20} className="text-white/70 group-hover:text-primary-400" />
        )}
      </button>
      
      {isExpanded && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          {team.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              linkedin={member.linkedin}
              img={member.img}
            />
          ))}
        </div>
      )}
    </div>
  );
}
