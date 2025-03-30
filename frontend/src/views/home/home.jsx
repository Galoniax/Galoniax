import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

// Components
import { BoxExperience } from "../../components/Experience/BoxExperience";
import { BoxAbout } from "../../components/About/BoxAbout";

import { Typing } from "../../components/Animation/Typing/Typing";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPaperclip, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./home.css";
import { SpinAll } from "../../components/Animation/SpinAll";

export function Home() {
  const { darkMode } = useTheme();

  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    // El mensaje desaparecerá después de 2 segundos
    setTimeout(() => setCopied(false), 2000);
  };

  const ES = {
    title: "Hola, soy Axel Berger",
    subtitle: ["Full Stack!", "Mobile!", "Web!"],
    description: [
      "Soy un Programador Junior que actualmente vive en Buenos Aires, Argentina.",
      "Me especializo en el desarrollo de sistemas, aplicaciones web y móviles, empleando tecnologías modernas para crear soluciones eficientes y escalables. Si tu empresa o proyecto necesita un sistema a medida, estaré encantado de ayudarte.",
    ],
  };

  return (
    <main>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <section className="w-full px-[100px] mt-[280px] flex  items-center">
          <div>
            <h1
              className={` 
            ${
              darkMode
                ? "text-[#d8d8d8] text-[26px] textBlack "
                : "text-[#464646] text-[26px] textBlack"
            }
          `}
            >
              {ES.title}
            </h1>
            <h2
              className={`tracking-wide ${
                darkMode
                  ? "text-[#54b37f] text-[48px] textBlack"
                  : "text-[#FB8C00] text-[48px] textBlack"
              }`}
            >
              ¡Desarrolador{" "}
              <Typing texts={ES.subtitle} speed={60} delay={1200} />
            </h2>
            <p
              className={`mt-[15px] tracking-tighter
            ${
              darkMode
                ? "text-[#d8d8d8] text-[19px] textBold"
                : "text-[#6b6b6b] text-[19px] textBold"
            }
          `}
            >
              {ES.description[0]}
            </p>
            <p
              className={`tracking-tighter mt-[18px] max-w-[60%] leading-7
            ${
              darkMode
                ? "text-[#d8d8d8] text-[16px] textRegular"
                : "text-[#6b6b6b] text-[16px] textRegular"
            }
          `}
            >
              {ES.description[1]}
            </p>

            <div className="flex mt-[35px] gap-4">
              <Link
                to={"https://drive.google.com/file/d/1ZsKVq0BjfBAwOVaK9k0AgezbEtQ0ZLbS/view?usp=sharing"}
                target="_blank"
              >
                <button
                  className={`
                ${
                  darkMode
                    ? "bannerButton_dark before:bg-[conic-gradient(from_var(--angle),#27DB63,#27DB63,#27DB63,#27DB63,#f5f5f5)]"
                    : "bannerButton_light before:bg-[conic-gradient(from_var(--angle),#FB8C00,#FB8C00,#FB8C00,#FB8C00,#ffffff)]"
                }
              `}
                >
                  <div className="flex items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faPaperclip} />
                    <span className="tracking-tighter textBold text-[16px]">
                      {" "}
                      Ver CV
                    </span>
                  </div>
                </button>
              </Link>
            </div>
          </div>

          <div>
            <SpinAll />
          </div>
        </section>
      </motion.div>

      {/**About */}
      <section className="w-[80%] mt-[350px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-[100px]"
        >
          <div className="flex items-center gap-4 justify-center">
            <div className="flex items-center">
              <span
                className={`${
                  darkMode
                    ? "text-[#54b37f] text-[24px] textBlack"
                    : "text-[#FB8C00] text-[24px] textBlack"
                }`}
              >
                #
              </span>
              <h2
                className={`tracking-tighter ${
                  darkMode
                    ? "text-[#d8d8d8] text-[24px] textBlack"
                    : "text-[#525252] text-[24px] textBlack"
                }`}
              >
                Sobre mí
              </h2>
            </div>
            <div className={`w-[40%] border-[1px] ${darkMode ? "border-[#b4b4b473]" : " border-[#81818173]"}`}></div>
          </div>

          <BoxAbout />
        </motion.div>
      </section>

      {/**Experience */}
      <section className="w-[80%] mt-[140px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4">
            <div className={`w-[400px] border-[1px] ${darkMode ? "border-[#b4b4b473]" : " border-[#81818173]"}`}></div>

            <div className="flex items-center">
              <span
                className={`${
                  darkMode
                    ? "text-[#54b37f] text-[24px] textBlack"
                    : "text-[#FB8C00] text-[24px] textBlack"
                }`}
              >
                #
              </span>
              <h2
                className={`tracking-tighter ${
                  darkMode
                    ? "text-[#d8d8d8] text-[24px] textBlack"
                    : "text-[#525252] text-[24px] textBlack"
                }`}
              >
                Experiencia
              </h2>
            </div>

            <div className={`w-[400px] border-[1px] ${darkMode ? "border-[#b4b4b473]" : " border-[#81818173]"}`}></div>
          </div>

          <BoxExperience />
        </motion.div>
      </section>

      {/**Projects */}
      <section className="w-[80%] mt-[250px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4">
            <div className={`w-[400px] border-[1px] ${darkMode ? "border-[#b4b4b473]" : " border-[#81818173]"}`}></div>

            <div className="flex items-center">
              <span
                className={`${
                  darkMode
                    ? "text-[#54b37f] text-[24px] textBlack"
                    : "text-[#FB8C00] text-[24px] textBlack"
                }`}
              >
                #
              </span>
              <h2
                className={`tracking-tighter ${
                  darkMode
                    ? "text-[#d8d8d8] text-[24px] textBlack"
                    : "text-[#525252] text-[24px] textBlack"
                }`}
              >
                Proyectos
              </h2>
            </div>

            <div className={`w-[400px] border-[1px] ${darkMode ? "border-[#b4b4b473]" : " border-[#81818173]"}`}></div>
          </div>








          <div className="grid grid-cols-1 gap-4 mt-[60px] w-[80%] m-auto">
            <div className="h-[500px] relative hoverson overflow-hidden w-full  items-center img1 rounded-[10px] border-[1px] border-[#4d4d4d]">
              <div className={`absolute border-[1px] border-[#afafaf] px-[50px] py-[20px] bottom-[-100%]  w-[95%] rounded-2xl left-[2.5%] h-[40%] flex flex-col justify-center

              ${
                  darkMode
                    ? "dark-conteiner"
                    : "light-conteiner"
                }
                
                `}>
                <h2 className={`text-[24px] textBold tracking-tight
                ${darkMode ? "text-[#ffffff]" : "text-[#4e4e4e]" }`}>
                  Clínica Praxis
                </h2>
                <p className="text-[#999999] text-[14px] py-1 textRegular leading-[24px] tracking-tight">
                  La página cuenta con un sistema de ingreso y registro de
                  usuarios, además de una sección para agendar, cancelar, y ver
                  turnos médicos o historias clínicas. Cuenta con interfaces
                  diferentes para usuarios y administradores (medicos) con sus
                  respectivos roles y funcionalidades.
                </p>

                <div className="flex flex-wrap items-center gap-2 text-[#999999] text-[14px] py-3 textRegular leading-[24px] tracking-tight">
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
                      className={`px-2 rounded-[5px] border-[1px] break-words
                      ${
                        darkMode
                          ? "dark-conteiner"
                          : "light-conteiner"
                      }`}
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-[10px] w-[80%] m-auto">
            <div className={`h-[450px] w-full flex flex-col rounded-[10px] border-[1px] border-[#4d4d4d]

            ${
                darkMode
                  ? "dark-conteiner"
                  : "light-conteiner"
              }
              `}>
              <div className="h-[50%] w-full relative hoverson img1 rounded-[10px] border-[1px] border-[#4d4d4d] overflow-hidden"></div>

              <div className="flex-grow p-5 w-full break-words">
                <h2 className={`text-[20px] textBold tracking-tight
                  ${darkMode ? "text-[#ffffff]" : "text-[#4e4e4e]" } `}>
                  SoundWave
                </h2>
                <p className="text-[#999999] text-[14px] py-1 textRegular leading-[24px] tracking-tight">
                  Página orientada a la venta de productos audiovisuales, donde
                  el usuario puede realizar sus compras y ver su carrito,
                  filtrar productos y crear reseñas. Cuenta con un sistema de
                  autenticación basado en JWT.
                </p>
                <div className="flex flex-wrap items-center gap-2 text-[#999999] text-[13px] py-3 textRegular leading-[24px] tracking-tight">
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
                      className={`px-2 rounded-[5px] border-[1px] break-words
                       `}
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className={`h-[450px] w-full flex flex-col rounded-[10px] border-[1px] border-[#4d4d4d]
            ${
                        darkMode
                          ? "dark-conteiner"
                          : "light-conteiner"
                      }
               `}>
              <div className="h-[50%] w-full relative hoverson img1 rounded-[10px] border-[1px] border-[#4d4d4d] overflow-hidden"></div>

              <div className="flex-grow p-5 w-full break-words">
                <h2 className={`text-[20px] textBold tracking-tight
                  ${darkMode ? "text-[#ffffff]" : "text-[#4e4e4e]" }`}>
                  Librería YENNY
                </h2>
                <p className="text-[#999999] text-[14px] py-1 textRegular leading-[24px] tracking-tight">
                  Página basada en un sistema similar hecho en Java, donde el
                  usuario puede realizar sus compras, filtrar productos además
                  de sumarse al membresías. El empleado podrá gestionar el
                  inventario y las ventas.
                </p>
                <div className="flex flex-wrap items-center gap-2 text-[#999999] text-[13px] py-3 textRegular leading-[24px] tracking-tight">
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
                      className={`px-2 rounded-[5px] border-[1px] break-words
                        `}
                    >
                      {tech}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="w-[80%] mt-[200px] mb-[200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className={`text-[35px] textBold tracking-tighter
              ${darkMode ? "text-[#ffffff]" : "text-[#4e4e4e]" }`}>
              ¿Interesado en trabajar juntos?
            </h1>

            <h3 className="text-[#a1a1a1] text-[14px] textBold tracking-tight">
              Para más información, contáctame vía LinkedIn o Email.
            </h3>

            <Link
              to={"https://www.linkedin.com/in/axel-ian-berger-a831242a4/"}
              target="_blank"
            >
              <button
                className={`button mt-10 ${
                  darkMode
                    ? "buttonDark"
                    : "buttonLight"
                }`}
              >
                <FontAwesomeIcon
                  className={`icon text-[40px] 
                    ${darkMode ? "text-[#FFFFFF]" : "text-[#4e4e4e]" }`}
                  icon={faLinkedin}
                />
                <span className={`text textBold ${darkMode ? "text-[#FFFFFF]" : "text-[#4e4e4e]" }`}>LinkedIn</span>
              </button>
            </Link>

            <button
              onClick={() => copyToClipboard("axelian2504@gmail.com")}
              className={`button mt-3 relative ${
                darkMode
                  ? "buttonDark"
                  : "buttonLight"
              }`}
            >
              <FontAwesomeIcon className={`icon text-[40px] ${darkMode ? "text-[#FFFFFF]" : "text-[#4e4e4e]" }`} icon={faEnvelope} />

              {/* Mensaje de copiado */}
              {copied ? (
                <span className="text textBold">¡Copiado!</span>
              ) : (
                <span className="text textBold">axelian2504@gmail.com</span>
              )}
            </button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

/*
<section className="w-[80%] mt-[200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4">
            
              <div className="w-[400px] border-[1px] border-[#b4b4b473]"></div>

                <div className="flex items-center">
              <span
                className={`${
                  darkMode
                    ? "text-[#A8BE6A] text-[24px] textBlack"
                    : "text-[#66237b] text-[24px] textBlack"
                }`}
              >
                #
              </span>
              <h2
                className={`tracking-tighter ${
                  darkMode
                    ? "text-[#d8d8d8] text-[24px] textBlack"
                    : "text-[#66237b] text-[24px] textBlack"
                }`}
              >
                Experiencia
              </h2>
            </div>
           
            <div className="w-[400px] border-[1px] border-[#b4b4b473]"></div>
          </div>
         
        </motion.div>
      </section>*/
