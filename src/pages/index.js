import React from "react"

import AboutMe from "../../components/AboutMe"
import Education from "../../components/Education"
import Projects from "../../components/Projects"
import Skills from "../../components/Skills"
import Footer from "../../components/Footer"

import "../../static/normalize.css"

import styled from "styled-components"

const Header = styled.header`
  background-color: black;
  width: 100%;
  height: 12.5em;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 60px));
  color: white;
  
  .testing-hard {
    float: right;
    margin: 1.25em 0;
  }
  .nav-item {
    display: inline;
    margin-right: 2em;
  }
`

export default function Home() {
  return (
    <>
      <Header>
        <div className="testing-hard">
          <p className="nav-item">Projekty</p>
          <p className="nav-item">CV</p>
        </div>
      </Header>
      <AboutMe />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}