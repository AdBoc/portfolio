import React from "react"
import { SectionTitle } from "../styles/SectionTitleWrapper"
import { useTranslation } from "react-i18next"
import * as S from "./styles"

const Education = () => {
  const { t } = useTranslation()
  return (
    <S.Section>
      <SectionTitle>{t("Education.Title")}</SectionTitle>
      <S.EducationWrapper>
        <p className="uni">{t("Education.Uni")}</p>
        <p className="date">{t("Education.Year")}</p>
        <p className="class">{t("Education.Faculty")}</p>
      </S.EducationWrapper>
    </S.Section>
  )
}

export default Education