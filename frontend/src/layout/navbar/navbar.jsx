import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NAVBAR_ROUTES } from "../../constants/navbar-routes";
import { Link } from "react-router-dom";

import { useTheme } from "../../context/ThemeContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import "./navbar.css";

export function Navbar() {
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useTheme();

  const handleScrollToSection = (route) => {
    const path = typeof route === "object" ? route.path : route;

    if (!path) return;

    const [routePath, hash] = path.split("#");

    if (routePath) navigate(routePath);

    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className="flex justify-around w-[100%] py-[20px]">
      <div className="flex items-center gap-2">
        <FontAwesomeIcon
          icon={faLeaf}
          className={`text-[22px] ${
            darkMode ? "fa-icon-dark" : "fa-icon-light"
          }`}
        />
        <h1
          className={`text-[18px] tracking-tight textBold
        ${darkMode ? "text-[#ffffff]" : "text-[#383838]"}`}
        >
          <span
            className={`text-[19px] pe-[2px] ${
              darkMode ? "text-[#A8BE6A]" : "text-[#ffaa41]"
            }`}
          >
            {"{"}
          </span>
          axelberger.zip
          <span
            className={`text-[19px] ps-[2px] ${
              darkMode ? "text-[#A8BE6A]" : "text-[#ffaa41]"
            }`}
          >
            {"}"}
          </span>
        </h1>
      </div>

      <div
        className={`flex textBold justify-between px-[20px] border-[1px] 
      ${
        darkMode
          ? "shadow-md inset-shadow-sm inset-shadow-[#9e9e9e27] shadow-[#9e9e9e31] border-[#868686ad] bg-[#1d1d1d] text-[#cccccc]"
          : "border-[#ccccccad] bg-[#f9f9f9] shadow-sm shadow-[#5f5f5f5d] text-[#7c7c7c]"
      }
       rounded-[25px] py-[13px]  text-[12.5px]`}
      >
        <ul className="flex gap-1 justify-center">
          {NAVBAR_ROUTES.map((route) => (
            <li key={route.path}>
              <span
                className={`cursor-pointer
                ${
                  darkMode
                    ? "hover:text-[#ececec] hover:bg-[#54b37f] text-[#dfdfdf]"
                    : "text-[#7c7c7c] hover:bg-[#F36F45] hover:text-[#fcfcfc]"
                } transition duration-[0.5s] ease-in-out py-1 px-3 rounded-[30px]`}
                onClick={() => handleScrollToSection(route)}
              >
                {route.icon && <FontAwesomeIcon icon={route.icon} />}
                {route.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center">
        <label className="switch me-2">
          <input type="checkbox" onClick={toggleDarkMode}></input>
          <span className="slider"></span>
        </label>

        <p className="text-[13px] text-[#9e9e9e] textRegular tracking-tight">
          Modo oscuro está{" "}
          <span
            key={darkMode ? "activado" : "desactivado"}
            className={`inline-block transition-transform duration-300 ease-out spanDark w-[80px] ps-[2px] 
            ${darkMode ? "text-[#27DB63]" : "text-[#FB8C00]"}
            
            
          `}
          >
            {darkMode ? "Activado" : "Desactivado"}
          </span>
        </p>

        <div className="ms-10 flex gap-3">
          <Link
            to={"https://github.com/Galoniax?tab=repositories"}
            target="_blank"
          >
            <button>
              <FontAwesomeIcon
                icon={faGithub}
                className={`text-[17px] cursor-pointer hover:scale-110 transition duration-[0.2s] ease-in-out border-[1px]  rounded-[5px] p-[4px]
                  ${darkMode ? "text-[#d29bf0] border-[#c167f1]" : "text-[#8501cc]"}
                `}
              />
            </button>
          </Link>

          {/**text-[#dddddd] border-[#ebebeb] */}

          <Link
            to={"https://www.linkedin.com/in/axel-ian-berger-a831242a4/"}
            target="_blank"
          >
            <button>
                <FontAwesomeIcon icon={faLinkedinIn} className={`text-[17px] cursor-pointer hover:scale-110 transition duration-[0.2s] ease-in-out border-[1px]  rounded-[5px] p-[4px]
                  ${darkMode ? "text-[#6ccbf7] border-[#018fd1] " : "text-[#018fd1]"}  
                `}/>   
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
