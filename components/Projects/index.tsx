import React from "react"
import Section from "../styles/Section"
import SectionTitle from "../styles/SectionTitle"
import styled from "styled-components"


const ProjectsView = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const Project = styled.div`
  flex: 0 0;

  font-family: "Calibri";
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  position: relative;
  min-width: 12.5em;
  min-height: 12.5em;
  margin: 1em;
  background-color: #eeeeee;
  color: black;
  padding: 2em;
  
  -webkit-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.75);
  
  .title {
    text-align: center;
    font-size: 1.25em;
    margin-bottom: 0.75em;
  }
  .description{
    font-size: 0.8em;
  }
  .stack {
    font-size: 0.75em;
  }
`

const Projects = () => {
  return (
    <Section>
        <SectionTitle>
          <h1>Projekty</h1>
        </SectionTitle>
        <p>Własne projekty, które tworzyłem podczas nauki wspomnianych powyżej technologii.</p>
      <ProjectsView>
        <Project>
          <div>
            <p className="title">D&D App</p>
            <p className="description">Web aplikacja do Dungeons and Dragons, działająca offline dzięki Service Workerom. Pozwala zaznaczać dni w
              kalendarzu i graficznie
              pokazywać część wspólną. Umożliwia również przeniesienie postaci i przechowywanie jej w bazie danych.</p>
          </div>
          <p className="stack">React | GO | MongoDB</p>
        </Project>
        <Project>
          <div>
            <p className="title">Song Generator</p>
            <p className="description">Strona posiada rejestracje i logowanie(JWT Token). Każdy użytkownik może wygenerować piosenkę z własnymi
              słowami
              i
              ją odtworzyć lub pobrać.</p>
          </div>
          <p className="stack">React | Node | MongoDB</p>
        </Project>
        <Project>
          <div>
            <p className="title">Book Backlog</p>
            <p className="description">Strona posiada rejestracje i logowanie(JWT Token). Można wysyłać pliki o formacie pdf, grupować je, sortować i
              oznaczać jako przeczytane. Strona nie jest skończona.</p>
          </div>
          <p className="stack">React | Node | MongoDB</p>
        </Project>
        <Project>
          <div>
            <p className="title">Pharma App</p>
            <p className="description">Strona będąca projektem na studia.</p>
          </div>
          <p className="stack">React | Node | MongoDB</p>
        </Project>
        <Project>
          <div>
            <p className="title">To Do app</p>
            <p className="description">Pierwszy i najmniejszy projekt napisany przeze mnie w Javascript. Backend w Node.js, pozwala na prostą edycje,
              dodawanie i usuwanie
              zasobów.</p>
          </div>
          <p className="stack">Node | MongoDB</p>
        </Project>
      </ProjectsView>
    </Section>
  )
}

export default Projects