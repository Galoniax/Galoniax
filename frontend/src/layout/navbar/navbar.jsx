import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NAVBAR_ROUTES } from "../../constants/navbar-routes";
import { Link } from "react-router-dom";

import { useTheme } from "../../context/ThemeContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import "./navbar.css";

export function Navbar() {
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode == "true") {
      const checkbox = document.querySelector(".switch input");
      if (checkbox) {
        checkbox.checked = true;
      }
    }
  }, []);

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
    <nav
      className={`z-20 flex w-[100%] justify-around py-[20px] duration-500 md:flex-col md:items-center md:gap-8 lg:fixed lg:flex-row ${showMenu ? "flex-col items-center" : ""} ${scroll && darkMode ? "bg-[#313131]" : ""} ${scroll && !darkMode ? "bg-[#f5f5f5]" : ""}`}
    >
      <div className="flex items-center gap-2">
        <FontAwesomeIcon
          icon={faLeaf}
          className={`text-[22px] ${
            darkMode ? "fa-icon-dark" : "fa-icon-light"
          }`}
        />
        <h1
          onClick={() => handleScrollToSection(NAVBAR_ROUTES[0])}
          className={`textBold text-[18px] tracking-tight md:text-[17px] cursor-pointer ${darkMode ? "text-[#ffffff] hover:text-[#A8BE6A]" : "text-[#383838] hover:text-[#ff9d41]"} `}
        >
          <span
            className={`pe-[2px] text-[19px] ${
              darkMode ? "text-[#A8BE6A]" : "text-[#ffaa41]"
            }`}
          >
            {"{"}
          </span>
          axelberger.zip
          <span
            className={`ps-[2px] text-[19px] ${
              darkMode ? "text-[#A8BE6A]" : "text-[#ffaa41]"
            }`}
          >
            {"}"}
          </span>
        </h1>
        <label className={`hamburger ps-10 md:hidden md:ps-0`}>
          <input onClick={() => toggleMenu()} type="checkbox" />
          <svg viewBox="0 0 32 32">
            <path
              className={`line line-top-bottom ${darkMode ? "stroke-[#FFFFFF]" : "stroke-[#424242]"}`}
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path
              className={`line ${darkMode ? "stroke-[#FFFFFF]" : "stroke-[#424242]"}`}
              d="M7 16 27 16"
            ></path>
          </svg>
        </label>
      </div>

      <div
        className={`textBold ${showMenu ? "mt-10 flex w-full md:mt-0 md:w-fit" : "hidden"} justify-between border-[1px] md:flex md:px-[20px] ${
          darkMode
            ? "border-[#868686ad] bg-[#1d1d1d] text-[#cccccc] shadow-md inset-shadow-sm shadow-[#9e9e9e31] inset-shadow-[#9e9e9e27]"
            : "border-[#ccccccad] bg-[#f9f9f9] text-[#7c7c7c] shadow-sm shadow-[#5f5f5f5d]"
        } py-[13px] text-[13px] lg:text-[12.5px] md:rounded-[25px]`}
      >
        <ul
          className={`flex items-center justify-center gap-3 md:gap-1 ${showMenu ? "w-full flex-col md:flex-row" : "hidden md:flex"}`}
        >
          {NAVBAR_ROUTES.map((route) => (
            <li key={route.path}>
              <span
                className={`cursor-pointer ${
                  darkMode
                    ? "text-[#dfdfdf] hover:bg-[#54b37f] hover:text-[#ececec]"
                    : "text-[#7c7c7c] hover:bg-[#F36F45] hover:text-[#fcfcfc]"
                } rounded-[30px] px-3 py-1 transition duration-[0.5s] ease-in-out`}
                onClick={() => handleScrollToSection(route)}
              >
                {route.icon && <FontAwesomeIcon icon={route.icon} />}
                {route.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={`items-center md:flex ${
          showMenu
            ? "flex w-full flex-col-reverse pb-5 md:flex-col md:bg-transparent md:pb-0 lg:flex-row"
            : "hidden"
        } ${
          darkMode
            ? "bg-[#1d1d1d] text-[#dfdfdf] md:bg-transparent"
            : "bg-[#f9f9f9] text-[#7c7c7c] md:bg-transparent"
        }`}
      >
        <div className={`flex items-center justify-center pt-5 md:pt-0`}>
          <label className="switch me-2">
            <input type="checkbox" onClick={toggleDarkMode}></input>
            <span className="slider"></span>
          </label>

          <p className="textRegular text-[13px] tracking-tight text-[#9e9e9e] lg:block">
            Modo oscuro está{" "}
            <span
              key={darkMode ? "activado" : "desactivado"}
              className={`spanDark inline-block w-[80px] ps-[2px] transition-transform duration-300 ease-out ${darkMode ? "text-[#27DB63]" : "text-[#FB8C00]"} `}
            >
              {darkMode ? "Activado" : "Desactivado"}
            </span>
          </p>
        </div>

        <div className="flex justify-center gap-3 pt-5 md:ms-10 md:pt-0">
          <Link
            to={"https://github.com/Galoniax?tab=repositories"}
            target="_blank"
            title="Mis proyectos en GitHub"
          >
            <button>
              <FontAwesomeIcon
                icon={faGithub}
                className={`w-[150px] cursor-pointer rounded-[5px] border-[1px] p-[4px] text-[17px] transition duration-[0.2s] ease-in-out hover:scale-110 md:w-fit ${
                  darkMode
                    ? "border-[#c167f1] text-[#d29bf0]"
                    : "text-[#8501cc]"
                } `}
              />
            </button>
          </Link>

          <Link
            to={"https://www.linkedin.com/in/axel-ian-berger-a831242a4/"}
            target="_blank"
            title="Mi perfil en LinkedIn"
          >
            <button>
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className={`w-[150px] cursor-pointer rounded-[5px] border-[1px] p-[4px] text-[17px] transition duration-[0.2s] ease-in-out hover:scale-110 md:w-fit ${
                  darkMode
                    ? "border-[#018fd1] text-[#6ccbf7]"
                    : "text-[#018fd1]"
                } `}
              />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
