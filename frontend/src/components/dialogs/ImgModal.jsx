import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const ImgModal = ({ images, onClose }) => {
  const { darkMode } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#000000e1] transition-opacity`}
    >
      <div
        className={`relative mx-auto h-full w-full p-6 shadow-xl md:w-[50%] lg:h-auto lg:rounded-lg ${darkMode ? "bg-[#292929]" : "bg-[#ffffff]"}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 cursor-pointer rounded-full p-2 text-[25px]"
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>

        <div className="flex h-[80%] items-center justify-between">
          <button
            onClick={prevImage}
            className={`cursor-pointer rounded-full p-2 ${darkMode ? "bg-[#000000] text-white hover:bg-[#141414]" : "bg-[#ebebeb] text-black hover:bg-[#f0f0f0]"}`}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div className="mx-4 flex flex-1 justify-center">
            <a href={images[currentIndex]} target="_blank">
              <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="h-auto max-h-[70vh] w-auto max-w-full rounded-lg object-contain"
              />
            </a>
          </div>

          <button
            onClick={nextImage}
            className={`cursor-pointer rounded-full p-2 ${darkMode ? "bg-[#000000] text-white hover:bg-[#141414]" : "bg-[#ebebeb] text-black hover:bg-[#f0f0f0]"}`}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        <div className="mt-4 flex justify-center">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`mx-1 h-3 w-3 rounded-full ${
                currentIndex === index && darkMode
                  ? "bg-[#dbdbdb]"
                  : currentIndex === index
                    ? "bg-[#000000]"
                    : "bg-[#797979]"
              } `}
            ></button>
          ))}
        </div>

        <div className="mt-4 text-center">
          <p
            className={`text-[16px] ${darkMode ? "text-[#d8d8d8]" : "text-[#292929]"}`}
          >
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImgModal;
