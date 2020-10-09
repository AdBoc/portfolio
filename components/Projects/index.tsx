import React from "react"
import Section from "../styles/Section"
import SectionTitle from "../styles/SectionTitle"
import styled from "styled-components"
import OpenLinkSVG from "../../static/assets/openLink.svg"
import GitSVG from "../../static/assets/git.svg"

const ProjectsView = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2.5em 0;
`

const Project = styled.div`
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
    top: 1em;
    right: 1em;
  }
  .git-svg-mobile {
    top: 2em;
    right: 4.5em;
  }
`

const Projects = () => {
  return (
    <Section>
      <SectionTitle>
        <h1 id="projekty">Projekty</h1>
      </SectionTitle>
      <p>Własne projekty, które tworzyłem podczas nauki wspomnianych powyżej technologii. Projekty ułożone chronologicznie, więc widać jak ewoluował
        mój sposób pisania kodu (od góry najnowsze)</p>
      <ProjectsView>
        <Project>
          <a className="link-svg-mobile" href="https://moreoverandabove.com/" target="_blank" rel="noopener"><OpenLinkSVG /></a>
          <a className="git-svg-mobile" href="https://github.com/AdBoc/ScheduleMeeting" target="_blank" rel="noopener"><GitSVG /></a>
          <div>
            <b className="title">D&D App</b>
            <p className="description">Web aplikacja do Dungeons and Dragons, działająca offline dzięki Service Workerom. Pozwala zaznaczać dni w
              kalendarzu i graficznie
              pokazywać część wspólną. Umożliwia również przeniesienie postaci i przechowywanie jej w bazie danych.</p>
          </div>
          <p className="stack">React | GO | MongoDB</p>
          <div className="hidden-links">
            <a className="view-page" href="https://moreoverandabove.com/" target="_blank" rel="noopener">Odwiedź stronę</a>
            <a className="repo-link" href="https://github.com/AdBoc/ScheduleMeeting" target="_blank" rel="noopener">Repozytorium</a>
          </div>
        </Project>
        <Project>
          <div>
            <b className="title">Book Backlog</b>
            <p className="description">Strona posiada rejestracje i logowanie(JWT Token). Można wysyłać pliki o formacie pdf, grupować je, sortować i
              oznaczać jako przeczytane. Strona nie jest skończona.</p>
          </div>
          <div className="hidden-links">
            <a className="repo-link" href="https://github.com/AdBoc/BookBacklogManager" target="_blank" rel="noopener">Repozytorium</a>
          </div>
          <p className="stack">React | Node | MongoDB</p>
        </Project>
        <Project>
          <div>
            <b className="title">Song Generator</b>
            <p className="description">Strona posiada rejestracje i logowanie(JWT Token). Każdy użytkownik może wygenerować piosenkę z własnymi
              słowami
              i
              ją odtworzyć lub pobrać.</p>
          </div>
          <div className="hidden-links">
            <a className="repo-link" href="https://github.com/AdBoc/Song-Generator" target="_blank" rel="noopener">Repozytorium</a>
          </div>
          <p className="stack">React | Node | MongoDB</p>
        </Project>
        <Project>
          <div>
            <b className="title">Pharma App</b>
            <p className="description">Strona będąca projektem na studia. System pozwalający na logowanie, dodawanie, usuwanie, edytowanie, sortowanie
              i filtrowanie zasobów.</p>
          </div>
          <div className="hidden-links">
            <a className="repo-link" href="https://github.com/AdBoc/PharmaWiki" target="_blank" rel="noopener">Repozytorium</a>
          </div>
          <p className="stack">React | Node | MongoDB</p>
        </Project>
        <Project>
          <div>
            <b className="title">To Do app</b>
            <p className="description">Pierwszy i najmniejszy projekt napisany przeze mnie w Javascript. Backend w Node.js, pozwala na prostą edycje,
              dodawanie i usuwanie
              zasobów.</p>
          </div>
          <div className="hidden-links">
            <a className="repo-link" href="https://github.com/AdBoc/BackendNode" target="_blank" rel="noopener">Repozytorium</a>
          </div>
          <p className="stack">Node | MongoDB</p>
        </Project>
      </ProjectsView>
    </Section>
  )
}

export default Projects