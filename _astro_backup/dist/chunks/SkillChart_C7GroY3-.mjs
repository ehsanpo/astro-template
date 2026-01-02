import { jsxs, jsx } from 'react/jsx-runtime';
import React__default, { useState, useEffect } from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

Chart.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);
const categoryColors = {
  Overall: {
    bg: "rgba(34, 197, 94, 0.2)",
    border: "rgba(34, 197, 94, 1)",
    button: "bg-primary-500 text-primary-900"
  },
  "Front-end": {
    bg: "rgba(168, 85, 247, 0.2)",
    border: "rgba(168, 85, 247, 1)",
    button: "bg-purple-400 text-purple-900"
  },
  Backend: {
    bg: "rgba(251, 146, 60, 0.2)",
    border: "rgba(251, 146, 60, 1)",
    button: "bg-yellow-500 text-yellow-900"
  },
  Database: {
    bg: "rgba(59, 130, 246, 0.2)",
    border: "rgba(59, 130, 246, 1)",
    button: "bg-blue-500 text-cyan-900"
  },
  Design: {
    bg: "rgba(107, 114, 128, 0.2)",
    border: "rgba(107, 114, 128, 1)",
    button: "bg-white text-gray-900"
  },
  Cloud: {
    bg: "rgba(251, 146, 60, 0.2)",
    border: "rgba(251, 146, 60, 1)",
    button: "bg-orange-400 text-orange-900"
  },
  DevOps: {
    bg: "rgba(244, 63, 94, 0.2)",
    border: "rgba(244, 63, 94, 1)",
    button: "bg-rose-400 text-rose-900"
  },
  Apps: {
    bg: "rgba(20, 184, 166, 0.2)",
    border: "rgba(20, 184, 166, 1)",
    button: "bg-teal-500 text-teal-900"
  },
  Multimedia: {
    bg: "rgba(217, 70, 239, 0.2)",
    border: "rgba(217, 70, 239, 1)",
    button: "bg-fuchsia-400 text-fuchsia-900"
  }
};
const getExpertiseLevel = (level) => {
  if (level === 10) return "Expert";
  if (level >= 7 && level <= 9) return "Advanced";
  if (level >= 4 && level <= 6) return "Professional";
  if (level >= 1 && level <= 3) return "Beginner";
  return "No Experience";
};
const createOverallData = (data) => {
  const skillMap = /* @__PURE__ */ new Map();
  data.forEach((category) => {
    category.labels.forEach((label, index) => {
      const value = parseInt(category.data[index]);
      const currentValue = skillMap.get(label);
      if (!currentValue || currentValue < value) {
        skillMap.set(label, value);
      }
    });
  });
  return {
    labels: Array.from(skillMap.keys()),
    data: Array.from(skillMap.values()).map(String),
    slug: "Overall"
  };
};
const getCurrentColor = (category) => {
  return categoryColors[category] || categoryColors["Overall"];
};
const CategoryButton = ({
  category,
  isActive,
  onClick,
  skillCount
}) => {
  const categoryColor = categoryColors[category];
  return /* @__PURE__ */ jsxs(
    "button",
    {
      className: `flex w-[200px] items-center justify-center rounded-lg p-2 font-basement transition-all duration-200 ${isActive ? "scale-105 transform text-white shadow-lg" : `${categoryColor.button} transition-colors hover:bg-white`}`,
      style: isActive ? { backgroundColor: categoryColor.border } : {},
      onClick,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "mr-2 h-3 w-3 rounded-full",
            style: { backgroundColor: categoryColor.border }
          }
        ),
        category,
        /* @__PURE__ */ jsxs("span", { className: "ml-2 text-xs opacity-75", children: [
          "(",
          skillCount,
          ")"
        ] })
      ]
    }
  );
};
const SkillCard = ({
  skill,
  index,
  currentCategory,
  currentColor,
  isDarkMode
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: `rounded-lg p-4 ${isDarkMode ? "bg-gray-700" : "bg-gray-50"}`,
    children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold", style: { color: isDarkMode ? "#ffffff" : "#000000" }, children: skill.name }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "h-3 w-3 rounded-full",
              style: { backgroundColor: currentColor.border }
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", style: { color: isDarkMode ? "#ffffff" : "#000000" }, children: getExpertiseLevel(skill.value) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx("div", { className: `h-2 w-full rounded-full ${isDarkMode ? "bg-gray-600" : "bg-gray-200"}`, children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "h-2 rounded-full transition-all duration-300",
          style: {
            width: `${skill.value / 10 * 100}%`,
            backgroundColor: currentColor.border
          }
        }
      ) }) })
    ]
  },
  `${currentCategory}-${skill.name}-${index}`
);
const StatisticsCard = ({
  skillsData,
  currentCategory,
  currentColor,
  isDarkMode
}) => {
  const averageSkill = skillsData.length > 0 ? (skillsData.reduce((sum, skill) => sum + skill.value, 0) / skillsData.length).toFixed(1) : "0";
  const expertSkills = skillsData.filter((skill) => skill.value >= 9).length;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "mt-8 rounded-lg p-6",
      style: {
        backgroundColor: `${currentColor.bg.replace("0.2", "0.1")}`
      },
      children: [
        /* @__PURE__ */ jsx(
          "h4",
          {
            className: "mb-4 text-lg font-semibold",
            style: { color: isDarkMode ? "#ffffff" : "#000000" },
            children: currentCategory === "Overall" ? "Overall Statistics" : `${currentCategory} Statistics`
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", style: { color: currentColor.border }, children: skillsData.length }),
            /* @__PURE__ */ jsx("div", { className: "text-sm opacity-70", style: { color: isDarkMode ? "#ffffff" : "#000000" }, children: "Technologies" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", style: { color: currentColor.border }, children: averageSkill }),
            /* @__PURE__ */ jsx("div", { className: "text-sm opacity-70", style: { color: isDarkMode ? "#ffffff" : "#000000" }, children: "Average Expertise" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", style: { color: currentColor.border }, children: expertSkills }),
            /* @__PURE__ */ jsx("div", { className: "text-sm opacity-70", style: { color: isDarkMode ? "#ffffff" : "#000000" }, children: "Expert Level (9-10)" })
          ] })
        ] })
      ]
    }
  );
};
function SkillChart({ data, chartData, showButtons }) {
  const [currentChart, setCurrentChart] = React__default.useState(chartData);
  const [currentCategory, setCurrentCategory] = React__default.useState("Overall");
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const darkModeEnabled = document.documentElement.classList.contains("dark");
    setIsDarkMode(darkModeEnabled);
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    return () => {
      observer.disconnect();
    };
  }, []);
  const currentColor = getCurrentColor(currentCategory);
  const chartDatainternal = {
    labels: currentChart.labels,
    datasets: [
      {
        label: `${currentCategory} Skills`,
        data: currentChart.data,
        backgroundColor: currentColor.bg,
        borderColor: currentColor.border,
        borderWidth: 2,
        pointBackgroundColor: currentColor.border,
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: currentColor.border,
        fill: true
      }
    ]
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        max: 10,
        min: 0,
        angleLines: {
          color: isDarkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)"
        },
        grid: {
          color: isDarkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)"
        },
        pointLabels: {
          color: isDarkMode ? "#ffffff" : "#000000",
          font: {
            size: 14,
            family: "Basement, sans-serif"
          }
        },
        ticks: {
          color: isDarkMode ? "#ffffff" : "#000000",
          backdropColor: "transparent",
          stepSize: 2,
          font: {
            size: 12
          }
        }
      }
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: isDarkMode ? "#ffffff" : "#000000",
          font: {
            size: 14,
            family: "Basement, sans-serif"
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${getExpertiseLevel(context.parsed.r)}`;
          }
        }
      }
    }
  };
  const onSkillChartLoad = (category) => {
    setCurrentCategory(category);
    if (category === "Overall") {
      setCurrentChart(createOverallData(data));
      return;
    }
    const chart = data.find((chart2) => {
      return chart2.slug === category;
    });
    if (!chart) {
      return;
    }
    setCurrentChart(chart);
  };
  const skillsData = currentChart.labels.map((label, index) => ({
    name: label,
    value: parseInt(currentChart.data[index])
  }));
  return /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full max-w-6xl px-4 py-1", children: [
    showButtons && /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3", children: [
      "Overall",
      "Front-end",
      "Backend",
      "Database",
      "Design",
      "Cloud",
      "DevOps",
      "Apps",
      "Multimedia"
    ].map((category) => {
      const isActive = currentCategory === category;
      const skillCount = category === "Overall" ? createOverallData(data).labels.length : data.find((d) => d.slug === category)?.labels.length || 0;
      return /* @__PURE__ */ jsx(
        CategoryButton,
        {
          category,
          isActive,
          onClick: () => onSkillChartLoad(category),
          skillCount
        },
        category
      );
    }) }) }),
    /* @__PURE__ */ jsxs("div", { className: `rounded-xl p-8 shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-white"}`, children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsx(
          "h3",
          {
            className: "mb-2 text-2xl font-bold",
            style: { color: isDarkMode ? "#ffffff" : "#000000" },
            children: currentCategory === "Overall" ? "Overall Skills" : `${currentCategory} Stack`
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "opacity-80", style: { color: isDarkMode ? "#ffffff" : "#000000" }, children: currentCategory === "Overall" ? `Comprehensive view of expertise across ${skillsData.length} technologies from all categories` : `Expertise levels for ${skillsData.length} technologies in this category` })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative", style: { height: "500px" }, children: /* @__PURE__ */ jsx(Radar, { data: chartDatainternal, options }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3", children: skillsData.map((skill, index) => /* @__PURE__ */ jsx(
        SkillCard,
        {
          skill,
          index,
          currentCategory,
          currentColor,
          isDarkMode
        },
        `${currentCategory}-${skill.name}-${index}`
      )) }),
      /* @__PURE__ */ jsx(
        StatisticsCard,
        {
          skillsData,
          currentCategory,
          currentColor,
          isDarkMode
        }
      )
    ] })
  ] });
}

export { SkillChart as S };
