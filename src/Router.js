import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import Details from "./pages/Details/Details";
import Header from "./components/Header/Header";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/game-on" element={<Game />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;


// ✅ ThemeContextProvider wraps <App /> in index.js.

// ✅ ThemeContext.Provider passes { theme, toggleTheme }.

// ✅ App.js consumes theme and maps it to lightTheme or darkTheme.

// ✅ ThemeProvider from styled-components receives a valid object (lightTheme or darkTheme