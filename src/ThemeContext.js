import { createContext } from "react";

// context API usecase for a theme globally available


const ThemeContext = createContext(["green", ()   => {}]);
  

export default ThemeContext;