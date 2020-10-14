import React from "react"
import ThemeContextProvider from "../../components/context/Theme"

import AboutMe from "../../components/AboutMe"
import Education from "../../components/Education"
import Projects from "../../components/Projects"
import Skills from "../../components/Skills"
import Footer from "../../components/Footer"
import Navbar from "../../components/NavBar/Navbar"

import { I18nextProvider } from "react-i18next"
import i18next from "../../components/Internationalization/i18n"
import "../../static/normalize.css"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <>
    <Helmet htmlAttributes={{"lang": "pl"}}>
        <title>AdBoc Portfolio</title>
        <meta name="description" content="Web Dev Portfolio Website" />
        <meta name="author" content="Adrian Boczoń" />
        <link rel="preload" href="/fonts/fonts.css" as="style" />
      </Helmet>
      <ThemeContextProvider>
        <I18nextProvider i18n={i18next}>
          <Navbar />
          <AboutMe />
          <Education />
          <Skills />
          <Projects />
          <Footer />
        </I18nextProvider>
      </ThemeContextProvider>
    </>
  )
}