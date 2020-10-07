import React from "react"

import Section from "../styles/Section"

import styled from "styled-components"
import SectionTitle from "../SectionTitle"

const EducationWrapper = styled.div`
  .uni{
    font-size: 1.2em;
  }
  .date{ 
    font-size: 0.8em;
  }
  .class {
    font-size: 0.95em;    
  }
`

const Education = () => {
  return (
    <Section>
      <SectionTitle title="Wykształcenie" />
      <EducationWrapper>
        <p className="uni">Akademia Górniczo Hutnicza</p>
        <p className="date">2017-obecnie</p>
        <p className="class">Kierunek: Informatyka Stosowana</p>
      </EducationWrapper>
    </Section>
  )
}

export default Education