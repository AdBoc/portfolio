import React from "react"

import AboutMe from "../../components/AboutMe"
import Education from "../../components/Education"
import Projects from "../../components/Projects"
import Skills from "../../components/Skills"
import Footer from "../../components/Footer"

import "../../static/normalize.css"
import styled from "styled-components"

const BreakLine = styled.div`
  margin: 10px 0;
  height: 0;
  border-image: linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,0.5),rgba(0,0,0,0)) 100% 0 0 0;
  border-style: solid;
  border-width: thin;
`

export default function Home() {
  return (
    <>
      <AboutMe />
      {/*<BreakLine />*/}
      <Education />
      {/*<BreakLine />*/}
      <Skills />
      {/*<BreakLine />*/}
      <Projects />
      <Footer />
    </>
  )
}