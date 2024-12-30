import React from "react";
import type { HeadingLevel } from "./types";
import { getHeadingClass } from "./utils";

interface Props {
  level?: HeadingLevel;
  gradient?: boolean;
  shadow?: boolean;
  floating?: boolean;
  className?: string;
  children?: React.ReactNode;
  backplate?: boolean;
}

const Heading: React.FC<Props> = ({
  level = "h2",
  gradient = false,
  shadow = false,
  floating = false,
  className = "",
  children,
  backplate,
}) => {
  const Tag = level as keyof JSX.IntrinsicElements; // Ensures Tag is a valid HTML heading element
  const headingClass = getHeadingClass({ gradient, shadow, floating });

  return (
    <>
      {backplate && (
        <div className="absolute left-0 top-[-20%] w-full  text-8xl">xxx</div>
      )}
      <Tag className={`relative ${headingClass} ${className}`}>{children}</Tag>
    </>
  );
};

export default Heading;
