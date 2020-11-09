import React from "react"
import { SectionTitle } from "../styles/SectionTitleWrapper"

import { useTranslation } from "react-i18next"
import * as S from "./styles"

const AboutMe = () => {
  const { t } = useTranslation()
  return (
    <S.Section>
      <SectionTitle>{t("AboutMe.Title")}</SectionTitle>
      <S.AboutMeWrapper>
        <p>{t("AboutMe.Description")}</p>
      </S.AboutMeWrapper>
    </S.Section>
  )
}

export default AboutMe