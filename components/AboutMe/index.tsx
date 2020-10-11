import React from "react"

import SectionTitle from "../styles/SectionTitle"

import styled from "styled-components"

const Section = styled.section`
  max-width: 40em;
  margin: 2.5em auto;
  p {
    margin: 2em 3em 0 3em;
  }
`

const AboutMe = () => {
  return (
    <Section>
      <SectionTitle>
        <h1>O mnie</h1>
      </SectionTitle>
      <p>Witaj! Nazywam sie Adrian, jestem studentem czwartego roku Informatyki Stosowanej na AGH. Chciałbym pracować jako Front-End/Full
        Stack Developer.</p>
    </Section>
  )
}

export default AboutMe