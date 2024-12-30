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
}

const Heading: React.FC<Props> = ({
  level = "h2",
  gradient = false,
  shadow = false,
  floating = false,
  className = "",
  children,
}) => {
  const Tag = level as keyof JSX.IntrinsicElements; // Ensures Tag is a valid HTML heading element
  const headingClass = getHeadingClass({ gradient, shadow, floating });

  return <Tag className={`${headingClass} ${className}`}>{children}</Tag>;
};

export default Heading;
