import React from "react";
import { motion } from "framer-motion";
import { MagicCard } from "./ui/magic-card";
import { findTimelineMatch } from "../utils/data";

interface StackCardProps {
  readonly slug: string;
  readonly labels: string[];
  readonly icon: string;
  readonly data: string[];
  readonly parentIndex: number;
}

function getExpertiseColor(level: number): string {
  if (level >= 7) return "bg-green-500";
  if (level >= 4) return "bg-blue-500";
  if (level >= 1) return "bg-yellow-500";
  return "bg-gray-400";
}

export default function StackCard({
  slug,
  labels,
  icon,
  data,
  parentIndex,
}: StackCardProps) {
  const colors = [
    "from-primary-500/50 to-primary-500",
    "from-primary-500/50 to-primary-500",
    "from-primary-500/50 to-primary-500",

    "from-blue-500/50 to-blue-500 ",
    "from-blue-500/50 to-blue-500",
    "from-blue-500/50 to-blue-500 ",

    "from-blue-500/50 to-secondary-500 ",
    "from-blue-500/50 to-secondary-500 ",
    "from-blue-500/50 to-secondary-500 ",
  ];

  const getExpertiseLevel = (level: number): string => {
    if (level === 10) return "Expert";
    if (level >= 7 && level <= 9) return "Advanced";
    if (level >= 4 && level <= 6) return "Professional";
    if (level >= 1 && level <= 3) return "Beginner";
    return "No Experience";
  };

  return (
    <motion.div className={` rounded-lg  `} whileHover={{ scale: 1.02 }}>
      <MagicCard
        className="dark:bg-neutral-800/50  bg-gray-300/50 px-6 pt-10 pb-6 clip backdrop-blur-lg cursor-pointer flex-col items-center justify-center1 shadow-2xl whitespace-nowrap rounded-2xl"
        gradientColor={"#000000"}
      >
        <div className="flex items-center gap-4 mb-6">
          <img src={icon} alt={slug} className="w-12 h-12" />
          <h3 className="text-xl font-basement dark:text-gray-300 text-gray-600 ">
            {slug}
          </h3>
        </div>
        <div className="space-y-4 ">
          {labels.map((label, index) => {
            const timelineMatch = findTimelineMatch(label);
            const yearsOfExperience = timelineMatch?.yearsOfExperience;
            const stillActive = timelineMatch?.stillActive;
            console.log(stillActive);

            return (
              <div key={label} className="relative group/stat">
                <div className="bg-neutral-800 px-2 py-2 rounded clip2">
                  <div className="flex justify-between gap-2">
                    <span className="dark:text-gray-300 text-gray-700">
                      <span
                        className={`inline-block mr-1 w-3 h-3 rounded-full ${getExpertiseColor(
                          stillActive
                        )}`}
                      ></span>{" "}
                      {label}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="group-hover/stat:opacity-100 opacity-0 text-primary-500 transition-all duration-300 ease-in-out">
                        {getExpertiseLevel(parseInt(data[index]))}
                      </span>
                    </div>
                  </div>

                  {yearsOfExperience && (
                    <span className="text-xs dark:text-gray-400 text-gray-500">
                      {yearsOfExperience} years
                    </span>
                  )}
                  <div className="h-2 mt-1 bg-dark/50 rounded-full overflow-hidden  inset-0 opacity-40">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${colors[parentIndex]}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Number(data[index]) * 10}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </MagicCard>
    </motion.div>
  );
}
