import type { ReactNode } from 'react';

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`text-gray-600 dark:text-gray-400 ${className}`}>
      {children}
    </div>
  );
}