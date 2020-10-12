import React from "react"
import * as S from "./styles"
import { SectionTitleWrapper } from "../styles/SectionTitleWrapper"
import { useTranslation } from "react-i18next"


const AboutMe = () => {
  const { t, i18n } = useTranslation()
  return (
    <S.Section>
      <SectionTitleWrapper>
        <h1>O mnie</h1>
      </SectionTitleWrapper>
      <p>Witaj! Nazywam się Adrian, jestem studentem czwartego roku Informatyki Stosowanej na AGH. Chciałbym pracować jako Front-End/Full
        Stack Developer.</p>
      <button onClick={() => {i18n.changeLanguage("pl")}}>Change Translation</button>
      <p>{t("Welcome to React")}</p>
    </S.Section>
  )
}

export default AboutMe