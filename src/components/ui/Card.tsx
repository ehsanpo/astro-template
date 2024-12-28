import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  action?: ReactNode;
  children?: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ 
  title,
  subtitle,
  icon,
  action,
  children,
  className = '',
  hover = true 
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : undefined}
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 ${className}`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          {icon && <div className="text-4xl">{icon}</div>}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
            {subtitle && <p className="text-gray-600 dark:text-gray-400">{subtitle}</p>}
          </div>
        </div>
        {action && <div>{action}</div>}
      </div>
      {children && (
        <div className="text-gray-600 dark:text-gray-400">
          {children}
        </div>
      )}
    </motion.div>
  );
}