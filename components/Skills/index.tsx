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
import SectionTitle from "../styles/SectionTitle"

const SkillsColumn = styled.div`
  border-right: 1px solid #b7b7b7;
  flex-grow: 1;
  flex-basis: 0;
  padding: 0.75em;
  
  &:last-child {
    border-right: none;
  }
  
 .skill {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.3em;
  justify-content: center;
 }
 
 p {
   font-size: 0.85em;
   margin-left: 0.3em;
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
          <div className="skill">
            <CssSVG />
            <p>CSS</p>
          </div>
          <div className="skill">
            <SassSVG />
            <p>Sass</p>
          </div>
          <div className="skill">
            <HtmlSVG />
            <p>HTML</p>
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
            <GatsbySVG />
            <p>Gatsby</p>
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
            <p>Styled Components</p>
          </div>
        </SkillsColumn>
        <SkillsColumn>
          <h2>Testy</h2>
          <div className="skill">
            <JestSVG />
            <p>Jest</p>
          </div>
          <div className="skill">
            <MochaSVG />
            <p>Mocha</p>
          </div>
          <div className="skill">
            <p>React Testing Library</p>
          </div>
        </SkillsColumn>
        <SkillsColumn>
          <h2>Back-end</h2>
          <div className="skill">
            <GoSVG />
            <p>Go</p>
          </div>
          <div className="skill">
            <NodeSVG />
            <p>Node.js</p>
          </div>
        </SkillsColumn>
      </SkillsContainer>
      <Description>
        <p className="desc">Wiem czym są i jak korzystać z: <b>Webpack</b>, <b>Eslint</b>, <b>Babel</b>, <b>Git</b>, <b>GitHub</b></p>
        <div>
          <p className="desc">Język angielski: <b>B2</b></p>
          <p className="small-font">(Nie mam problemów z czytaniem dokumantacji)</p>
        </div>
      </Description>
    </Section>
  )
}

export default Skills