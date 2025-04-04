import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faWhatsapp,
  faDiscord,
  faYoutube,
  faInstagram,
  faRedditAlien,
  faSpotify,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../../context/ThemeContext";

import "./iconsMoving.css";

export function IconsMoving() {
    const { darkMode } = useTheme();
    return (
      <div className={`icons-moving-container overflow-hidden mt-[200px] text-[40px] 
        ${ darkMode ? "bg-[#44a16e] hover:bg-[#757575]" : "bg-[#ec8200] text-[#f1f1f1] hover:bg-[#757575]"
      }`}>
        <div className="icons-moving py-[20px] gap-x-[100px] md:gap-x-[200px]">
          {/* Duplicamos los íconos para el efecto continuo */}
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex gap-x-[100px] md:gap-x-[200px] ">
              <FontAwesomeIcon className="scaleGrow" icon={faLinkedinIn} />
              <FontAwesomeIcon className="scaleGrow" icon={faWhatsapp} />
              <FontAwesomeIcon className="scaleGrow" icon={faDiscord} />
              <FontAwesomeIcon className="scaleGrow" icon={faYoutube} />
              <FontAwesomeIcon className="scaleGrow" icon={faInstagram} />
              <FontAwesomeIcon className="scaleGrow" icon={faRedditAlien} />
              <FontAwesomeIcon className="scaleGrow" icon={faSpotify} />
              <FontAwesomeIcon className="scaleGrow" icon={faGithub} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
