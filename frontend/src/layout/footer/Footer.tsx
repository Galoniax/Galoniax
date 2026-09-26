import { EMAIL } from "@/api/config";
import { ROUTES } from "@/api/constants/constants";

import { motion } from "motion/react";
import { VideoText } from "@/components/ui/feedback/video-text";

const video = "https://txovvyzebjxmtvwifkto.supabase.co/storage/v1/object/public/assets/Video.mp4";
const videoDark = "https://txovvyzebjxmtvwifkto.supabase.co/storage/v1/object/public/assets/DarkVideo.mp4";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className: string;
}

function NavLink({ href, children, className }: NavLinkProps) {
  return (
    <motion.a
      href={href}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`flex flex-row items-center gap-x-1 relative ${className}`}
    >
      <motion.div
        variants={{
          rest: { opacity: 0, x: -12, display: "none" },
          hover: { opacity: 1, x: 0, display: "block" },
        }}
        transition={{ duration: 0.1 }}
        className="w-1.5 h-1.5 bg-6 dark:bg-2/50 rounded-full"
      />

      <motion.span
        variants={{
          rest: { x: 0 },
          hover: { x: 6 },
        }}
        transition={{ duration: 0.1 }}
        className="text-xl font-medium"
      >
        {children}
      </motion.span>
    </motion.a>
  );
}

export default function Footer({ isDarkTheme }: { isDarkTheme: boolean }) {
  const textColor = isDarkTheme ? "text-1" : "text-4";
  const textClassName = `font-semibold`;

  const containerClassName = isDarkTheme ? "bg-semi-black" : "bg-gray";

  return (
    <footer
      className={`${containerClassName} w-full py-16 px-6 flex flex-col gap-y-8`}
    >
      <div className="flex flex-col md:flex-row w-full gap-10">
        <div className="flex-1 flex flex-col gap-y-2 items-start">
          <h3 className="text-sm md:text-base text-5 dark:text-2/60 tracking-tight font-mono">
            (+54) 11 6792-0653
          </h3>

          <div className="flex gap-2 items-center group/link *:transition-all *:duration-300">
            <div className="p-0.5 bg-primary rounded-full text-background group-hover/link:rotate-90">
              <svg
                width="10"
                height="10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path
                  className="fill-white dark:fill-black"
                  d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"
                />
              </svg>
            </div>

            <a
              href={`mailto:${EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl dark:text-2 font-semibold underline underline-offset-8 group-hover/link:no-underline"
            >
              {EMAIL}
            </a>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-y-6">
          <div className="flex flex-col md:col-span-4 items-start gap-y-2.5">
            <p className="text-xs text-5 dark:text-2/60 mb-1">Páginas</p>
            <NavLink
              href={ROUTES.INDEX + "#About"}
              className={`${textColor} ${textClassName}`}
            >
              Stack
            </NavLink>
            <NavLink
              href={ROUTES.PROJECT}
              className={`${textColor} ${textClassName}`}
            >
              Proyectos
            </NavLink>
          </div>

          <div className="flex flex-col md:col-span-4 items-start gap-y-2.5">
            <p className="text-xs text-5 dark:text-2/60 mb-1">Social</p>
            <NavLink
              href={"https://www.linkedin.com/in/axelberger2005/"}
              className={`${textColor} ${textClassName}`}
            >
              LinkedIn
            </NavLink>
            <NavLink
              href={"https://github.com/Galoniax"}
              className={`${textColor} ${textClassName}`}
            >
              GitHub
            </NavLink>
          </div>
        </div>
      </div>

      <div className="border-t mt-6" />
      <VideoText
        src={isDarkTheme ? videoDark : video}
        fontSize="12vw"
        fontWeight="800"
        className="font-black tracking-tighter w-full h-[12vw] "
      >
        AXEL BERGER
      </VideoText>

      <small className="border-t flex flex-row items-center py-3">
        <span className="text-xs text-5 dark:text-2/60">
          ©{new Date().getFullYear()} Axel Berger. Todos los derechos
          reservados.
        </span>
      </small>
    </footer>
  );
}
