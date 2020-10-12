import React from "react"
import * as S from "./styles"
import { SectionTitleWrapper } from "../styles/SectionTitleWrapper"


const AboutMe = () => {
  return (
    <S.Section>
      <SectionTitleWrapper>
        <h1>O mnie</h1>
      </SectionTitleWrapper>
      <p>Witaj! Nazywam się Adrian, jestem studentem czwartego roku Informatyki Stosowanej na AGH. Chciałbym pracować jako Front-End/Full
        Stack Developer.</p>
    </S.Section>
  )
}

export default AboutMe