import React from "react"
import { useTranslation } from "react-i18next"

import Project from "./Project"

import { SectionWrapper } from "../styles/SectionWrapper"
import { SectionTitle } from "../styles/SectionTitleWrapper"
import * as S from "./styles"

const Projects = () => {
  const { t } = useTranslation()
  return (
    <SectionWrapper>
      <SectionTitle>{t("Projects.Title")}</SectionTitle>
      <S.Description>{t("Projects.Description")}</S.Description>
      <S.ProjectsView>
        <Project
          id="1"
          title="D&D App"
          stack="React | GO | MongoDB"
          gitUrl="https://github.com/AdBoc/ScheduleMeeting"
          livePageUrl="https://moreoverandabove.com/"
        />
        <Project
          id="2"
          title="Book Backlog"
          gitUrl="https://github.com/AdBoc/BookBacklogManager"
          stack="React | Node | MongoDB"
        />
        <Project
          id="3"
          title="Song Generator"
          gitUrl="https://github.com/AdBoc/Song-Generator"
          stack="React | Node | MongoDB"
        />
        <Project
          id="4"
          title="Pharma App"
          gitUrl="https://github.com/AdBoc/PharmaWiki"
          stack="React | Node | MongoDB"
        />
        <Project
          id="5"
          title="To Do app"
          gitUrl="https://github.com/AdBoc/BackendNode"
          stack="Node | MongoDB"
        />
      </S.ProjectsView>
    </SectionWrapper>
  )
}

export default Projects
