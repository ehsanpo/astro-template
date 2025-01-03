import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  href: string;
  text: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ href, text, className }) => {
  return (
    <a
      href={href}
      className={twMerge(
        "btn relative inline-block hover:shadow-primary-500 font-bold text-primary-600 uppercase text-sm font-tomorrow tracking-wide rounded-lg transition-all border border-primary-600 group hover:bg-primary-600 hover:text-white hover:shadow-sm active:border-primary-100",
        className
      )}
    >
      <span className="flex items-center justify-center px-7 py-4 relative overflow-hidden bg-primary">
        <div className="relative z-20">
          <p className="group-hover:-translate-y-10 transform transition-transform duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            {text}
          </p>
          <p className="absolute top-10 left-0 group-hover:top-0 transform all-transform duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            {text}
          </p>
        </div>
      </span>
      <span className="z-10 absolute inset-0 bg-primary hidden group-hover:block glitch-effect"></span>
    </a>
  );
};

export default Button;
