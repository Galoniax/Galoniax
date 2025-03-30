import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./box.css";

import {
  faEye,
  faDatabase,
  faGear,
  faFlask,
  faServer,
  faInbox,
  faCloudSun,
  faGem,
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
  faNode,
  faNodeJs,
  faGithub,
  faDocker,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import { color } from "framer-motion";

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
    <div className="grid justify-center grid-cols-1 gap-4 mt-[40px] w-[80%] m-auto">
      <button
        onClick={handleShowFrontend}
        className={`group tracking-tighter buttonAn flex flex-col justify-center items-center cursor-pointer overflow-hidden 
          text-[15px] textRegular before:bg-[#5433FF]
            
          ${expandedFrontend ? "min-h-[100px] py-4" : "h-[80px]"} 
          
          ${
            darkMode
              ? "bg-[#181818]"
              : "bg-[#ebebeb]"
          }`}
      >
        <div className="flex items-center">
          <p
            className={`transition-opacity duration-[0.7s] underline underline-offset-3
              ${
              expandedFrontend
                ? "hover:text-[#ffffff]"
                : "group-hover:opacity-0"
            }
              ${
                darkMode
                  ? "text-[#ffffff] decoration-[#ffffff]"
                  : "text-[#4b4b4b] decoration-[#6b6b6b] group-hover:text-[#ffffff] group-hover:decoration-[#ffffff]"
              }
                
            `}
          >
            Frontend
          </p>
          <FontAwesomeIcon
            icon={faEye}
            className={`${
              expandedFrontend
                ? "icon-appear top-[45%] duration-[0.1s] group-hover:opacity-0"
                : "icon-appear"
            }`}
          />
        </div>
        {expandedFrontend && (
          <div className="grid grid-cols-5 gap-3 mt-5">
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
                  className={`itemIcon text-[29px] mb-2 color`}
                />
                <span className={`text-[13px] ${darkMode ? "text-[#ffffff]" : "text-[#696969] group-hover:text-[#ffffff] duration-200"}`}>{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </button>

      <button
        onClick={handleShowBackend}
        className={`group tracking-tighter buttonAn flex flex-col justify-center items-center cursor-pointer overflow-hidden text-[15px] textRegular before:bg-[#F68E34]
          ${expandedBackend ? "min-h-[100px] py-4 " : "h-[80px]"} 
          
          ${
            darkMode
              ? "bg-[#181818]"
              : "bg-[#ebebeb]"
          }`}
      >
        <div className="flex items-center">
          <p
            className={`transition-opacity duration-[0.7s] underline underline-offset-3 ${
              expandedBackend ? "hover:text-[#ffffff]" : "group-hover:opacity-0"
            }
              
            ${
                darkMode
                  ? "text-[#ffffff] decoration-[#ffffff]"
                  : "text-[#4b4b4b] decoration-[#6b6b6b] group-hover:text-[#ffffff] group-hover:decoration-[#ffffff]"
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
          <div className="grid grid-cols-5 gap-3 mt-5">
            {[
              { icon: faJava, label: "Java", color: "#F68E34" },
              { icon: faPython, label: "Python", color: "#3776AB" },
              { icon: faPhp, label: "PHP", color: "#777BB4" },
              { icon: faLaravel, label: "Laravel", color: "#FF2D20" },
              { icon: faFlask, label: "Flask", color: "#3b5497" },
              { icon: faNodeJs, label: "Express.js", color: "#3C873A" },
              { icon: faServer, label: "MySQL / PostgreSQL", color: "#336791" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-white"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  color={item.color}
                  className={`itemIcon text-[29px] mb-2 color`}
                />
                <span className={`text-[13px] ${darkMode ? "text-[#ffffff]" : "text-[#696969] group-hover:text-[#ffffff] duration-200"}`}>{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </button>

      <button
        onClick={handleShowTools}
        className={`group tracking-tighter buttonAn flex flex-col justify-center items-center cursor-pointer overflow-hidden  text-[15px] textRegular before:bg-[#7A2458]
          ${expandedTools ? "min-h-[100px] py-4" : "h-[80px]"} 
          ${
            darkMode
              ? "bg-[#181818]"
              : "bg-[#ebebeb]"
          }`}
      >
        <div className="flex items-center">
          <p
            className={`transition-opacity duration-[0.7s] underline underline-offset-3 ${
              expandedTools ? "hover:text-[#ffffff]" : "group-hover:opacity-0"
            }
              
            ${
                darkMode
                  ? "text-[#ffffff] decoration-[#ffffff]"
                  : "text-[#4b4b4b] decoration-[#6b6b6b] group-hover:text-[#ffffff] group-hover:decoration-[#ffffff]"
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
          <div className="grid grid-cols-4 gap-y-3 mt-5">
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
                  className={`itemIcon text-[29px] mb-2 color`}
                />
                <span className={`text-[13px] ${darkMode ? "text-[#ffffff]" : "text-[#696969] group-hover:text-[#ffffff] duration-200"}`}>{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </button>
    </div>
  );
}
