import React from "react"
import styled from "styled-components"

const Header = styled.header`
  background-color: black;
  width: 100%;
  height: 9em;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 60px));
  color: white;
  
  .testing-hard {
    float: right;
    margin: 1.25em 0;
  }
  .nav-item {
    text-decoration: none;
    color: inherit;
    display: inline;
    margin-right: 2em;
    padding: 0.1em;
    border-bottom: 1px solid;
    border-color: rgba(0, 0, 0, 0);
    transition: border-bottom 250ms;
  }
  .nav-item:hover {
    border-color: rgba(255, 255, 255, 1);
  }
`

const Navbar = () => {
  return (
    <Header>
      <div className="testing-hard">
        <a className="nav-item" href="#projekty">Projekty</a>
        <a className="nav-item" href="https://github.com/adboc" target="_blank" rel="noopener">Github</a>
        <p className="nav-item">CV</p>
      </div>
    </Header>
  )
}

export default Navbar