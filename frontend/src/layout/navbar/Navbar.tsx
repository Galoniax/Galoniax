import { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";
import { Menu } from "lucide-react";
import { useAppMode } from "@/hooks/useAppMode";
import { AnimatedThemeToggler } from "@/components/ui/buttons/animated-theme-toggler";

import "./navbar.css";
import SideBarMenu from "@/components/shared/Modal";

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { damping: 15, stiffness: 100 });

  const [hidden, setHidden] = useState(false);

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const { isDarkTheme, toggleTheme } = useAppMode();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (previous === undefined) return;

    if (latest > previous && latest > 200) {
      setHidden(true);
    } else if (latest < previous) {
      setHidden(false);
    }
  });

  const textColor = isDarkTheme ? "#ffffff" : "#2F2F2F";

  return (
    <>
      <motion.div
        style={{ scaleX: scaleX, originX: 0, height: 1.5 }}
        className="fixed gradient top-0 w-full z-50"
      />
      <motion.header
        animate={{ opacity: hidden ? 0 : 1.5 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ marginTop: 1.5 }}
        className={`fixed top-0 w-full z-50 backdrop-blur-md bg-white/50 dark:bg-black/50 flex justify-between items-center px-10 py-3`}
      >
        <h1
          className={`cursor-pointer font-semibold text-4 dark:text-1 ${textColor}`}
        >
          ByAxel
        </h1>

        <div className="cursor-pointer flex flex-row items-center gap-x-5">
          <AnimatedThemeToggler
            className="hover:bg-6/20 dark:hover:bg-3 cursor-pointer p-2 **:w-4 **:h-4 border border-gray-300 rounded-[10px] hover:border-gray-400 transition-all duration-200 ease-in-out "
            theme={isDarkTheme ? "dark" : "light"}
            onThemeChange={toggleTheme}
          />
          <button
            onClick={() => {
              setSidebarOpen(!isSidebarOpen);
            }}
            className="cursor-pointer p-2"
          >
            <Menu color={textColor} size={24} />
          </button>
        </div>
      </motion.header>

      <SideBarMenu
        isOpen={isSidebarOpen}
        onClose={() => {
          setSidebarOpen(false);
        }}
      />
    </>
  );
}
