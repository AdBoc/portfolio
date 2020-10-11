import React, { useState } from "react"

import AboutMe from "../../components/AboutMe"
import Education from "../../components/Education"
import Projects from "../../components/Projects"
import Skills from "../../components/Skills"
import Footer from "../../components/Footer"
import Navbar from "../../components/NavBar/Navbar"

import { ThemeProvider } from "styled-components"
import { darkTheme, GlobalStyles, lightTheme } from "../../components/styles/themes"
import "../../static/normalize.css"

export default function Home() {
  const [theme, setTheme] = useState("light")
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar toggleTheme={themeToggler} theme={theme}/>
      <AboutMe />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </ThemeProvider>
  )
}