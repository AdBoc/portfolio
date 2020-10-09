import React from "react"

import styled from "styled-components"

import SectionTitle from "../styles/SectionTitle"

const EducationWrapper = styled.div`
  width: fit-content;
  margin: 2.5em auto;
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

const Section = styled.section`
  max-width: 40em;
  margin: 2.5em auto;
`

const Education = () => {
  return (
    <Section>
      <SectionTitle>
        <h1>Wykształcenie</h1>
      </SectionTitle>
      <EducationWrapper>
        <p className="uni">Akademia Górniczo Hutnicza</p>
        <p className="date">2017-obecnie</p>
        <p className="class">Kierunek: Informatyka Stosowana</p>
      </EducationWrapper>
    </Section>
  )
}

export default Education