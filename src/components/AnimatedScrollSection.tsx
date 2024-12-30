import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger, Flip);

interface AnimatedScrollSectionProps {
  titleUp: string;
  titleDown: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
  text: string;
  layout?: number;
}

export const AnimatedScrollSection: React.FC<AnimatedScrollSectionProps> = ({
  titleUp,
  titleDown,
  imageSrc,
  imageWidth,
  imageHeight,
  text,
  layout = 1,
}) => {
  const contentWrapRef = useRef<HTMLDivElement>(null);
  const titleWrapRef = useRef<HTMLDivElement>(null);
  const titleUpRef = useRef<HTMLSpanElement>(null);
  const titleDownRef = useRef<HTMLSpanElement>(null);
  const maskRef = useRef<SVGCircleElement>(null);
  const imageRef = useRef<SVGImageElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  // const isCircle = [1, 2, 3].includes(layout);

  // Initialize smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    lenis.on("scroll", () => ScrollTrigger.update());

    const scrollFn = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };

    requestAnimationFrame(scrollFn);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Setup animations
  useEffect(() => {
    if (
      !contentWrapRef.current ||
      !titleWrapRef.current ||
      !titleUpRef.current ||
      !titleDownRef.current ||
      !maskRef.current ||
      !imageRef.current ||
      !textRef.current
    )
      return;

    const flipstate = Flip.getState([titleUpRef.current, titleDownRef.current]);

    const content = contentWrapRef.current.querySelector(".content--layout");
    if (content) {
      content.prepend(titleUpRef.current, titleDownRef.current);
    }

    const isCircle = maskRef.current.tagName.toLowerCase() === "circle";

    // Title and image animation
    const flip = Flip.from(flipstate, {
      ease: "none",
      simple: true,
    })
      .fromTo(
        maskRef.current,
        {
          attr: isCircle
            ? { r: maskRef.current.getAttribute("r") }
            : { d: maskRef.current.getAttribute("d") },
        },
        {
          ease: "none",
          attr: isCircle
            ? { r: maskRef.current.dataset.valueFinal }
            : { d: maskRef.current.dataset.valueFinal },
        },
        0
      )
      .fromTo(
        imageRef.current,
        {
          transformOrigin: "50% 50%",
          filter: "brightness(100%)",
        },
        {
          ease: "none",
          scale: isCircle ? 1.2 : 1,
          filter: "brightness(150%)",
        },
        0
      );

    // Create scroll triggers
    ScrollTrigger.create({
      trigger: contentWrapRef.current,
      start: "clamp(top bottom-=30%)",
      end: "+=40%",
      scrub: 1,
      animation: flip,
    });

    // Text animation
    // gsap.fromTo(
    //   textRef.current,
    //   {
    //     opacity: 0,
    //     y: 50,
    //   },
    //   {
    //     opacity: 0.5,
    //     y: 0,
    //     duration: 1,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //       trigger: textRef.current,
    //       start: "top bottom-=20%",
    //       end: "bottom center",
    //       toggleActions: "play none none reverse",
    //       scrub: 1,
    //     },
    //   }
    // );
  }, []);

  const Filters = [
    <defs>
      <filter id={`displacementFilter1-${layout}`}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.03"
          numOctaves="3"
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="50"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
      <mask id={`circleMask${layout}`}>
        <circle
          ref={maskRef}
          cx="50%"
          cy="50%"
          r="0"
          data-value-final="820"
          fill="white"
          className="mask"
          style={{ filter: `url(#displacementFilter1-${layout})` }}
        />
      </mask>
    </defs>,
    <defs>
      <filter id={`displacementFilter2-${layout}`}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.1"
          numOctaves="1"
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          result="displacement"
          scale="100"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feMorphology
          operator="dilate"
          radius="2"
          result="morph"
          in="displacement"
        />
      </filter>
      <mask id={`circleMask${layout}`}>
        <circle
          ref={maskRef}
          cx="50%"
          cy="50%"
          r="0"
          data-value-final="950"
          fill="white"
          className="mask"
          style={{ filter: `url(#displacementFilter2-${layout})` }}
        />
      </mask>
    </defs>,
    <defs>
      <filter id={`displacementFilter3-${layout}`}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.02"
          numOctaves="3"
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="80"
          result="displacement"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
      <mask id={`circleMask${layout}`}>
        <path
          ref={maskRef}
          d="M 0 280 Q 500 280 1000 280 Q 500 280 0 280"
          data-value-final="M 0 280 Q 500 800 1000 280 Q 500 -200 0 280"
          fill="white"
          className="mask"
          style={{ filter: `url(#displacementFilter3-${layout})` }}
        />
      </mask>
    </defs>,
    <defs>
      <filter id={`displacementFilter4-${layout}`}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.5"
          numOctaves="1"
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="50"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
      <mask id={`circleMask${layout}`}>
        <circle
          ref={maskRef}
          cx="50%"
          cy="50%"
          r="0"
          data-value-final="770"
          fill="white"
          className="mask"
          style={{ filter: `url(#displacementFilter4-${layout})` }}
        />
      </mask>
    </defs>,
    <defs>
      <filter id={`displacementFilter5-${layout}`}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.1"
          numOctaves="3"
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="150"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
      <mask id={`circleMask${layout}`}>
        <circle
          ref={maskRef}
          cx="50%"
          cy="50%"
          r="0"
          data-value-final="580"
          fill="white"
          className="mask"
          style={{ filter: `url(#displacementFilter5-${layout})` }}
        />
      </mask>
    </defs>,
    <defs>
      <filter id={`displacementFilter6-${layout}`}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.01"
          numOctaves="3"
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          result="displacement"
          scale="150"
          xChannelSelector="R"
          yChannelSelector="G"
        />
        <feGaussianBlur in="displacement" stdDeviation="10" />
      </filter>
      <mask id={`circleMask${layout}`}>
        <circle
          ref={maskRef}
          cx="50%"
          cy="50%"
          r="0"
          data-value-final="720"
          fill="white"
          className="mask"
          style={{ filter: `url(#displacementFilter6-${layout})` }}
        />
      </mask>
    </defs>,
    <defs>
      <filter id={`displacementFilter7-${layout}`}>
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.03"
          numOctaves="1"
          result="noise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="120"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
      <mask id={`circleMask${layout}`}>
        <circle
          ref={maskRef}
          cx="50%"
          cy="50%"
          r="0"
          data-value-final="770"
          fill="white"
          className="mask"
          style={{ filter: `url(#displacementFilter7-${layout})` }}
        />
      </mask>
    </defs>,
  ];

  return (
    <div className="content-wrap" ref={contentWrapRef}>
      <div className="content">
        <div className="title-wrap" ref={titleWrapRef}>
          <span className="title title--up whitespace-nowrap" ref={titleUpRef}>
            {titleUp}
          </span>
          <span
            className="title title--down whitespace-nowrap"
            ref={titleDownRef}
          >
            {titleDown}
          </span>
        </div>
      </div>
      <div className={`content content--layout content--layout-${layout}`}>
        <svg
          className={`content__img content__img--${layout}`}
          width={imageWidth}
          height={imageHeight}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox={`0 0 ${imageWidth} ${imageHeight}`}
        >
          {Filters[layout - 1]}
          <image
            ref={imageRef}
            xlinkHref={imageSrc}
            width={imageWidth}
            height={imageHeight}
            mask={`url(#circleMask${layout})`}
          />
        </svg>
        <p ref={textRef} className="content__text">
          {text}
        </p>
      </div>
    </div>
  );
};
