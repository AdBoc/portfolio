import React from "react"
import { SectionTitle } from "../styles/SectionTitleWrapper"

import { useTranslation } from "react-i18next"
import * as S from "./styles"

const AboutMe = () => {
  const { t } = useTranslation()
  return (
    <S.Section>
      <SectionTitle>{t("AboutMe.Title")}</SectionTitle>
      <p>{t("AboutMe.Description")}</p>
    </S.Section>
  )
}

export default AboutMe