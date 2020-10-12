import React from "react"
import Skill from "./Skill"

import * as S from "./styles"
import { CssSvg, GatsbySvg, GoSvg, JestSvg, JsSvg, MochaSvg, NodeSvg, ReactSvg, ReduxSvg, SassSvg, TsSvg } from "../SVG/svg"
import { SectionWrapper } from "../styles/SectionWrapper"
import { SectionTitleWrapper } from "../styles/SectionTitleWrapper"

const Skills = () => {
  return (
    <SectionWrapper>
      <SectionTitleWrapper>
        <h1>Umiejętności</h1>
      </SectionTitleWrapper>
      <S.SkillsContainer>
        <S.SkillsColumn>
          <h2>Front-end</h2>
          <Skill label="CSS" svg={<CssSvg />} />
          <Skill label="HTML" svg={<SassSvg />} />
          <Skill label="React" svg={<ReactSvg />} />
          <Skill label="Redux" svg={<ReduxSvg />} />
          <Skill label="Gatsby" svg={<GatsbySvg />} />
          <Skill label="Javascript" svg={<JsSvg />} />
          <Skill label="Typescript" svg={<TsSvg />} />
          <Skill label="Styled Components" />
        </S.SkillsColumn>
        <S.SkillsColumn>
          <h2>Testy</h2>
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
        <p className="desc">Wiem czym są i jak korzystać z: <b>Webpack</b>, <b>Eslint</b>, <b>Babel</b>, <b>Git</b>, <b>GitHub</b>, <b>Docker</b></p>
        <div>
          <p className="desc">Język angielski: <b>B2</b></p>
          <p className="small-font">(Nie mam problemów z czytaniem dokumentacji)</p>
        </div>
      </S.Description>
    </SectionWrapper>
  )
}

export default Skills