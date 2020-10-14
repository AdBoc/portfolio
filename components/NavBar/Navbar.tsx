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
    <S.Header mode={theme}>
      <div className="position-nav">
        <a className="nav-item" href="https://github.com/adboc" aria-label="Github Link" target="_blank" rel="noopener noreferrer">Github</a>
        <S.LanguageButton
          onClick={() => i18n.language === "pl" ? i18n.changeLanguage("en") : i18n.changeLanguage("pl")}>
          {languages[i18n.language]}
        </S.LanguageButton>
        <a className="nav-item" href="CV.pdf" aria-label="Download CV" target="_blank" rel="noopener noreferrer">CV</a>
        <S.ThemeSwitcher visibility={theme} onClick={changeTheme}>
          <div className={`sun ${theme === "light" ? "" : "circle-color"}`}>
            <div className={`moon ${theme === "dark" ? "moon-scale" : ""}`} />
          </div>
        </S.ThemeSwitcher>
      </div>
    </S.Header>
  )
}

export default Navbar