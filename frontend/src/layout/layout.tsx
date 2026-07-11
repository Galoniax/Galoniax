import { useState, type ReactNode } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import LinkedButtons from "@/components/ui/buttons/LinkedButtons";
import { useAppMode } from "@/hooks/useAppMode";
import Time from "@/components/shared/Time";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  const { isDarkTheme } = useAppMode();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 300) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const size = 20;

  return (
    <>
      <Navbar />
      {children}
      <Footer isDarkTheme={isDarkTheme} />

      <Time
        spanClassName="backdrop-blur-md"
        className="justify-center md:justify-end"
      />

      <motion.div
        initial={{ x: 200 }}
        animate={{
          opacity: hidden ? 0 : 1,
          x: hidden ? 200 : 0,
        }}
        transition={{
          type: "tween",
          opacity: { duration: 1, ease: "anticipate" },
        }}
        className={`flex-col hidden md:flex fixed right-0 top-1/2 z-50 py-4 px-3 gap-y-3 
          *:border 
          *:p-3 
          *:rounded-full 
          *:text-4 *:dark:text-1
          *:hover:border-6
          *:backdrop-blur-lg
          *:duration-300
          items-center  transition-all`}
      >
        <LinkedButtons size={size} />
      </motion.div>
    </>
  );
};

export default Layout;
