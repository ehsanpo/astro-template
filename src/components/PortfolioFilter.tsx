import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

interface PortfolioFilterProps {
  categories: string[];
  category: string;
  onCategoryChange?: (category: string) => void;
}

export default function PortfolioFilter({
  categories,
  category: initialCategory,
  onCategoryChange
}: PortfolioFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  const filterPortfolio = (category: string) => {
    setSelectedCategory(category);
    if (onCategoryChange) {
      onCategoryChange(category);
    }
    
    const portfolioCards = document.querySelectorAll("[data-categories]");

    portfolioCards.forEach((card) => {
      const categories = JSON.parse(
        card.getAttribute("data-categories") || "[]"
      );

      if (category === "all" || categories.includes(category)) {
        (card as HTMLElement).style.display = "block";
      } else {
        (card as HTMLElement).style.display = "none";
      }
    });
  };

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <motion.button
        onClick={() => filterPortfolio("all")}
        className={clsx(
          "px-4 py-2 rounded-full transition-colors",
          selectedCategory === "all"
            ? "bg-primary-500 text-black"
            : "bg-black/50 text-light hover:bg-black/70"
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Show all categories"
      >
        All
      </motion.button>
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => filterPortfolio(category)}
          className={clsx(
            "px-4 py-2 rounded-full transition-colors",
            selectedCategory === category
              ? "bg-primary-500 text-black"
              : "bg-black/50 text-light hover:bg-black/70"
          )}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Filter by ${category}`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}