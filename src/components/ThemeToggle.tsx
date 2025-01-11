import React, { useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggleClick = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <button
      id="themeToggle"
      className="fixed bottom-5 right-5 p-2 rounded-full bg-gray-200 dark:bg-neutral-800"
      aria-label="Toggle theme"
      onClick={handleToggleClick}
    >
      <svg width="24" height="24" className="hidden dark:block">
        <path
          fill="currentColor"
          d="M12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm0-10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"
        ></path>
      </svg>
      <svg width="24" height="24" className="block dark:hidden">
        <path
          fill="currentColor"
          d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"
        ></path>
      </svg>
    </button>
  );
};

export default ThemeToggle;
