import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { TypingAnimation } from "./typing-animation";

const STEPS = [
  "// INITIALIZING NEURAL INTERFACE...",
  "// DECRYPTING DATA STREAMS...",
  "// SYNCHRONIZING PARALLEL REALITIES...",
  "// TRANSMITTING QUANTUM SIGNALS...",
  "// UNLOCKING DIGITAL DIMENSIONS...",
  "// DETECTING DEVICE RESOLUTION...",
  "// ASSEMBLING SYSTEM CORE...",
  "// LOADING WEB APPLICATION...",
  "// VERIFYING DATA INTEGRITY...",
  "// SUCCESS! LAUNCHING WORKSPACE...",
];

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const doubled = [...STEPS, ...STEPS, ...STEPS];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev < doubled.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            onComplete?.();
          }, 1200);
          return prev;
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, [onComplete, doubled.length]);

  const progress = (activeIndex / (STEPS.length - 1)) * 100;

  console.log(progress);

  useEffect(() => {
    const originalHtml = document.documentElement.style.overflow;
    const originalBody = document.body.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    return () => {
      document.documentElement.style.overflow = originalHtml;
      document.body.style.overflow = originalBody;
    };
  }, []);

  return (
    <motion.main
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ zIndex: 1000 }}
      className="fixed w-full h-screen flex flex-col md:flex-row justify-between items-center bg-[#111111] overflow-hidden select-none p-10 gap-8"
    >
      <div className="flex-1 w-full max-w-lg md:max-w-xl h-[300px] overflow-hidden flex flex-col items-center justify-center z-0 px-4">
        <motion.div
          className="flex flex-col w-full"
          animate={{ y: -activeIndex * 40 + 600 }}
          transition={{ type: "spring", stiffness: 90, damping: 18 }}
        >
          {doubled.map((step, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={idx}
                className="h-10 flex items-center justify-center w-full"
              >
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0.3,
                    scale: isActive ? 1.03 : 0.97,
                  }}
                  transition={{ duration: 0.25 }}
                  className="w-full flex justify-center leading-none"
                >
                  {isActive ? (
                    <span className="font-mono text-xs sm:text-sm uppercase  bg-white text-[#111111] px-4 py-1.5 rounded-[2px] shadow-[0_0_20px_rgba(255,255,255,0.35)] text-center">
                      {step}
                    </span>
                  ) : (
                    <span className="font-mono text-xs sm:text-sm uppercase text-white/80 text-center">
                      {step}
                    </span>
                  )}
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <span className="flex-1 flex items-center justify-center text-xs md:text-sm font-mono uppercase text-center">
        ( {progress >= 100 ? "Listo" : `${progress.toFixed(0)}%`} )
      </span>

      <TypingAnimation
        blinkCursor={true}
        duration={20}
        pauseDelay={0}
        cursorStyle="block"
        startOnView
        loop={false}
        className="text-xs md:text-sm font-mono text-center md:text-left uppercase flex-1 flex items-end"
      >
        // El sistema está inicializando. Aguarde un momento, por favor...
      </TypingAnimation>
    </motion.main>
  );
}
