import React from "react";
import { Heading } from "../ui/heading";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Tilt from "react-parallax-tilt";

interface Props {
  item: {
    title: string;
    tagline: string;
    client: string;
    agency: string;
    tag: string[];
    category: string[];
    logo: {
      height: number;
      width: number;
      src: string;
    };
    logo2?: {
      height: number;
      width: number;
      src: string;
    };
    background_image: {
      height: number;
      width: number;
      src: string;
    };
    permalink: string;
    images: {
      height: number;
      width: number;
      src: string;
    }[];
    case_link_url?: string;
    content: any;
    date: string;
  };
}

const PortfolioHeader: React.FC<Props> = ({ item }) => {
  const {
    title,
    tagline,
    client,
    agency,
    tag,
    logo,
    logo2,
    background_image,
    images,
    category,
    permalink,
    date,
  } = item;

  return (
    <div className="dark:bg-neutral-800 bg-gray-100">
      <header className="max-w-6xl mx-auto px-4 py-12">
        <ParallaxProvider>
          <div className="container relative">
            <div className="grid md:grid-cols-2 ">
              <div className="self-center">
                <Heading
                  className=" mb-4 !text-left"
                  level="h1"
                  gradient
                  style={{
                    viewTransitionName: `portfolio-title-${item.permalink}`,
                  }}
                >
                  {title}
                </Heading>
                <p
                  className="text-xl mb-4"
                  style={{
                    viewTransitionName: `portfolio-tagline-${item.permalink}`,
                  }}
                >
                  {tagline}
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <h3 className="min-w-20 font-medium text-secondary-500 uppercase ">
                      Client
                    </h3>
                    <p className="text-secondary-500 font-basement ">
                      {client}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <h3 className="min-w-20 font-medium text-secondary-500 uppercase ">
                      Year
                    </h3>
                    <p className="text-secondary-500 font-basement ">{date}</p>
                  </div>
                  {agency && (
                    <div className="flex gap-4">
                      <h3 className="min-w-20 font-medium text-yellow-500 uppercase">
                        Agency
                      </h3>
                      <p className="text-yellow-500 font-basement">{agency}</p>
                    </div>
                  )}

                  <div className="flex gap-4 ">
                    <h3 className="min-w-20 font-medium text-primary-400 uppercase">
                      Role
                    </h3>
                    <div className="flex flex-wrap gap-2 ">
                      {category.map((categoryTag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm clip2 border-l-2  text-primary-400 bg-primary-500/20  border-primary-500/30 hover:border-primary transition-all"
                        >
                          {categoryTag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <h3 className="min-w-20 font-medium text-gray-500 dark:text-purple-400 uppercase">
                      Tech
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {tag.map((techTag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm clip2 border-l-2 border-purple-500/30  hover:border-purple-500 transition-all"
                        >
                          {techTag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex-1 mt-10">
                <Tilt
                  perspective={1000}
                  className="portfolio-hero-image-tilt relative"
                >
                  <div className="portfolio-hero-image ">
                    <Parallax speed={-10}>
                      <img
                        height={logo.height}
                        width={logo.width}
                        src={logo.src}
                        alt="Portfolio Image"
                        className="portfolio-hero-box  object-cover  porfolio-hero-large mr-4 rounded-lg"
                      />
                    </Parallax>
                  </div>
                  {images[0] && (
                    <div className="portfolio-hero-image absolute top-[100%] w-full left-0">
                      <Parallax speed={10}>
                        <img
                          height={images[0].height}
                          width={images[0].width}
                          src={images[0].src}
                          alt="Portfolio Image"
                          className="portfolio-hero-box porfolio-hero-medium -mr-4 rounded-lg max-h-[20vh] object-cover"
                        />
                      </Parallax>
                    </div>
                  )}

                  {logo2 && (
                    <div className="portfolio-hero-image absolute top-[100%] w-full left-0">
                      <Parallax
                        speed={5}
                        className="portfolio-hero-box porfolio-hero-small"
                      >
                        <img
                          height={logo2?.height}
                          width={logo2?.width}
                          src={logo2?.src}
                          alt="Portfolio Image"
                          className=" rounded-lg "
                        />
                      </Parallax>
                    </div>
                  )}
                  {background_image && (
                    <div className="portfolio-hero-image absolute top-[30%] w-full ">
                      <Parallax
                        speed={5}
                        className="portfolio-hero-box porfolio-hero-small--right  absolute top-[10%] w-full left-0"
                      >
                        <img
                          height={background_image.height}
                          width={background_image.width}
                          src={background_image.src}
                          alt="Portfolio Image"
                          className=" rounded-lg"
                          style={{
                            viewTransitionName: `portfolio-image-${item.permalink}`,
                          }}
                        />
                      </Parallax>
                    </div>
                  )}
                </Tilt>
              </div>
            </div>
          </div>
        </ParallaxProvider>
      </header>
    </div>
  );
};

export default PortfolioHeader;
