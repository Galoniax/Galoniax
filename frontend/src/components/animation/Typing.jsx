import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";

export function Typing({ texts = [], speed, delay }) {
  const { darkMode } = useTheme();
  const [displayedText, setDisplayedText] = useState(""); // Estado para el texto que se muestra actualmente
  const [textIndex, setTextIndex] = useState(0); // Estado para el índice del texto actual en el array de textos
  const [letterIndex, setLetterIndex] = useState(0); // Estado para el índice de la letra actual en el texto
  const [isDeleting, setIsDeleting] = useState(false); // Estado para determinar si se está borrando el texto

  // Efecto para manejar la escritura y el borrado de letras
  useEffect(() => {
    if (texts.length === 0) return; // Si no hay textos, no hace nada

    if (!isDeleting && letterIndex < texts[textIndex].length) {
      // Si no se está borrando y aún hay letras por escribir
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[textIndex][letterIndex]); // Añade la siguiente letra al texto mostrado
        setLetterIndex(letterIndex + 1); // Incrementa el índice de la letra
      }, speed); // Espera el tiempo especificado por 'speed' antes de añadir la siguiente letra
      return () => clearTimeout(timeout); // Limpia el timeout cuando el efecto se vuelve a ejecutar
    } else if (isDeleting && letterIndex > 0) {
      // Si se está borrando y aún hay letras por borrar
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1)); // Elimina la última letra del texto mostrado
        setLetterIndex(letterIndex - 1); // Decrementa el índice de la letra
      }, speed); // Espera el tiempo especificado por 'speed' antes de borrar la siguiente letra
      return () => clearTimeout(timeout); // Limpia el timeout cuando el efecto se vuelve a ejecutar
    } else if (!isDeleting && letterIndex === texts[textIndex].length) {
      // Si se ha terminado de escribir el texto actual
      const timeout = setTimeout(() => {
        setIsDeleting(true); // Cambia el estado a borrando
      }, delay); // Espera el tiempo especificado por 'delay' antes de empezar a borrar
      return () => clearTimeout(timeout); // Limpia el timeout cuando el efecto se vuelve a ejecutar
    } else if (isDeleting && letterIndex === 0) {
      // Si se ha terminado de borrar el texto actual
      const timeout = setTimeout(() => {
        setIsDeleting(false); // Cambia el estado a escribiendo
        setTextIndex((prev) => (prev + 1) % texts.length); // Pasa al siguiente texto en el array
      }, speed); // Espera el tiempo especificado por 'speed' antes de empezar a escribir el siguiente texto
      return () => clearTimeout(timeout); // Limpia el timeout cuando el efecto se vuelve a ejecutar
    }
  }, [letterIndex, textIndex, texts, speed, delay, isDeleting]); // Dependencias del efecto

  return (
    <span
      className={`textBlack text-[30px] md:text-[36px] lg:text-[48px] tracking-wide  ${darkMode ? "text-[#54b37f]" : "text-[#FB8C00]"}`}
    >
      {displayedText}
    </span>
  );
}

/**import React, { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

export function Typing({ texts = [], speed = 100, delay = 1500 }) {
    const { darkMode } = useTheme();
    const [displayedText, setDisplayedText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);

    // Muestra letra por letra
    useEffect(() => {
        if (texts.length === 0) return;

        if (letterIndex < texts[textIndex].length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + texts[textIndex][letterIndex]);
                setLetterIndex(letterIndex + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setDisplayedText(""); // Reinicia el texto
                setLetterIndex(0);
                setTextIndex((prev) => (prev + 1) % texts.length); // Pasa a la siguiente palabra
            }, delay);
            return () => clearTimeout(timeout);
        }
    }, [letterIndex, textIndex, texts, speed, delay]);



    return (
        <span className={`tracking-wide ${darkMode ? 'text-[#A8BE6A] text-[60px] textBold ' : 'text-[#66237b] text-[60px] textBold'}`}>
            {displayedText}
        </span>
    );
} */
