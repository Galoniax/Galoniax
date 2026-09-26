import { projectList } from "@/data/projects";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Proyects() {
  const [index, setIndex] = useState(0);

  const selected = projectList[index];

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % projectList.length);
    }, 5000);

    return () => clearInterval(id);
  }, []);
  // <img className="w-full h-auto" src={selected.images[0].url} />
  return (
    <motion.section
      id="Credentials"
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
      className="px-6 px-[5vw] md:px-[6vw] py-[10vh] lg:py-[20vh] flex flex-col gap-4"
    >
      <span className="text-6 dark:text-2/50 uppercase tracking-widest font-mono text-xs">
        Trabajo académico
      </span>
      <h2 className="font-black text-4 dark:text-1 text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter italic">
        Proyectos
      </h2>

      <div className="w-full border-t border-6 dark:border-2/30 my-3" />

      <div className="flex flex-col gap-3">
        <div key={selected.title} className="flex flex-col gap-2">
          <div className="flex gap-8 items-end">
            <span className="text-orange-500 font-mono">
              {("0" + (index + 1)).slice(-2)}
            </span>
            <h2 className="font-black text-4 dark:text-1 text-3xl sm:text-5xl uppercase tracking-tight">
              {selected.title}
            </h2>
          </div>

          <div className="h-[500px] w-full bg-white overflow-hidden rounded-2xl border-2 border-6 dark:border-2/30"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm font-light text-5/90 line-clamp-1 dark:text-2/70">
              {selected.description}
            </p>

            <div className="flex font-mono items-center justify-end gap-2 text-5/90 dark:text-2/60  **:rounded-2xl text-sm **:px-2 **:border **:border-6 **:dark:border-2/30">
              {selected.tech.slice(0, 5).map((tech) => (
                <span key={tech} className="whitespace-nowrap ">
                  {tech}
                </span>
              ))}
              {selected.tech.slice(5).length > 0 && (
                <span className="whitespace-nowrap">
                  +{selected.tech.slice(5).length}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/** DOTS */}
      <div className="w-full flex justify-center gap-2">
        {projectList.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              i === index ? "bg-6 dark:bg-2/80" : "bg-2/60 dark:bg-2/60"
            }`}
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
          />
        ))}
      </div>
    </motion.section>
  );
}
