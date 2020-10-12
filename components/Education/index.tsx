import React from "react"
import { SectionTitleWrapper } from "../styles/SectionTitleWrapper"
import * as S from "./styles"

const Education = () => {
  return (
    <S.Section>
      <SectionTitleWrapper>
        <h1>Wykształcenie</h1>
      </SectionTitleWrapper>
      <S.EducationWrapper>
        <p className="uni">Akademia Górniczo Hutnicza</p>
        <p className="date">2017-obecnie</p>
        <p className="class">Kierunek: Informatyka Stosowana</p>
      </S.EducationWrapper>
    </S.Section>
  )
}

export default Education