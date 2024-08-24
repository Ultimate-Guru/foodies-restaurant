// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import darkPng from "../../assets/website/dark-mode-button.png";
import lightPng from "../../assets/website/light-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        src={theme === "dark" ? darkPng : lightPng}
        alt={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        onClick={() =>
          setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"))
        }
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] transition-opacity duration-300 absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
};

export default DarkMode;