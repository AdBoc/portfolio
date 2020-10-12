import React from "react"
import ThemeContextProvider from "../../components/context/Theme"

import AboutMe from "../../components/AboutMe"
import Education from "../../components/Education"
import Projects from "../../components/Projects"
import Skills from "../../components/Skills"
import Footer from "../../components/Footer"
import Navbar from "../../components/NavBar/Navbar"

import "../../static/normalize.css"

export default function Home() {
  return (
    <ThemeContextProvider>
      <Navbar />
      <AboutMe />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </ThemeContextProvider>
  )
}