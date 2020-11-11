import React, { useContext } from "react"
import { themeContext } from "../context/Theme"
import { useTranslation } from "react-i18next"

import * as S from "./styles"

const languages: { [key: string]: string; } = {
  pl: "English",
  en: "Polski"
}

const Navbar: React.FC = () => {
  const { i18n } = useTranslation()
  const { theme, changeTheme } = useContext(themeContext)

  return (
    <S.NavBar mode={theme}>
      <S.NavBarItem underline>
        <a href="https://github.com/adboc" aria-label="Github Link" target="_blank" rel="noopener noreferrer">Github</a>
      </S.NavBarItem>
      <S.LanguageButton
        onClick={() => i18n.language === "pl" ? i18n.changeLanguage("en") : i18n.changeLanguage("pl")}>
        {languages[i18n.language]}
      </S.LanguageButton>
      <S.NavBarItem underline={false}>
        <p className="nav-item-label">CV</p>
        <S.Dropdown>
          <a href="CvPl.pdf" aria-label="CV po polsku" target="_blank" rel="noopener noreferrer">Polski</a>
          <a href="CvEng.pdf" aria-label="CV in english" target="_blank" rel="noopener noreferrer">English</a>
        </S.Dropdown>
      </S.NavBarItem>
      <S.ThemeSwitcher visibility={theme} onClick={changeTheme}>
        <div className={`sun ${theme === "light" ? "" : "circle-color"}`}>
          <div className={`moon ${theme === "dark" ? "moon-scale" : ""}`} />
        </div>
      </S.ThemeSwitcher>
    </S.NavBar>
  )
}

export default Navbar