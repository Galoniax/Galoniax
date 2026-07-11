import { useContext } from "react";
import { AppModeContext } from "@/context/AppModeProvider";

export const useAppMode = () => {
  const ctx = useContext(AppModeContext);
  if (!ctx)
    throw new Error("useAppMode debe usarse dentro de un AppModeProvider");
  return ctx;
};
