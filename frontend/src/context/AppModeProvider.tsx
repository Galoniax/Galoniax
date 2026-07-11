/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useMemo, useState } from "react";

type AppModeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

export const AppModeContext = createContext<AppModeContextType | undefined>(
  undefined,
);

export const AppModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  useEffect(() => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const contextValue = useMemo(
    () => ({ isDarkTheme, toggleTheme }),
    [isDarkTheme],
  );

  return (
    <AppModeContext.Provider value={contextValue}>
      {children}
    </AppModeContext.Provider>
  );
};
