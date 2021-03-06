import React from "react"
import { useTranslation } from "react-i18next"

import Skill from "./Skill"
import { CssSvg, GatsbySvg, GoSvg, HtmlSvg, JestSvg, JsSvg, MochaSvg, NodeSvg, ReactSvg, ReduxSvg, SassSvg, TsSvg } from "../SVG/svg"

import { SectionWrapper } from "../styles/SectionWrapper"
import { SectionTitle } from "../styles/SectionTitleWrapper"
import * as S from "./styles"


const Skills = () => {
  const {t} = useTranslation()
  return (
    <SectionWrapper>
      <SectionTitle>{t("Skills.Title")}</SectionTitle>
      <S.SkillsContainer>
        <S.SkillsColumn>
          <h2>Front-end</h2>
          <Skill label="HTML" svg={<HtmlSvg />} />
          <Skill label="CSS" svg={<CssSvg />} />
          <Skill label="Sass" svg={<SassSvg />} />
          <Skill label="React" svg={<ReactSvg />} />
          <Skill label="Redux" svg={<ReduxSvg />} />
          <Skill label="Gatsby" svg={<GatsbySvg />} />
          <Skill label="JavaScript" svg={<JsSvg />} />
          <Skill label="TypeScript" svg={<TsSvg />} />
          <Skill label="Styled Components" />
        </S.SkillsColumn>
        <S.SkillsColumn>
          <h2>Testing</h2>
          <Skill label="Jest" svg={<JestSvg />} />
          <Skill label="Mocha" svg={<MochaSvg />} />
          <Skill label="React Testing Library" />
        </S.SkillsColumn>
        <S.SkillsColumn>
          <h2>Back-end</h2>
          <Skill label="Go" svg={<GoSvg />} />
          <Skill label="Node.js" svg={<NodeSvg />} />
        </S.SkillsColumn>
      </S.SkillsContainer>
      <S.Description>
        <p className="desc">{t("Skills.AdditionalSkills")} <b>Webpack</b>, <b>Eslint</b>, <b>Babel</b>, <b>Git</b>, <b>GitHub</b>, <b>Docker</b></p>
        <div>
          <p className="desc">{t("Skills.Language")} <b>B2</b></p>
          <p className="small-font">{t("Skills.LanguageInfo")}</p>
        </div>
      </S.Description>
    </SectionWrapper>
  )
}

export default Skills