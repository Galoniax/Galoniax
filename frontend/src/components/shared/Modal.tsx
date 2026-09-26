import { motion, type Variants } from "motion/react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import Time from "./Time";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const navVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function SideBarMenu({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <motion.section
      onClick={() => {
        onClose();
      }}
      className="fixed inset-0 z-50 dark:bg-black/80 bg-white/80 backdrop-blur-sm flex flex-col gap-y-8 items-center justify-center modal-overlay-backdrop"
    >
      <button
        onClick={(e) => {
          e.preventDefault();
          onClose();
        }}
        className="absolute top-10 right-10 cursor-pointer p-2"
      >
        <X size={28} />
      </button>
      <motion.nav
        onClick={(e) => {
          e.stopPropagation();
        }}
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-y-8 text-5/50 dark:text-2/40 text-center text-6xl font-black uppercase *:transition-all *:duration-200 *:cursor-pointer *:hover:underline underline-offset-8"
      >
        <motion.a
          variants={itemVariants}
          className="hover:text-4 dark:hover:text-2"
        >
          <p>Inicio</p>
        </motion.a>
        <motion.a
          variants={itemVariants}
          className="hover:text-4 dark:hover:text-2"
        >
          <p>Stack</p>
        </motion.a>
        <motion.a
          variants={itemVariants}
          className="hover:text-4 dark:hover:text-2"
        >
          <p>Proyectos</p>
        </motion.a>
        <motion.a
          variants={itemVariants}
          className="hover:text-4 dark:hover:text-2"
        >
          <p>Contacto</p>
        </motion.a>
      </motion.nav>

      <div className="flex flex-col items-center">
        <div className="max-w-[5rem] w-full border-t pb-4" />
        <span className="uppercase text-5 dark:text-2/80 tracking-wider font-semibold text-center text-xl  transition-all duration-200">
          Trabajemos juntos
        </span>
      </div>

      <Time className="justify-center pb-10" />
    </motion.section>,
    document.body,
  );
}
