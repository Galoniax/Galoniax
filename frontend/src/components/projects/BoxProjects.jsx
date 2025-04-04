import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

import ImgModal from "../dialogs/ImgModal";

import "./projects.css";

export function BoxProjects() {
  const { darkMode } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const projects = [
    {
      images: [
        "../../../src/assets/img/Praxis/L1.png",
        "../../../src/assets/img/Praxis/L2.png",
        "../../../src/assets/img/Praxis/L3.png",
        "../../../src/assets/img/Praxis/L4.png",
        "../../../src/assets/img/Praxis/L5.png",
        "../../../src/assets/img/Praxis/L6.png",
        "../../../src/assets/img/Praxis/L7.png",
        "../../../src/assets/img/Praxis/L8.png",
      ],
      title: "Praxis",
    },
    {
      images: [
        "../../../src/assets/img/SoundWave/S1.png",
        "../../../src/assets/img/SoundWave/S2.png",
        "../../../src/assets/img/SoundWave/S3.png",
        "../../../src/assets/img/SoundWave/S4.png",
        "../../../src/assets/img/SoundWave/S5.png",
        "../../../src/assets/img/SoundWave/S6.png",
        "../../../src/assets/img/SoundWave/S7.png",
        "../../../src/assets/img/SoundWave/S8.png",
      ],
      title: "SoundWave",
    },
    {
      images: [
        "../../../src/assets/img/Yenny/Y1.png",
        "../../../src/assets/img/Yenny/Y2.png",
        "../../../src/assets/img/Yenny/Y3.png",
        "../../../src/assets/img/Yenny/Y4.png",
      ],
      title: "Yenny",
    },
  ];

  const handleClick = (images) => {
    setIsOpen(!isOpen);
    setSelectedImages(images);
  };

  return (
    <section id="Proyectos" className="mx-auto w-[80%] pt-[200px]">
      <div className="flex items-center justify-center gap-4">
        <div
          className={`w-[400px] border-[1px] ${
            darkMode ? "border-[#b4b4b473]" : "border-[#81818173]"
          }`}
        ></div>

        <div className="textBlack flex items-center text-[24px]">
          <span className={`${darkMode ? "text-[#54b37f]" : "text-[#FB8C00]"}`}>
            #
          </span>
          <h2
            className={`textBlack text-[24px] tracking-tighter ${
              darkMode ? "text-[#d8d8d8]" : "text-[#525252]"
            }`}
          >
            Proyectos
          </h2>
        </div>

        <div
          className={`w-[400px] border-[1px] ${
            darkMode ? "border-[#b4b4b473]" : "border-[#81818173]"
          }`}
        ></div>
      </div>

      <div className="m-auto mt-[50px] grid w-[80%] grid-cols-1 gap-4">
        <div className="hoverson img1 h-[800px] md:h-[600px] lg:h-[500px]">
          <div className="flex h-[20%] items-center justify-center md:h-[60%] lg:h-[80%]">
            <button
              onClick={() => handleClick(projects[0].images)}
              className={`projectButton textBold lg:opacity-0 ${darkMode ? "dark-container border-1 border-[#e2e2e2]" : "light-container border-1 border-[#181818]"} `}
            >
              Ver Proyecto
            </button>
          </div>

          <div
            className={`absolute bottom-0 flex h-[80%] w-full flex-col justify-center rounded-2xl border-[1px] border-[#afafaf] px-[20px] py-[20px] md:h-[45%] lg:bottom-[-100%] lg:left-[2.5%] lg:h-[40%] lg:w-[95%] lg:px-[50px] ${darkMode ? "dark-container" : "light-container"} `}
          >
            <h2
              className={`textBold text-[24px] tracking-tight ${darkMode ? "text-[#ffffff]" : "text-[#4e4e4e]"}`}
            >
              Clínica Praxis
            </h2>
            <p className="textRegular py-1 text-[14px] leading-[24px] tracking-tight text-[#999999]">
              La página cuenta con un sistema de ingreso y registro de usuarios,
              además de una sección para agendar, cancelar, y ver turnos médicos
              o historias clínicas. Cuenta con interfaces diferentes para
              usuarios y administradores (medicos) con sus respectivos roles y
              funcionalidades.
            </p>

            <div className="textRegular flex flex-wrap items-center gap-2 py-3 text-[14px] leading-[24px] tracking-tight text-[#999999]">
              {[
                "Laravel",
                "PHP",
                "MySQL",
                "Bootstrap",
                "JavaScript",
                "Node.js",
                "HTML",
                "CSS",
              ].map((tech) => (
                <p
                  key={tech}
                  className={`rounded-[5px] border-[1px] px-2 break-words ${darkMode ? "dark-container" : "light-container"}`}
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="m-auto mt-[10px] grid w-[80%] grid-cols-1 gap-4 lg:grid-cols-2">
        <div
          className={`flex h-[700px] w-full flex-col rounded-[10px] border-[1px] border-[#4d4d4d] lg:h-[450px] ${darkMode ? "dark-container" : "light-container"} `}
        >
          <div
            className={`hoverson img2 h-[50%] ${darkMode ? "border-[#4d4d4d]" : "border-[#c7c7c7]"}`}
          >
            <div className="flex h-[100%] items-center justify-center">
              <button
                onClick={() => handleClick(projects[1].images)}
                className={`projectButton textBold lg:opacity-0 ${darkMode ? "dark-container border-1 border-[#e2e2e2]" : "light-container border-1 border-[#181818]"} `}
              >
                Ver Proyecto
              </button>
            </div>
          </div>

          <div className="flex w-full flex-grow flex-col justify-center p-5 break-words">
            <h2
              className={`textBold text-[20px] tracking-tight ${darkMode ? "text-[#ffffff]" : "text-[#4e4e4e]"} `}
            >
              SoundWave
            </h2>
            <p className="textRegular py-1 text-[14px] leading-[24px] tracking-tight text-[#999999]">
              Página orientada a la venta de productos audiovisuales, donde el
              usuario puede realizar sus compras y ver su carrito, filtrar
              productos y crear reseñas. Cuenta con un sistema de autenticación
              basado en JWT.
            </p>
            <div className="textRegular flex flex-wrap items-center gap-2 py-3 text-[13px] leading-[24px] tracking-tight text-[#999999]">
              {[
                "Express.js",
                "React.js",
                "Vite",
                "JavaScript",
                "Node.js",
                "Prisma",
                "Bcrypt",
                "Axios",
                "Tailwind",
                "Docker",
                "PostgreSQL",
                "JWT",
                "External API",
              ].map((tech) => (
                <p
                  key={tech}
                  className={`rounded-[5px] border-[1px] px-2 break-words`}
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`flex h-[700px] w-full flex-col rounded-[10px] border-[1px] border-[#4d4d4d] lg:h-[450px] ${darkMode ? "dark-container" : "light-container"} `}
        >
          <div
            className={`hoverson img3 h-[50%] ${darkMode ? "border-[#4d4d4d]" : "border-[#c7c7c7]"} `}
          >
            <div className="flex h-[100%] items-center justify-center">
              <button
                onClick={() => handleClick(projects[2].images)}
                className={`projectButton textBold lg:opacity-0 ${darkMode ? "dark-container border-1 border-[#e2e2e2]" : "light-container border-1 border-[#181818]"} `}
              >
                Ver Proyecto
              </button>
            </div>
          </div>

          <div className="flex w-full flex-grow flex-col justify-center p-5 break-words">
            <h2
              className={`textBold text-[20px] tracking-tight ${darkMode ? "text-[#ffffff]" : "text-[#4e4e4e]"}`}
            >
              Librería YENNY
            </h2>
            <p className="textRegular py-1 text-[14px] leading-[24px] tracking-tight text-[#999999]">
              Página basada en un sistema similar hecho en Java, donde el
              usuario puede realizar sus compras, filtrar productos además de
              sumarse al membresías. El empleado podrá gestionar el inventario y
              las ventas.
            </p>
            <div className="textRegular flex flex-wrap items-center gap-2 py-3 text-[13px] leading-[24px] tracking-tight text-[#999999]">
              {[
                "Flask",
                "Python",
                "TypeScript",
                "React.js",
                "JavaScript",
                "Tailwind",
                "JWT",
                "SCSS",
                "Axios",
              ].map((tech) => (
                <p
                  key={tech}
                  className={`rounded-[5px] border-[1px] px-2 break-words`}
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <ImgModal images={selectedImages} onClose={() => setIsOpen(false)} />
      )}
    </section>
  );
}
