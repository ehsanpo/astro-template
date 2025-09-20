"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Calendar,
  Users,
  Star,
  Eye,
  Heart,
  MoreHorizontal,
} from "lucide-react";
import { cn } from "../../lib/utils";

interface PortfolioItem {
  title?: string;
  title2?: string;
  description?: string;
  tagline?: string;
  date?: string;
  permalink?: string;
  client?: string;
  agency?: string;
  category?: string[];
  tag?: string[];
  case_link_url?: string;
  background_image?: any;
  cover?: any;
  logo?: any;
  logo2?: any;
  images?: any[];
  onHome?: boolean;
  video?: string;
  slug?: string;
}

interface ProjectCardProps {
  item: PortfolioItem;
  className?: string;
  showShare?: boolean;
}

export function ProjectCard({
  item,
  className,
  showShare = true,
}: ProjectCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const likes = Math.floor(Math.random() * 50) + 10; // Mock likes

  const delay = [
    "",
    "delay-75",
    "delay-100",
    "delay-150",
    "delay-200",
    "delay-300",
  ];

  return (
    <motion.div
      className={cn(
        "group block relative clip overflow-hidden bg-neutral-800 min-h-96 rounded-lg",
        className
      )}
      whileHover={{ scale: 1.02 }}
      data-categories={JSON.stringify(item.category)}
    >
      {/* Featured Badge */}
      {item.onHome && (
        <div className="absolute top-4 left-4 z-30">
          <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-500/90 text-primary-100 text-xs rounded-full">
            <Star className="w-3 h-3" />
            Featured
          </span>
        </div>
      )}

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent z-20" />

      {/* Background Image */}
      <div>
        <img
          src={item.background_image?.src || `/img/${item.background_image}`}
          alt={item.title}
          className="absolute -top-1 z-10 w-full m-auto h-full object-cover transition-all duration-300 group-hover:scale-105  group-hover:filter group-hover:blur-sm group-hover:brightness-75"
          style={{
            viewTransitionName: `portfolio-image-${item.permalink || item.slug}`,
          }}
        />
      </div>

      {/* Overlay with actions */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-25">
        <div className="flex items-center space-x-3">
          {item.case_link_url && (
            <button
              onClick={() => window.open(item.case_link_url, "_blank")}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <ExternalLink size={16} />
            </button>
          )}
          {item.video && (
            <button
              onClick={() => window.open(item.video, "_blank")}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <Eye size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <div className="flex items-center gap-4 mb-3">
          <div>
            <a href={`/portfolio/${item.permalink || item.slug}`}>
              <h3
                className="text-xl font-basement text-white group-hover:text-primary-500 transition-colors"
                style={{
                  viewTransitionName: `portfolio-title-${item.permalink || item.slug}`,
                }}
              >
                <div className="hover:text-primary-400">{item.title}</div>
              </h3>
              <p
                className="text-primary-500 font-kabel leading-tight mb-1"
                style={{
                  viewTransitionName: `portfolio-tagline-${item.permalink || item.slug}`,
                }}
              >
                {item.tagline || ""}
              </p>
              {item.title2 && (
                <p className="text-gray-300 text-sm font-kabel">
                  {item.title2}
                </p>
              )}
            </a>
          </div>
        </div>

        {/* Metadata */}
        <div className="flex items-center justify-between text-xs text-gray-300 mb-4">
          <div className="flex items-center space-x-4">
            {item.date && (
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>
                  {item.date
                    ? new Date(
                        (item.date.length === 4
                          ? `${item.date}-01`
                          : item.date
                        ).replace(/-/g, "/")
                      ).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                      })
                    : ""}
                </span>
              </div>
            )}
            {item.client && (
              <div className="flex items-center space-x-1">
                <Users className="w-3 h-3" />
                <span>{item.client}</span>
              </div>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 group-hover:mt-4 overflow-hidden">
          {item.category?.slice(0, 3).map((cat, index) => (
            <span
              key={cat}
              className={`overflow-hidden px-3 group-hover:py-1 bg-primary-500/80 text-primary-100 text-sm group-hover:visible group-hover:h-7 invisible h-0 ease-in-out transition-all ${delay[index]}`}
              style={{
                viewTransitionName: `portfolio-category-${item.permalink || item.slug}-${cat}`,
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 group-hover:mt-4 overflow-hidden">
          {item.tag?.slice(0, 3).map((tag, index) => (
            <span
              key={tag}
              className={`${index > 2 ? "hidden" : ""} overflow-hidden px-3 group-hover:py-1 bg-purple-500/80 text-purple-100 text-sm group-hover:visible group-hover:h-7 invisible h-0 border-l-2 border-purple-500/30 hover:border-purple-500 transition-all ${delay[index]}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* More Actions Menu */}
      {showShare && (
        <div className="absolute top-4 right-4 z-30">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowShareMenu(!showShareMenu);
            }}
            className="p-2 bg-black/20 backdrop-blur-sm rounded-full text-white hover:bg-black/40 transition-colors opacity-0 group-hover:opacity-100"
          >
            <MoreHorizontal size={16} />
          </button>

          {showShareMenu && (
            <div className="absolute right-0 top-full mt-2">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 min-w-[150px]">
                <div className="text-white text-sm space-y-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      navigator.clipboard.writeText(
                        window.location.origin +
                          `/portfolio/${item.permalink || item.slug}`
                      );
                    }}
                    className="block w-full text-left hover:text-primary-400"
                  >
                    Copy Link
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const tweetUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(item.title || "Check out this project")}&url=${encodeURIComponent(window.location.origin + "/portfolio/" + (item.permalink || item.slug))}`;
                      window.open(tweetUrl);
                    }}
                    className="block w-full text-left hover:text-primary-400"
                  >
                    Share on X
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Glossy overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20" />
    </motion.div>
  );
}
