import React from "react"
import { Helmet } from "gatsby-plugin-react-i18next"
import styled from "styled-components"
import "../../static/normalize.css"

const Error = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 2em;
  
  .home-btn {
    display: block;
    background-color: black;
    color: white;
    padding: 0.5em;
    margin: 1em auto;
    border-radius: 6px;
  }
  
  .http404 {
    font-size: 4em;
  }
`

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>AdBoc Portfolio</title>
        <link rel="icon" type="image/png" href="/portfolio/favicon.ico" sizes="16x16" />
        <meta name="description" content="Web Dev Portfolio Website" />
        <meta name="author" content="Adrian Boczoń" />
      </Helmet>
      <Error>
        <p className="http404">404</p>
        <p>Page not Found</p>
        <button className="home-btn"><a href="https://adboc.github.io/portfolio/" aria-label="Go back to home">Back Home</a></button>
      </Error>
    </>
  )
}

export default ErrorPage