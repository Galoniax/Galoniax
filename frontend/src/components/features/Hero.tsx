import Balatro from "@/components/ui/feedback/balatro/Balatro";
import { GridPattern } from "@/components/ui/feedback/grid-pattern";
import { MoveRight } from "lucide-react";

export default function Hero({ isDarkTheme }: { isDarkTheme: boolean }) {
  return (
    <section className="relative min-h-screen flex flex-col gap-y-2 px-6 md:px-20 overflow-hidden pt-[10vh] md:pt-[20vh]">
      <GridPattern
        width={40}
        height={40}
        strokeDasharray="4 2"
        className="absolute inset-0 opacity-10 stroke-gray-400 z-0 pointer-events-none"
      />

      <div className="relative z-10 flex flex-col-reverse md:flex-row justify-between items-start gap-8">
        <div className="flex-1 flex flex-col gap-y-4 items-start tracking-wider uppercase">
          <h1 className="font-black text-3/80 dark:text-1 text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
            Desarrollador <br />
            FullStack
          </h1>
        </div>

        <div className="flex-1 w-full flex flex-col gap-y-4 items-start md:items-end tracking-wider uppercase">
          <div className="flex flex-row items-center gap-x-2 bg-6/10 border-6/40 px-3 py-1 rounded-full border dark:border-2/20 dark:text-2/80 dark:bg-3/70">
            <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
            <p className="font-mono text-5 dark:text-2 text-[10px] font-medium">
              Disponible
            </p>
          </div>

          <address className="not-italic flex flex-col items-start md:items-end gap-y-1 font-mono text-[10px] dark:text-2/70 text-5 font-light">
            <span>01/</span>
            <span>Buenos Aires, Argentina</span>
          </address>
        </div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row flex-wrap gap-4">
        <div className="flex-1 flex flex-col gap-y-4">
          <div className="flex-1 **:min-h-[25vh] **:w-full border border-gray-200 mt-6">
            <Balatro
              isRotate={false}
              mouseInteraction={false}
              pixelFilter={5000}
              color1={isDarkTheme ? "#ff7113ff" : "#003049"}
              color2={isDarkTheme ? "#f0a12cff" : "#669bbc"}
              color3={isDarkTheme ? "#4C4464" : "#fdf0d5"}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 w-full">
            <MoveRight className="text-5/90 dark:text-2" />

            <div className="col-span-1 md:col-span-3 ">
              <p className="font-mono dark:text-2/70 text-5 font-light text-[11px] tracking-wide uppercase leading-5">
                Apasionado por la tecnología y el desarrollo de software.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 text-end flex flex-col items-end uppercase gap-y-2">
          <p className="font-mono dark:text-2/70 text-5 font-light text-[11px]">
            Programador trainee, <br />
            con ganas de aprender y crecer.
          </p>
          <p className="font-mono dark:text-2/70 text-5/70 font-light text-[11px]">
            Abierto a pasantías / Full-time / Freelance
          </p>
          <h2 className="text-3/80 dark:text-1 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black">
            Axel <br /> Berger
          </h2>
          <span
            className={`
            dark:text-2/70 text-5/70
             font-mono text-[11px] uppercase tracking-widest
            `}
          >
            {new Date().getFullYear()} Portfolio
          </span>
        </div>
      </div>
    </section>
  );
}