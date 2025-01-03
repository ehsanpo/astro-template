import React from "react";
import type { HeadingLevel } from "./types";
import { getHeadingClass } from "./utils";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

interface Props {
  level?: HeadingLevel;
  subtitle?: string;
  gradient?: boolean;
  shadow?: boolean;
  floating?: boolean;
  className?: string;
  children?: React.ReactNode;
  backplate?: boolean;
}

const Heading: React.FC<Props> = ({
  level = "h2",
  subtitle,
  gradient = false,
  shadow = false,
  floating = false,
  className = "",
  children,
  backplate,
}) => {
  const Tag = level as keyof JSX.IntrinsicElements; // Ensures Tag is a valid HTML heading element
  const headingClass = getHeadingClass({
    gradient,
    shadow,
    floating,
  });

  return (
    <ParallaxProvider>
      <Tag
        className={`relative text-center pt-12 text-5xl ${className} ${
          backplate ? "pb-12" : ""
        }`}
      >
        {backplate && (
          <Parallax
            speed={5}
            className="blur-sm absolute font-bold left-0 top-[-10%] w-full opacity-10 lg:text-9xl"
          >
            <div>{children}</div>
          </Parallax>
        )}
        <span className={`${headingClass} text-center `}>{children}</span>
        {subtitle && (
          <>
            <br />
            <div className="text-lg my-3">{subtitle}</div>
          </>
        )}
      </Tag>
    </ParallaxProvider>
  );
};

export default Heading;
