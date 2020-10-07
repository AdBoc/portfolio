import React from "react"
import styled from "styled-components"

import CssSVG from "../../static/assets/css.svg"
import HtmlSVG from "../../static/assets/html.svg"
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
import SectionTitle from "../SectionTitle"

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  
 .skill {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.3em;
  justify-content: center;
 }
 
 p {
   margin-left: 0.3em;
   min-width: 5em;
 }
`

const Skills = () => {
  return (
    <Section>
      <SectionTitle title="Umiejętności"/>
      <h2>Technologie</h2>
      <div>
        <SkillsList>
          <div className="skill">
            <HtmlSVG />
            <p>HTML</p>
          </div>
          <div className="skill">
            <CssSVG />
            <p>CSS</p>
          </div>
          <div className="skill">
            <JsSVG />
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <TsSVG />
            <p>TypeScript</p>
          </div>
          <div className="skill">
            <ReactSVG />
            <p>React</p>
          </div>
          <div className="skill">
            <ReduxSVG />
            <p>Redux</p>
          </div>
          <div className="skill">
            <SassSVG />
            <p>Sass</p>
          </div>
          <div className="skill">
            <p>Styled Components</p>
          </div>
        </SkillsList>
        <h2>Testy</h2>
        <SkillsList>
          <div className="skill">
            <p>React Testing Library</p>
          </div>
          <div className="skill">
            <MochaSVG />
            <p>Mocha</p>
          </div>
          <div className="skill">
            <JestSVG />
            <p>Jest</p>
          </div>
        </SkillsList>
      </div>
      <div>
        <h2>Technologie, które używałem, ale znam w stopniu bardziej podstawowym</h2>
        <SkillsList>
          <div className="skill">
            <NodeSVG />
            <p>Node.js</p>
          </div>
          <div className="skill">
            <GoSVG />
            <p>Go</p>
          </div>
          <div className="skill">
            <GatsbySVG />
            <p>Gatsby</p>
          </div>
        </SkillsList>
      </div>
      <p>Wiem czym są i jak korzystać z: webpack, eslint, babel, Git, GitHub</p>
      <div>
        <p>Język angielski: B2</p>
        <p>(Nie mam problemów z czytaniem dokumantacji)</p>
      </div>
    </Section>
  )
}

export default Skills