import React, { useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import SkillsInfo from "./Skillsinfo";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface SkillChartProps {
  data: {
    labels: string[];
    data: string[];
    slug: string;
  }[];
  chartData: {
    labels: string[];
    data: string[];
    slug: string;
  };
}

export default function SkillChart({ data, chartData }: SkillChartProps) {
  const [currentChart, setCurrentChart] = React.useState(chartData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Initial detection of dark mode
    const darkModeEnabled = document.documentElement.classList.contains("dark");
    setIsDarkMode(darkModeEnabled);

    // Watch for changes to the <html> classList
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect(); // Cleanup the observer on unmount
    };
  }, []);

  const chartDatainternal = {
    labels: currentChart.labels,
    datasets: [
      {
        label: "Skills",
        data: currentChart.data,
        backgroundColor: isDarkMode
          ? "rgba(255, 255, 255, 0.2)"
          : "rgba(0, 0, 0, 0.1)",
        borderColor: "#00ff00",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        beginAtZero: true,
        angleLines: {
          color: isDarkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)",
        },
        grid: {
          color: isDarkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)",
        },
        pointLabels: {
          color: isDarkMode ? "#ffffff" : "#000000",
          font: {
            size: 16,
            family: "Basement, sans-serif",
          },
        },
        ticks: {
          color: isDarkMode ? "#ffffff" : "#000000",
          backdropColor: "transparent",
          min: 0,
          max: 10,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const onSkillChartLoad = (cat: any) => {
    if (cat === "Overall") {
      setCurrentChart(chartData);
      return;
    }
    const chart = data.find((chart: any) => {
      return chart.slug === cat;
    });
    if (!chart) {
      return;
    }
    setCurrentChart(chart);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flexi">
        <div className=" mb-10 overflow-hidden">
          <div className="flex justify-center flex-wrap gap-3">
            <button
              className="inline-block bg-primary-500 text-primary-900 font-basement w-[200px] p-2 rounded-lg hover:bg-white transition-colors"
              onClick={() => onSkillChartLoad("Overall")}
            >
              Overall
            </button>
            <button
              className="whitespace-nowrap inline-block bg-purple-400 text-purple-900 font-basement w-[200px] p-2 rounded-lg hover:bg-white transition-colors"
              onClick={() => onSkillChartLoad("Front-end")}
            >
              Front-end
            </button>
            <button
              className="inline-block bg-yellow-500 text-yellow-900 font-basement w-[200px] p-2 rounded-lg hover:bg-white transition-colors"
              onClick={() => onSkillChartLoad("Backend")}
            >
              Backend
            </button>
            <button
              className="inline-block bg-blue-500 text-cyan-900 font-basement w-[200px] p-2 rounded-lg hover:bg-white transition-colors"
              onClick={() => onSkillChartLoad("Database")}
            >
              Database
            </button>
            <button
              className="inline-block bg-white text-gray-900 font-basement w-[200px]  p-2 rounded-lg hover:bg-white transition-colors"
              onClick={() => onSkillChartLoad("Design")}
            >
              Design
            </button>
            <button
              className="inline-block bg-orange-400 text-orange-900 font-basement w-[200px] p-2 rounded-lg hover:bg-white transition-colors"
              onClick={() => onSkillChartLoad("Cloud")}
            >
              Cloud
            </button>
            <button
              className="inline-block bg-rose-400 text-rose-900 font-basement w-[200px] p-2 rounded-lg hover:bg-white transition-colors"
              onClick={() => onSkillChartLoad("DevOps")}
            >
              DevOps
            </button>
            <button
              className="inline-block bg-teal-500 text-teal-900 font-basement w-[200px] p-2 rounded-lg hover:bg-white transition-colors"
              onClick={() => onSkillChartLoad("Apps")}
            >
              Apps
            </button>
            <button
              className="inline-block bg-fuchsia-400 text-fuchsia-900 font-basement w-[200px] p-2 rounded-lg hover:bg-white transition-colors"
              onClick={() => onSkillChartLoad("Music")}
            >
              Music
            </button>
            <br />
          </div>
        </div>
        <div className="w-full max-w-[50%] m-auto">
          <Radar data={chartDatainternal} options={options} />
        </div>
      </div>
    </div>
  );
}
