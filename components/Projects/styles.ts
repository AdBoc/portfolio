import styled from "styled-components"

const ProjectsView = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2.5em 0;
`
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
  background-color: var(--color-box);
  color: inherit;
  padding: 2em;
  
  -webkit-box-shadow: 0 0 3px 1px rgba(0,0,0,0.25);
  -moz-box-shadow: 0 0 3px 1px rgba(0,0,0,0.25);
  box-shadow: 0 0 3px 1px rgba(0,0,0,0.25);
  
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
 
  @media (pointer: coarse) {
    &:hover{
      .hidden-links {
        display: none;
      }
      .description {
        opacity: 1;
      }
    }
  }
    
  .view-page, .repo-link {
    color: var(--color-button_font);
    background-color: var(--color-button);
    border: 1px solid var(--color-button_border);
    padding: 0.5em;
    margin: 1em 0;
    border-radius: 6px;
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
    top: 1.55em;
    right: 3.7em;
  }
  .git-svg-mobile {
    top: 0.5em;
    right: 0.5em;
  }
`

const Description = styled.p`
  margin: 1em;
`

export {
  ProjectStyle,
  ProjectsView,
  Description
}