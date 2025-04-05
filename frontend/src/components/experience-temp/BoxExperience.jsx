import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./experience.css";

import {
  faEye,
  faDatabase,
  faGear,
  faFlask,
  faServer,
  faInbox,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faBootstrap,
  faJava,
  faPython,
  faPhp,
  faLaravel,
  faNodeJs,
  faGithub,
  faDocker,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";

export function BoxExperience() {
  const { darkMode } = useTheme();

  const [expandedFrontend, setExpandedFrontend] = useState(false);
  const [expandedBackend, setExpandedBackend] = useState(false);
  const [expandedTools, setExpandedTools] = useState(false);

  const handleShowFrontend = () => {
    setExpandedFrontend(!expandedFrontend);
  };

  const handleShowBackend = () => {
    setExpandedBackend(!expandedBackend);
  };

  const handleShowTools = () => {
    setExpandedTools(!expandedTools);
  };

  return (
    <section id="Experiencia" className="mx-auto pt-[140px] w-[80%]">
      <div className="flex items-center justify-center gap-4">
        <div
          className={`w-[400px] border-[1px] ${
            darkMode ? "border-[#b4b4b473]" : "border-[#81818173]"
          }`}
        ></div>

        <div className="flex items-center">
          <span
            className={`textBlack text-[24px] ${
              darkMode ? "text-[#54b37f]" : "text-[#FB8C00]"
            }`}
          >
            #
          </span>
          <h2
            className={`textBlack text-[24px] tracking-tighter ${
              darkMode ? "text-[#d8d8d8]" : "text-[#525252]"
            }`}
          >
            Experiencia
          </h2>
        </div>

        <div
          className={`w-[400px] border-[1px] ${
            darkMode ? "border-[#b4b4b473]" : "border-[#81818173]"
          }`}
        ></div>
      </div>

      <div className="m-auto mt-[40px] grid w-[80%] grid-cols-1 justify-center gap-4">
        <button
          onClick={handleShowFrontend}
          className={`group buttonAnimation handlerGeneric before:bg-[#5433FF] ${expandedFrontend ? "min-h-[200px] py-4 lg:min-h-[100px]" : "h-[120px] md:h-[100px] lg:h-[80px]"} ${darkMode ? "bg-[#181818]" : "bg-[#ebebeb]"}`}
        >
          <div className="flex flex-row-reverse items-center gap-2 lg:flex-row lg:gap-0">
            <p
              className={`underline underline-offset-3 transition-opacity duration-[0.7s] ${
                expandedFrontend
                  ? "hover:text-[#ffffff]"
                  : "group-hover:opacity-0"
              } ${
                darkMode
                  ? "text-[#ffffff] decoration-[#ffffff]"
                  : "text-[#FFFFFF] group-hover:text-[#ffffff] group-hover:decoration-[#ffffff] lg:text-[#4b4b4b] lg:decoration-[#6b6b6b]"
              } `}
            >
              Frontend
            </p>
            <FontAwesomeIcon
              icon={faEye}
              className={` ${
                expandedFrontend
                  ? "icon-appear top-[45%] duration-[0.1s] group-hover:opacity-0"
                  : "icon-appear"
              }`}
            />
          </div>
          {expandedFrontend && (
            <div className="mt-8 mb-4 lg:mb-1 grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-1 lg:mt-5 lg:grid-cols-5">
              {[
                { icon: faHtml5, label: "HTML5", color: "#e34f26" },
                { icon: faCss3, label: "CSS3", color: "#306AF1" },
                {
                  icon: faBootstrap,
                  label: "Bootstrap / Tailwind",
                  color: "#7C18F8",
                },
                { icon: faJs, label: "JavaScript", color: "#F7DF1E" },
                { icon: faReact, label: "React.js", color: "#61DAFB" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-white"
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    color={item.color}
                    className={`itemIcon mb-2 text-[29px]`}
                  />
                  <span
                    className={`text-[13px] ${
                      darkMode
                        ? "text-[#ffffff]"
                        : "text-[#ffffff] duration-200 group-hover:text-[#ffffff] lg:text-[#696969]"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </button>

        <button
          onClick={handleShowBackend}
          className={`group buttonAnimation handlerGeneric before:bg-[#F68E34] ${expandedBackend ? "py-4 md:min-h-[200px] lg:min-h-[100px]" : "h-[120px] md:h-[100px] lg:h-[80px]"} ${darkMode ? "bg-[#181818]" : "bg-[#ebebeb]"}`}
        >
          <div className="flex flex-row-reverse items-center gap-2 lg:flex-row lg:gap-0">
            <p
              className={`underline underline-offset-3 transition-opacity duration-[0.7s] ${
                expandedBackend
                  ? "hover:text-[#ffffff]"
                  : "group-hover:opacity-0"
              } ${
                darkMode
                  ? "text-[#ffffff] decoration-[#ffffff]"
                  : "text-[#FFFFFF] group-hover:text-[#ffffff] group-hover:decoration-[#ffffff] lg:text-[#4b4b4b] lg:decoration-[#6b6b6b]"
              }`}
            >
              Backend
            </p>
            <FontAwesomeIcon
              icon={faDatabase}
              className={`${
                expandedBackend
                  ? "icon-appear top-[45%] group-hover:opacity-0"
                  : "icon-appear"
              }`}
            />
          </div>
          {expandedBackend && (
            <div className="mt-8 mb-4 grid grid-cols-2 gap-8  md:grid-cols-3 md:gap-y-6 md:gap-1 lg:mt-5 lg:mb-1 lg:grid-cols-5">
              {[
                { icon: faJava, label: "Java", color: "#F68E34" },
                { icon: faPython, label: "Python", color: "#3776AB" },
                { icon: faPhp, label: "PHP", color: "#777BB4" },
                { icon: faLaravel, label: "Laravel", color: "#FF2D20" },
                { icon: faFlask, label: "Flask", color: "#3b5497" },
                { icon: faNodeJs, label: "Express.js", color: "#3C873A" },
                {
                  icon: faServer,
                  label: "MySQL / PostgreSQL",
                  color: "#336791",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-white"
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    color={item.color}
                    className={`itemIcon color mb-2 text-[29px]`}
                  />
                  <span
                    className={`text-[13px] ${
                      darkMode
                        ? "text-[#ffffff]"
                        : "text-[#ffffff] duration-200 group-hover:text-[#ffffff] lg:text-[#696969]"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </button>

        <button
          onClick={handleShowTools}
          className={`group buttonAnimation handlerGeneric before:bg-[#7A2458] ${expandedTools ? "py-4 md:min-h-[200px] lg:min-h-[100px]" : "h-[120px] md:h-[100px] lg:h-[80px]"} ${darkMode ? "bg-[#181818]" : "bg-[#ebebeb]"}`}
        >
          <div className="flex flex-row-reverse items-center gap-2 lg:flex-row lg:gap-0">
            <p
              className={`underline underline-offset-3 transition-opacity duration-[0.7s] ${
                expandedTools ? "hover:text-[#ffffff]" : "group-hover:opacity-0"
              } ${
                darkMode
                  ? "text-[#ffffff] decoration-[#ffffff]"
                  : "text-[#FFFFFF] group-hover:text-[#ffffff] group-hover:decoration-[#ffffff] lg:text-[#4b4b4b] lg:decoration-[#6b6b6b]"
              }`}
            >
              Herramientas
            </p>
            <FontAwesomeIcon
              icon={faGear}
              className={`${
                expandedTools
                  ? "icon-appear top-[45%] group-hover:opacity-0"
                  : "icon-appear"
              }`}
            />
          </div>
          {expandedTools && (
            <div className="mt-8 mb-4 grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-1 lg:mt-5 lg:mb-1 lg:grid-cols-4">
              {[
                { icon: faGithub, label: "GitHub", color: "#7A2458" },
                { icon: faDocker, label: "Docker", color: "#2496ED" },
                { icon: faInbox, label: "Postman", color: "#FF6C37" },
                {
                  icon: faGears,
                  label: "Eclipse/Intelij IDEA",
                  color: "#493783",
                },
                {
                  icon: faDatabase,
                  label: "DBeaver / MySQL Workbench",
                  color: "#9F8372",
                },
                { icon: faAndroid, label: "Android Studio", color: "#3DDC84" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-white"
                >
                  <FontAwesomeIcon
                    icon={item.icon}
                    color={item.color}
                    className={`itemIcon color mb-2 text-[29px]`}
                  />
                  <span
                    className={`max-w-[50%] text-[13px] ${
                      darkMode
                        ? "text-[#ffffff]"
                        : "text-[#ffffff] duration-200 group-hover:text-[#ffffff] lg:text-[#696969]"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </button>
      </div>
    </section>
  );
}
