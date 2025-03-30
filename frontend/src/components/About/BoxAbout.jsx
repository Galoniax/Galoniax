import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./box.css"

import {
  faTerminal,
  faPersonHiking,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export function BoxAbout() {
  const { darkMode } = useTheme();

  const ES = {
    aboutTitle: ["Full Stack", "En Punto", "Entusiasta"],
    aboutDescription: [
      "Desarrollador de aplicaciones web y móviles, que abarca el desarrollo de interfaces de usuario (UI/Frontend), como la gestión de manejo de datos (Backend), permitiendo la creación de aplicaciones completas y funcionales.",
      "Me gusta ser una persona puntual y responsable, que cumple con los plazos y objetivos establecidos. Siempre busco acompañar a mis compañeros de equipo y ayudar en lo que sea necesario.",
      "Me considero una persona apasionada por la tecnología y el desarrollo de software. Siempre estoy en constante aprendizaje y mejora de mis habilidades, buscando siempre la excelencia en todo lo que hago.",
    ],
  };

  return (
    <div className={`w-[80%] mx-auto mt-[60px] flex justify-center  h-[300px] border-[1px]  rounded-[5px] animated-border
    ${darkMode ? "dark-conteiner" : "light-conteiner"}`}>
      <div className="w-[33%] p-[40px]">
        <FontAwesomeIcon
          icon={faTerminal}
          className={`text-[25px] mb-3
                ${darkMode ? "fa-icon-dark" : "fa-icon-light"}`}
        />
        <h2
          className={`tracking-tighter ${
            darkMode
              ? "text-[#d8d8d8] text-[22px] textBlack"
              : "text-[#4e4e4e] text-[22px] textBlack"
          }`}
        >
          {ES.aboutTitle[0]}
        </h2>
        <p
          className={`tracking-tighter mt-3 leading-[24px] w-[300px] text-balance ${
            darkMode
              ? "text-[#d8d8d8ce] text-[13px] textRegular"
              : "text-[#6b6b6b] text-[13px] textRegular"
          }`}
        >
          {ES.aboutDescription[0]}
        </p>
      </div>

      <div className="w-[33%] p-[40px]">
        <FontAwesomeIcon
          icon={faClock}
          className={`text-[25px] mb-3
                ${darkMode ? "fa-icon-dark" : "fa-icon-light"}`}
        />
        <h2
          className={`tracking-tighter ${
            darkMode
              ? "text-[#d8d8d8] text-[22px] textBlack"
              : "text-[#4e4e4e] text-[22px] textBlack"
          }`}
        >
          {ES.aboutTitle[1]}
        </h2>
        <p
          className={`tracking-tighter mt-3 leading-[24px] w-[300px] text-balance ${
            darkMode
              ? "text-[#d8d8d8ce] text-[13px] textRegular"
              : "text-[#6b6b6b] text-[13px] textRegular"
          }`}
        >
          {ES.aboutDescription[1]}
        </p>
      </div>

      <div className="w-[33%] p-[40px]">
        <FontAwesomeIcon
          icon={faPersonHiking}
          className={`text-[25px] mb-3
                ${darkMode ? "fa-icon-dark" : "fa-icon-light"}`}
        />
        <h2
          className={`tracking-tighter ${
            darkMode
              ? "text-[#d8d8d8] text-[22px] textBlack"
              : "text-[#4e4e4e] text-[22px] textBlack"
          }`}
        >
          {ES.aboutTitle[2]}
        </h2>
        <p
          className={`tracking-tighter mt-3 leading-[24px] w-[300px] text-balance ${
            darkMode
              ? "text-[#d8d8d8ce] text-[13px] textRegular"
              : "text-[#6b6b6b] text-[13px] textRegular"
          }`}
        >
          {ES.aboutDescription[2]}
        </p>
      </div>
    </div>
  );
}
