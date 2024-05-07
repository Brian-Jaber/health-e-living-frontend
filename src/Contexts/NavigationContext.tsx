import { createContext, useContext } from "react";

const NavContext = createContext(undefined);

export const useNav = () => {
  const context = useContext(NavContext);
  if (!context) throw new Error("Error in useNav, no context.");
  return context;
}