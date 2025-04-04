import React from "react";
import "./footer.css";

import { useTheme } from "../../context/ThemeContext";

export function Footer() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`h-[50px] border-t-[1px] rounded-[5px] border-[#8d8d8d73] flex justify-center items-center
    ${darkMode ? "dark-container" : "light-container"}`}
    >
      <p className={`text-[14px] textRegular tracking-tight 
      ${darkMode ? "text-[#d8d8d8]" : "text-[#363636]" }`}>
        © {new Date().getFullYear()}. Realizado con React Vite - Axel Ian
        Berger.
      </p>
    </div>
  );
}
