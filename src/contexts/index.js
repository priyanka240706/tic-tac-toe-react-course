import React from "react";
import { ThemeContextProvider } from "./ThemeContext";
import { GangeContextProvider } from "./GameContext";

const Provider = ({ children }) => { //combining all our 
  // contexts here --- below
  return (
    <ThemeContextProvider>
      <GangeContextProvider>
        {children}
        {/* we are accessing the children which is the app.js */}
      </GangeContextProvider>
    </ThemeContextProvider>
  )
}

export default Provider;