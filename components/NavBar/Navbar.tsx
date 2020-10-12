import React, { useContext } from "react"
import * as S from "./styles"
import { themeContext } from "../context/Theme"

const Navbar: React.FC = () => {
  const {theme, changeTheme} = useContext(themeContext);

  return (
    <S.Header mode={theme}>
      <div className="position-nav">
        <a className="nav-item" href="#projekty">Projekty</a>
        <a className="nav-item" href="https://github.com/adboc" target="_blank" rel="noopener">Github</a>
        <p className="nav-item">CV</p>
        <S.ThemeSwitcher onClick={changeTheme}>
          <div className={`sun ${theme === "light" ? "" : "circle-color"}`}>
            <div className={`moon ${theme === "light" ? "" : "moon-scale"}`}/>
          </div>
        </S.ThemeSwitcher>
      </div>
    </S.Header>
  )
}

export default Navbar