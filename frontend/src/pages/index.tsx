import { useRef, useState } from "react";

import { useAppMode } from "@/hooks/useAppMode";

import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { categories } from "@/api/constants/constants";
import LinkedButtons from "@/components/ui/buttons/LinkedButtons";
import { ArrowUp, Check, Copy, Mail } from "lucide-react";

import Proyects from "@/components/features/Proyects";
import Credentials from "@/components/features/Credentials";
import Hero from "@/components/features/Hero";

import { EMAIL } from "@/api/config";

export default function Home() {
  const { isDarkTheme } = useAppMode();

  const [copied, setCopied] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 50,
    restDelta: 0.001,
  });

  const x1 = useTransform(smoothProgress, [0, 1], ["100%", "-80%"]);
  const x2 = useTransform(smoothProgress, [0, 1], ["-80%", "100%"]);

  const containerClassName = isDarkTheme ? "bg-semi-black" : "bg-gray";

  // bg-[#EDEAE3]
  // Express
  /** <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width={size}
        height={size}
        viewBox="0 0 48 48"
      >
        <path
          fill="#212121"
          d="M23.697,37.56h1.18c0.84,0,1.631-0.392,2.139-1.061l7.485-9.847l7.485,9.847	c0.508,0.668,1.299,1.061,2.139,1.061h1.18L35.756,25l9.121-12h-1.18c-0.84,0-1.631,0.392-2.139,1.061L34.5,23.347l-7.059-9.287	C26.933,13.392,26.142,13,25.302,13h-1.18l9.121,12L23.697,37.56z"
        ></path>
        <path
          fill="#212121"
          d="M24,26v-3c0-6.675-5.945-11.961-12.829-10.852C5.812,13.011,2,17.857,2,23.284L2,24v2v0.142	c0,6.553,4.777,11.786,10.868,11.858c5.092,0.06,9.389-3.344,10.707-7.999h-1.028c-0.62,0-1.182,0.355-1.451,0.913	c-1.739,3.595-5.789,5.862-10.228,4.842C6.776,34.815,4,30.981,4,26.783V26H24z M4,23.71c0-4.708,2.804-8.557,6.924-9.478	C16.798,12.92,22,17.352,22,23v1H4V23.71z"
        ></path>
      </svg> */

  const first = categories(1).slice(0, 2);
  const second = categories(1).slice(2);

  const duplicatedFirst = [...first, ...first, ...first, ...first];
  const duplicatedSecond = [...second, ...second, ...second, ...second];

  return (
    <main className={`${containerClassName} min-h-screen`}>
       <Hero isDarkTheme={isDarkTheme} />

      <section
        ref={sectionRef}
        className="py-12 overflow-hidden w-full flex flex-col gap-y-4"
      >
        <div className="w-full">
          <motion.h2
            style={{ x: x1 }}
            className={`text-6xl md:text-8xl lg:text-9xl xl:text-[220px] font-black tracking-tighter leading-none whitespace-nowrap flex flex-row items-center gap-x-2 text-3/80 dark:text-1`}
          >
            Web Dev{" "}
            <span className="italic text-3xl lg:text-5xl xl:text-6xl font-light text-gray-300 dark:text-gray-700">
              &
            </span>{" "}
            App
          </motion.h2>
        </div>

        <div className="w-full max-w-[90vw] mx-auto md:hidden border-t border-gray-400" />

        <div className="w-full">
          <motion.h2
            style={{ x: x2 }}
            className={`text-6xl md:text-8xl lg:text-9xl xl:text-[220px] font-black tracking-tighter leading-none whitespace-nowrap flex flex-row items-center gap-x-2 text-4/80 dark:text-1`}
          >
            UI{" "}
            <span className="italic text-3xl lg:text-5xl xl:text-6xl font-light text-gray-300 dark:text-gray-700">
              &
            </span>{" "}
            Systems
          </motion.h2>
        </div>
      </section>

      <section
        id="About"
        className="flex flex-col lg:flex-row px-6 md:px-20 py-16 md:py-20 lg:py-24 gap-12 lg:gap-20"
      >
        <div className="flex flex-1 flex-col gap-y-4">
          <div className="flex flex-row gap-x-2 items-center">
            <span className="text-6 dark:text-2/50 uppercase tracking-widest font-mono text-xs">
              Stack tecnológico
            </span>
            <div className="border-t border-6 dark:border-2/30 w-full" />
          </div>
          <h2 className="text-4/80 dark:text-1 font-black text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight">
            Stack
          </h2>
          <p className="dark:text-2/70 text-5 text-base leading-7">
            Desarrollador de aplicaciones web y móviles, que abarca el
            desarrollo de interfaces de usuario (UI/Frontend), como la gestión
            de manejo de datos (Backend), permitiendo la creación de
            aplicaciones completas y funcionales.
          </p>

          <p className="text-5/70 dark:text-2/50 text-base">
            Analista de Sistemas y empezando un curso full-stack. Siempre busco acompañar a mis compañeros de equipo. Soy una
            persona puntual y responsable, que cumple con los plazos y objetivos
            establecidos. Siempre busco acompañar a mis compañeros de equipo y
            ayudar en lo que sea necesario.
          </p>

          <p className="text-5/70 dark:text-2/50 text-base">
            Apasionado por mantener un código limpio, entendible y buscando
            siempre una solución ante problemas de performance o bugs.
          </p>
        </div>

        <div className="flex-2 flex flex-col justify-center gap-y-12 pl-0 lg:pl-16 mt-12 lg:mt-0">
          {categories(22).map((cat, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-start md:items-center gap-10"
            >
              <h3 className="text-3xl md:text-4xl font-black text-6/60 dark:text-2 uppercase tracking-tight leading-none">
                {cat.title}
              </h3>
              <div className="flex-1 flex flex-row flex-wrap gap-x-8 gap-y-4 items-center">
                {cat.items.map((item, key) => (
                  <div key={key} className="flex flex-row items-center gap-x-2">
                    <div className="w-8 h-8 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <span className="font-mono text-xs uppercase tracking-wider text-5/70 dark:text-2/70">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    

      <div className="flex flex-col gap-y-4 overflow-hidden">
        {[duplicatedFirst, duplicatedSecond].map((arr, idx) => (
          <motion.div
            key={idx}
            className="flex flex-row"
            animate={{
              x: [idx == 0 ? "0%" : "-100%", idx == 0 ? "-100%" : "0%"],
            }}
            transition={{
              ease: "linear",
              duration: 40,
              repeat: Infinity,
            }}
          >
            {arr.map((i, idx) => (
              <div key={idx} className="flex flex-row gap-8 mx-3">
                {i.items.map((item, key) => {
                  return (
                    <div
                      key={key}
                      className="flex flex-row items-center gap-x-4"
                    >
                      <div className="min-h-3 min-w-3 md:min-h-5 md:min-w-5 rounded-full bg-6/60 dark:bg-2.5" />
                      <span className="font-black italic text-4xl md:text-6xl uppercase tracking-wider text-6/60 dark:text-2.5 whitespace-nowrap hover:text-5 hover:dark:text-2 transition-colors duration-300">
                        {" "}
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      <Proyects />

      <Credentials />

      <section className="flex flex-col lg:flex-row px-6 md:px-20 py-16 md:py-20 lg:py-24 gap-12 lg:gap-20">
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col gap-y-4 min-w-0"
        >
          <span className="text-6 dark:text-2/50 uppercase tracking-widest font-mono text-xs">
            Contacto
          </span>
          <div className="leading-none flex flex-row flex-wrap lg:block gap-1 md:gap-3">
            <h2 className="font-black uppercase text-3xl sm:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl">
              Trabajemos
            </h2>
            <h2
              className={`font-black uppercase text-5/70 dark:text-2/40 text-3xl sm:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl`}
            >
              juntos
            </h2>
          </div>
          <p
            className={`font-light text-base md:text-lg lg:max-w-[30vw] text-5/90 dark:text-2/60`}
          >
            Si crees que puedo ser una buena opción para tu empresa no dudes en
            contactarme. Estoy siempre abierto a nuevas oportunidades y desafíos
          </p>

          <div
            className={`flex mt-4 flex-row 
            *:p-3 
            *:rounded-full 
            *:text-4 *:dark:text-1
            *:duration-300
            items-center transition-all gap-4`}
          >
            <LinkedButtons size={20} />
          </div>
        </motion.div>

        <motion.a
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          href={`mailto:${EMAIL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col justify-center gap-y-2 group hover:scale-102 transition-all duration-300 min-w-0 cursor-pointer"
        >
          <div className="w-full border-t border-gray-300 dark:border-2/20 group-hover:border-5 dark:group-hover:border-2" />

          <div className="pt-10 gap-6 flex flex-col justify-between h-full">
            <div className="flex w-full justify-between">
              <Mail size={32} className="text-5/80 dark:text-2/80" />
              <ArrowUp
                size={32}
                className="text-5/80 dark:text-2/80 rotate-45 group-hover:rotate-90 group-hover:text-5 dark:group-hover:text-2 transition-all duration-200"
              />
            </div>

            <div className="flex flex-col leading-none gap-y-3">
              <span className="uppercase font-medium text-5/80 dark:text-2/50 tracking-[0.1rem] text-xs">
                Envíame un mensaje
              </span>
              <span className="uppercase text-4xl md:text-5xl font-black">
                axelian2504 <br />
                <span className="uppercase dark:text-2/50 text-5/80">
                  @gmail.com
                </span>
              </span>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText(EMAIL);
                  setCopied(true);

                  setTimeout(() => setCopied(false), 2500);
                }}
                className="flex flex-row items-center gap-x-3 cursor-copy py-4 uppercase group/btn transition-colors duration-300"
              >
                {copied ? (
                  <Check
                    size={16}
                    className="text-green-500 dark:text-green-400"
                  />
                ) : (
                  <Copy
                    size={16}
                    className="text-5/80 dark:text-2/40 
                      group-hover/btn:text-5 
                      dark:group-hover/btn:text-2 
                    "
                  />
                )}

                <span
                  className={`tracking-wider text-sm font-medium group-hover/btn:underline
                    ${
                      copied
                        ? "text-green-500 dark:text-green-400"
                        : "text-5/80 dark:text-2/40 group-hover/btn:text-5 dark:group-hover/btn:text-2"
                    }
                  `}
                >
                  {copied ? "Email copiado" : "Copiar"}
                </span>
              </button>
            </div>
          </div>
        </motion.a>
      </section>
    </main>
  );
}

{
  /** <div className="relative h-[500px] w-full overflow-hidden">
            <OrbitingCircles radius={100}>{innerOrbit}</OrbitingCircles>
            <OrbitingCircles>{outerOrbit}</OrbitingCircles>
          </div> */
}
