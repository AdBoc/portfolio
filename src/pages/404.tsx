import React from "react"
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
    <Error>
      <p className="http404">404</p>
      <p>Page not Found</p>
      <button className="home-btn"><a href="https://adboc.github.io/portfolio/">Back Home</a></button>
    </Error>
  )
}

export default ErrorPage