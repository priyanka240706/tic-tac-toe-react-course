import { useContext } from "react";
import Router from "./Router";
import { GlobalStyles } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  const mode = theme === "light" ? lightTheme : darkTheme;

  return (
    <div>
      <ThemeProvider theme={mode}>
        <GlobalStyles />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;

// ThemeProvider is a special wrapper component from
// styled‑components (or Material‑UI) that makes a
// theme object available to all of its child components

// React Context internally to inject the theme object 
// into all styled components