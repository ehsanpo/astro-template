import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  href?: string;
  text?: string | React.ReactNode;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

const Button: React.FC<ButtonProps> = ({
  href,
  text,
  className,
  target = "_self",
}) => {
  return (
    <a
      href={href}
      className={twMerge(
        " btn px-4 py-2 relative inline-block hover:shadow-primary-500 font-bold text-primary-600 uppercase text-sm font-tomorrow tracking-wide rounded-lg transition-all border border-primary-600 group hover:bg-primary-600 hover:text-white hover:shadow-sm active:border-primary-100",
        className
      )}
      target={target}
    >
      <div className=" flex items-center justify-center px-4 py-2 relative overflow-hidden bg-primary">
        <div className="relative z-20">
          <div className="group-hover:-translate-y-10 transform transition-transform duration-[10.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
            {text}
          </div>
          <div className="absolute top-10 left-0 group-hover:top-0  transition-all duration-[3000ms] ">
            {text}
          </div>
        </div>
      </div>
      <span className="z-10 absolute inset-0 bg-primary hidden group-hover:block glitch-effect"></span>
    </a>
  );
};

export default Button;
