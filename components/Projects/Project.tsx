import React from "react"
import styled from "styled-components"

import OpenLinkSVG from "../../static/assets/openLink.svg"
import GitSVG from "../../static/assets/git.svg"

const ProjectStyle = styled.div`
  flex: 0 0;

  font-family: "Calibri", "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  position: relative;
  min-width: 12.5em;
  min-height: 12.5em;
  margin: 0.75em;
  background-color: white;
  color: black;
  padding: 2em;
  
  -webkit-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.25);
  box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.25);
  
  a {
    display: block;
    padding: 0.5em;
  }
  
  .title {
    display: block;
    text-align: center;
    font-size: 1.25em;
    margin-bottom: 0.75em;
  }
  .description{
    opacity: 1;
    font-size: 0.8em;
    transition: opacity 0.5s ease;
  }
  .stack {
    text-align: center;
    font-size: 0.75em;
  }
 
  .hidden-links {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.5s ease;    
  }
  
  &:hover{
    .hidden-links {
      opacity: 1;
    }
    .description {
      opacity: 0;
    }
  }
 
 
  .link-svg-mobile, .git-svg-mobile {
    position: absolute;
    width: 20px;
    display: none;
    
    @media (pointer: coarse) {
      display: block;
    }
  }
  
  .link-svg-mobile {
    top: 1.5em;
    right: 3.8em;
  }
  .git-svg-mobile {
    top: 0.5em;
    right: 0.5em;
  }
`

interface Props {
  title: string;
  description: string;
  stack: string;
  gitUrl: string;
  livePageUrl?: string;
}
//sprawdz rerendere wpisuja tu console log i patrzac czy jak rodzic sie renderuje to to tez, uzyj use memo??
const Project: React.FC<Props> = ({ title , description, stack, gitUrl, livePageUrl = false}) => {
  return (
    <ProjectStyle>
      {livePageUrl && <a className="link-svg-mobile" href={`${livePageUrl}`} target="_blank" rel="noopener"><OpenLinkSVG /></a>}
      <a className="git-svg-mobile" href={`${gitUrl}`} target="_blank" rel="noopener"><GitSVG /></a>
      <div>
        <b className="title">{title}</b>
        <p className="description">{description}</p>
      </div>
      <p className="stack">{stack}</p>
      <div className="hidden-links">
        {livePageUrl && <a className="view-page" href={`${livePageUrl}`} target="_blank" rel="noopener">Odwiedź stronę</a>}
        <a className="repo-link" href={`${gitUrl}`} target="_blank" rel="noopener">Repozytorium</a>
      </div>
    </ProjectStyle>
  )
}

export default Project