import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : undefined}
      className={`bg-white dark:bg-neutral-800 rounded-lg shadow-sm p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
