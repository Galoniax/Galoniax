import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./about.css";

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
    <section id="Acerca" className="mx-auto pt-[250px] w-[80%]">
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center">
          <span
            className={`textBlack text-[24px] ${darkMode ? "text-[#54b37f]" : "text-[#FB8C00]"} `}
          >
            #
          </span>
          <h2
            className={`textBlack text-[24px] tracking-tighter ${darkMode ? "text-[#d8d8d8]" : "text-[#525252]"} `}
          >
            Sobre mí
          </h2>
        </div>
        <div
          className={`w-[40%] border-[1px] ${darkMode ? "border-[#b4b4b473]" : "border-[#81818173]"} `}
        ></div>
      </div>

      <div
        className={`animated-border mx-auto mt-[50px] flex h-fit w-[80%] justify-center rounded-[5px] border-[1px] flex-col  lg:flex-row lg:text-left ${darkMode ? "dark-container" : "light-container"} `}
      >
        <div className="p-[40px] md:w-[100%] lg:w-[33%]">
          <FontAwesomeIcon
            icon={faTerminal}
            className={`mb-3 text-[25px] ${darkMode ? "fa-icon-dark" : "fa-icon-light"} `}
          />
          <h2
            className={`textBlack text-[22px] tracking-tighter ${darkMode ? "text-[#d8d8d8]" : "text-[#4e4e4e]"} `}
          >
            {ES.aboutTitle[0]}
          </h2>
          <p
            className={`textRegular mt-3 text-[13px] leading-[24px] tracking-tighter md:w-[100%] ${darkMode ? "text-[#d8d8d8ce]" : "text-[#6b6b6b]"}`}
          >
            {ES.aboutDescription[0]}
          </p>
        </div>

        <div className="md:w-[100%] lg:w-[33%] p-[40px]">
          <FontAwesomeIcon
            icon={faClock}
            className={`mb-3 text-[25px] ${darkMode ? "fa-icon-dark" : "fa-icon-light"}`}
          />
          <h2
            className={`tracking-tighter ${
              darkMode
                ? "textBlack text-[22px] text-[#d8d8d8]"
                : "textBlack text-[22px] text-[#4e4e4e]"
            }`}
          >
            {ES.aboutTitle[1]}
          </h2>
          <p
            className={`textRegular mt-3 text-[13px] leading-[24px] tracking-tighter md:w-[100%] ${
              darkMode ? "text-[#d8d8d8ce]" : "text-[#6b6b6b]"
            }`}
          >
            {ES.aboutDescription[1]}
          </p>
        </div>

        <div className="p-[40px] md:w-[100%] lg:w-[33%]">
          <FontAwesomeIcon
            icon={faPersonHiking}
            className={`mb-3 text-[25px] ${darkMode ? "fa-icon-dark" : "fa-icon-light"}`}
          />
          <h2
            className={`textBlack text-[22px] tracking-tighter ${
              darkMode ? "text-[#d8d8d8]" : "text-[#4e4e4e]"
            }`}
          >
            {ES.aboutTitle[2]}
          </h2>
          <p
            className={`textRegular mt-3 text-[13px] leading-[24px] tracking-tighter md:w-[100%] ${
              darkMode ? "text-[#d8d8d8ce]" : "text-[#6b6b6b]"
            }`}
          >
            {ES.aboutDescription[2]}
          </p>
        </div>
      </div>
    </section>
  );
}
