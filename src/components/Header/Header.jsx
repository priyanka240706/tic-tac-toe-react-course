import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { DarkModeIcon, HeaderWrapper, LightModeIcon } from "./Header.styled";
// import { ReactComponent as Logo } from "../../assets/svgs/tic-tac-toe.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      {/* <Logo className="logo" /> */}
      <img onClick={() => navigate("/home")} src="./assets/svgs/tic-tac-toe.jpg" className="logo" />

      <span onClick={() => toggleTheme()}>
        {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </span>
    </HeaderWrapper>
  )
}

export default Header;