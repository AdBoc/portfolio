import React from "react"

import Project from "./Project"

import * as S from "./styles"
import { SectionWrapper } from "../styles/SectionWrapper"
import { SectionTitleWrapper } from "../styles/SectionTitleWrapper"

const Projects = () => {
  return (
    <SectionWrapper>
      <SectionTitleWrapper>
        <h1 id="projekty">Projekty</h1>
      </SectionTitleWrapper>
      <p>Własne projekty, które tworzyłem podczas nauki wspomnianych powyżej technologii. Projekty ułożone chronologicznie, więc widać jak ewoluował
        mój sposób pisania kodu (od góry najnowsze)</p>
      <S.ProjectsView>
        <Project
          title="D&D App"
          stack="React | GO | MongoDB"
          gitUrl="https://github.com/AdBoc/ScheduleMeeting"
          livePageUrl="https://moreoverandabove.com/"
          description="Web aplikacja do Dungeons and Dragons, działająca offline dzięki Service Workers. Pozwala zaznaczać dni w kalendarzu i graficznie pokazywać część wspólną. Umożliwia również przeniesienie postaci i przechowywanie jej w bazie danych."
        />
        <Project
          title="Book Backlog"
          description="Strona posiada rejestracje i logowanie(JWT Token). Można wysyłać pliki o formacie pdf, grupować je, sortować i oznaczać jako przeczytane. Strona nie jest skończona."
          gitUrl="https://github.com/AdBoc/BookBacklogManager"
          stack="React | Node | MongoDB"
        />
        <Project
          title="Song Generator"
          description="Strona posiada rejestracje i logowanie(JWT Token). Każdy użytkownik może wygenerować piosenkę z własnymi słowami, a następnie ją odtworzyć lub pobrać."
          gitUrl="https://github.com/AdBoc/Song-Generator"
          stack="React | Node | MongoDB"
        />
        <Project
          title="Pharma App"
          description="Strona będąca projektem na studia. System pozwalający na logowanie, dodawanie, usuwanie, edytowanie, sortowanie i filtrowanie zasobów."
          gitUrl="https://github.com/AdBoc/PharmaWiki"
          stack="React | Node | MongoDB"
        />
        <Project
          title="To Do app"
          description="Pierwszy i najmniejszy projekt napisany przeze mnie w Javascript. Backend w Node.js, pozwala na prostą edycje, dodawanie i usuwanie zasobów."
          gitUrl="https://github.com/AdBoc/BackendNode"
          stack="Node | MongoDB"
        />
      </S.ProjectsView>
    </SectionWrapper>
  )
}

export default Projects
