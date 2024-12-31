import React from "react";
import type { HeadingLevel } from "./types";
import { getHeadingClass } from "./utils";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

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
    <ParallaxProvider>
      <Tag className={`relative ${className} ${backplate ? "pb-4" : ""}`}>
        {backplate && (
          <Parallax
            speed={2}
            className="absolute font-bold left-0 top-[-100%] w-full opacity-10 text-9xl"
          >
            <div>{children}</div>
          </Parallax>
        )}
        <span className={`${headingClass} `}>{children}</span>
      </Tag>
    </ParallaxProvider>
  );
};

export default Heading;
