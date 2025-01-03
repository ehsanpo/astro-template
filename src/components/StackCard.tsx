import React from "react";
import { motion } from "framer-motion";
import { MagicCard } from "./ui/magic-card";

interface StackCardProps {
  slug: string;
  labels: string[];
  icon: string;
  data: string[];
  parentIndex: number;
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

  return (
    <motion.div className={` rounded-lg  `} whileHover={{ scale: 1.02 }}>
      <MagicCard
        className="dark:bg-gray-800/50  bg-gray-300/50 px-6 pt-10 pb-6 clip backdrop-blur-lg cursor-pointer flex-col items-center justify-center1 shadow-2xl whitespace-nowrap rounded-2xl"
        gradientColor={"#000000"}
      >
        <div className="flex items-center gap-4 mb-6">
          <img src={icon} alt={slug} className="w-12 h-12" />
          <h3 className="text-xl font-basement dark:text-gray-300 text-gray-600 ">
            {slug}
          </h3>
        </div>
        <div className="space-y-4 ">
          {labels.map((label, index) => (
            <div key={label} className="relative group/stat">
              <div className="flex justify-between mb-1 ">
                <span className="dark:text-gray-300 text-gray-700">
                  {label}
                </span>
                <span className="group-hover/stat:opacity-100 opacity-0 text-primary-500">
                  {data[index]}/10
                </span>
              </div>
              <div className="h-2 bg-dark/50 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full bg-gradient-to-r ${colors[parentIndex]}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Number(data[index]) * 10}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </MagicCard>
    </motion.div>
  );
}
