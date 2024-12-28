import type { HeadingStyles } from './types';

export function getHeadingClass({ gradient, shadow, floating }: HeadingStyles): string {
  const baseClasses = [
    'font-bold',
    'text-gray-900',
    'dark:text-white',
    'transition-all'
  ];

  if (gradient) {
    baseClasses.push(
      'bg-clip-text',
      'text-transparent',
      'bg-gradient-to-r',
      'from-primary-600',
      'to-primary-400',
      'gradient-text',
    );
  }

  if (shadow) {
    baseClasses.push('drop-shadow-md');
  }

  if (floating) {
    baseClasses.push(
      'hover:-translate-y-1',
      'hover:drop-shadow-xl',
      'duration-300'
    );
  }

  return baseClasses.join(' ');
}