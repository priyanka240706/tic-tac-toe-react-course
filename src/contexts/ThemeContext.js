// "light" === lightMode, "dark" === darkMode
import { createContext, useState } from "react";

export const ThemeContext = createContext({});
// this content populated above come from
// the themecontext.provider's children

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
        {/* the same children from index.js is being passed in */}
        {/* all the children can access the value passed above */}
      </ThemeContext.Provider>
    </div>
  )
}

// createContext({}) = components can use to share
// data without passing props manually

// ThemeContextProvider = This is a wrapper component 
// you wrote that uses ThemeContext.Provider internally.

// It holds the actual state (theme, toggleTheme) 
// and passes it down via the value prop.