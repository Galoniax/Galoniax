import { format } from "date-fns";
import { es } from "date-fns/locale";
import { useEffect, useState } from "react";

interface Props {
  className: string;
  spanClassName?: string;
}

export default function Time({ className, spanClassName }: Props) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`w-full z-50 flex flex-row  ${className}   px-6 md:px-20 py-3 fixed bottom-0`}
    >
      <span
        className={`rounded-full px-4 py-2 text-5 dark:text-2
          font-mono text-[10px] md:text-[11px] uppercase tracking-widest  ${spanClassName}`}
      >
        {format(time, "iii HH:mm aaaa", {
          locale: es,
        })}
      </span>
    </div>
  );
}
