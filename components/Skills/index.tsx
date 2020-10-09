import React from "react"
import styled from "styled-components"

import CssSVG from "../../static/assets/css.svg"
import JsSVG from "../../static/assets/javascript.svg"
import ReactSVG from "../../static/assets/reactLogo.svg"
import ReduxSVG from "../../static/assets/redux.svg"
import SassSVG from "../../static/assets/sass.svg"
import TsSVG from "../../static/assets/typescript.svg"

import MochaSVG from "../../static/assets/mocha.svg"
import JestSVG from "../../static/assets/jest.svg"

import NodeSVG from "../../static/assets/nodejs.svg"
import GatsbySVG from "../../static/assets/gatsby.svg"
import GoSVG from "../../static/assets/go.svg"

import Section from "../styles/Section"
import SectionTitle from "../styles/SectionTitle"
import Skill from "./Skill"

const SkillsColumn = styled.div`
  border-right: 1px solid #b7b7b7;
  flex-grow: 1;
  flex-basis: 0;
  padding: 0.75em;
  
  &:last-child {
    border-right: none;
  }
   
  @media (max-width: 600px) {
    border-right: none;
    border-bottom: 1px solid #b7b7b7;
    &:last-child {
      border-bottom: none;
    }
  }
`

const SkillsContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
  
  border: 1px solid #b7b7b7;
  border-radius: 12px;
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8;
  
  @media (max-width: 600px) {
    flex-direction: column;
    max-width: 17.5em;
    margin: auto;
  }
`

const Description = styled.div`
  text-align: center;
  margin-top: 1.5em;
  .desc {
     margin-top: 1em;
  }
  .small-font {
    font-size: 0.6em;
  }
`

const Skills = () => {
  return (
    <Section>
      <SectionTitle>
        <h1>Umiejętności</h1>
      </SectionTitle>
      <SkillsContainer>
        <SkillsColumn>
          <h2>Front-end</h2>
          <Skill label="CSS" svg={<CssSVG />} />
          <Skill label="HTML" svg={<SassSVG />} />
          <Skill label="React" svg={<ReactSVG />} />
          <Skill label="Redux" svg={<ReduxSVG />} />
          <Skill label="Gatsby" svg={<GatsbySVG />} />
          <Skill label="Javascript" svg={<JsSVG />} />
          <Skill label="Typescript" svg={<TsSVG />} />
          <Skill label="Styled Components" />
        </SkillsColumn>
        <SkillsColumn>
          <h2>Testy</h2>
          <Skill label="Jest" svg={<JestSVG />} />
          <Skill label="Mocha" svg={<MochaSVG />} />
          <Skill label="React Testing Library" />
        </SkillsColumn>
        <SkillsColumn>
          <h2>Back-end</h2>
          <Skill label="Go" svg={<GoSVG />} />
          <Skill label="Node.js" svg={<NodeSVG />} />
        </SkillsColumn>
      </SkillsContainer>
      <Description>
        <p className="desc">Wiem czym są i jak korzystać z: <b>Webpack</b>, <b>Eslint</b>, <b>Babel</b>, <b>Git</b>, <b>GitHub</b></p>
        <div>
          <p className="desc">Język angielski: <b>B2</b></p>
          <p className="small-font">(Nie mam problemów z czytaniem dokumentacji)</p>
        </div>
      </Description>
    </Section>
  )
}

export default Skills