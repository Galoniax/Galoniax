import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

// Components
import { BoxExperience } from "../../components/experience/BoxExperience";
import { BoxAbout } from "../../components/about/BoxAbout";
import { BoxProjects } from "../../components/projects/BoxProjects";

import { Typing } from "../../components/animation/Typing";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperclip, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./home.css";
import { AnimatedSection } from "../../components/animation/AnimatedSection";
import { IconsMoving } from "../../components/animation/IconsMoving";

export function Home() {
  const { darkMode } = useTheme();

  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  const ES = {
    title: "Hola, soy Axel Berger",
    subtitle: ["Full Stack!", "Mobile!", "Web!"],
    description: [
      "Soy un Programador Junior que actualmente vive en Buenos Aires, Argentina.",
      "Estoy enfocado en el desarrollo de sistemas, aplicaciones web y móviles, empleando tecnologías modernas para crear soluciones eficientes y escalables. Si tu empresa o proyecto necesita un sistema a medida, estaré encantado de ayudarte.",
    ],
  };

  return (
    <main>
      <AnimatedSection x={-100} y={0} duration={0.5}>
        <section
          id="Home"
          className="flex w-full items-center pt-[150px] md:px-[50px] md:pt-[280px] md:text-center lg:px-[100px] lg:text-left"
        >
          <div className="flex flex-col items-center px-5 md:px-0 lg:items-start">
            <h1
              className={`textBlack text-[22px] md:text-[23px] lg:text-[26px] ${
                darkMode ? "text-[#d8d8d8]" : "text-[#464646]"
              } `}
            >
              {ES.title}
            </h1>
            <h2
              className={`textBlack h-[80px] text-center text-[30px] tracking-wide md:h-fit md:text-[36px] lg:text-[48px] ${
                darkMode ? "text-[#54b37f]" : "text-[#FB8C00]"
              }`}
            >
              ¡Desarrollador{" "}
              <Typing texts={ES.subtitle} speed={60} delay={1200} />
            </h2>
            <p
              className={`textBold mt-[15px] text-center tracking-tighter md:text-[18px] lg:text-[19px] ${
                darkMode ? "text-[#d8d8d8]" : "text-[#6b6b6b]"
              } `}
            >
              {ES.description[0]}
            </p>
            <p
              className={`textRegular mt-[18px] max-w-[80%] text-center leading-7 tracking-tighter md:text-[16px] lg:max-w-[40%] lg:text-start ${
                darkMode ? "text-[#d8d8d8]" : "text-[#6b6b6b]"
              } `}
            >
              {ES.description[1]}
            </p>

            <div className="mt-[35px] flex gap-4 md:justify-center lg:justify-start">
              <Link
                to={
                  "https://drive.google.com/file/d/1hsdFHHbh7HWuWsltRl_miRtFrjCUjvCb/view?usp=sharing"
                }
                target="_blank"
                title="Ver mi CV en PDF"
              >
                <button
                  className={` ${
                    darkMode
                      ? "bannerButton_dark before:bg-[conic-gradient(from_var(--angle),#27DB63,#27DB63,#27DB63,#27DB63,#f5f5f5)]"
                      : "bannerButton_light before:bg-[conic-gradient(from_var(--angle),#FB8C00,#FB8C00,#FB8C00,#FB8C00,#ffffff)]"
                  } `}
                >
                  <div className="flex items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faPaperclip} />
                    <span className="textBold text-[16px] tracking-tighter">
                      {" "}
                      Ver CV
                    </span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
          {/** 
          <div>
            <SpinAll />
          </div>
          */}
        </section>
      </AnimatedSection>

      {/**Icons Moving */}
      <IconsMoving />

      {/**About */}
      <AnimatedSection x={0} y={50} duration={0.5}>
        <BoxAbout />
      </AnimatedSection>

      {/**Experience */}
      <AnimatedSection x={0} y={50} duration={0.5}>
        <BoxExperience />
      </AnimatedSection>

      {/**Projects */}
      <AnimatedSection x={0} y={50} duration={0.5}>
        <BoxProjects />
      </AnimatedSection>

      {/**Contact */}
      <AnimatedSection x={0} y={50} duration={0.5}>
        <section className="mx-auto mt-[200px] mb-[200px] w-[80%]">
          <div className="flex flex-col items-center justify-center gap-1">
            <h1
              className={`textBold text-center text-[30px] tracking-tighter md:text-[35px] ${darkMode ? "text-[#ffffff]" : "text-[#4e4e4e]"}`}
            >
              ¿Necesitás ayuda con tu proyecto?
            </h1>

            <h3 className="textBold pt-3 text-center text-[14px] tracking-tight text-[#a1a1a1] md:pt-0">
              Para más información, contactame vía LinkedIn o Email.
            </h3>

            <Link
              to={"https://www.linkedin.com/in/axel-ian-berger-a831242a4/"}
              target="_blank"
              title="Mi perfil en LinkedIn"
            >
              <button
                className={`button mt-10 cursor-pointer ${
                  darkMode ? "buttonDark" : "buttonLight"
                }`}
              >
                <FontAwesomeIcon
                  className={`icon text-[40px] ${darkMode ? "text-[#FFFFFF]" : "text-[#4e4e4e]"}`}
                  icon={faLinkedin}
                />
                <span
                  className={`text textBold ${darkMode ? "text-[#FFFFFF]" : "text-[#4e4e4e]"}`}
                >
                  LinkedIn
                </span>
              </button>
            </Link>

            <button
              onClick={() => copyToClipboard("axelian2504@gmail.com")}
              className={`button relative mt-3 cursor-copy ${
                darkMode ? "buttonDark" : "buttonLight"
              }`}
            >
              <FontAwesomeIcon
                className={`icon text-[40px] ${darkMode ? "text-[#FFFFFF]" : "text-[#4e4e4e]"}`}
                icon={faEnvelope}
              />

              {/* Mensaje de copiado */}
              {copied ? (
                <span className="text textBold">¡Copiado!</span>
              ) : (
                <span className="text textBold">axelian2504@gmail.com</span>
              )}
            </button>
          </div>
        </section>
      </AnimatedSection>
    </main>
  );
}
