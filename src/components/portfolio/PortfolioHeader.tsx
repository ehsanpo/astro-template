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
  } = item;

  return (
    <header className="max-w-6xl mx-auto px-4 py-12">
      <ParallaxProvider>
        <div className="container relative">
          <div className="grid grid-cols-2">
            <div className="self-center">
              <Heading
                className="text-4xl md:text-5xl mb-4"
                level="h1"
                gradient
              >
                {title}
              </Heading>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                {tagline}
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <h3 className="w-14 font-medium text-gray-500 dark:text-gray-400">
                    Client
                  </h3>
                  <p className="text-gray-900 dark:text-white">{client}</p>
                </div>
                <div className="flex gap-4">
                  <h3 className="w-14 font-medium text-gray-500 dark:text-gray-400">
                    Agency
                  </h3>
                  <p className="text-gray-900 dark:text-white">{agency}</p>
                </div>
                <div className="flex gap-4 items-center">
                  <h3 className="w-14 font-medium text-gray-500 dark:text-gray-400">
                    Role
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.map((categoryTag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
                      >
                        {categoryTag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <h3 className="w-14 font-medium text-gray-500 dark:text-gray-400">
                    Tech
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tag.map((techTag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
                      >
                        {techTag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex-1">
              <Tilt perspective={1000} className="portfolio-hero-image-tilt">
                <div className="portfolio-hero-image">
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
                <div className="portfolio-hero-image">
                  <Parallax speed={10}>
                    <img
                      height={images[0].height}
                      width={images[0].width}
                      src={images[0].src}
                      alt="Portfolio Image"
                      className="portfolio-hero-box porfolio-hero-medium -mr-4 rounded-lg h-[20vh] object-cover"
                    />
                  </Parallax>
                </div>
                {logo2 && (
                  <div className="portfolio-hero-image">
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
                  <div className="portfolio-hero-image">
                    <Parallax
                      speed={5}
                      className="portfolio-hero-box porfolio-hero-small--right"
                    >
                      <img
                        height={background_image.height}
                        width={background_image.width}
                        src={background_image.src}
                        alt="Portfolio Image"
                        className=" rounded-lg"
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
  );
};

export default PortfolioHeader;
