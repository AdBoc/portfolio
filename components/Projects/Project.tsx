import React, { useContext } from "react"

import * as S from "./styles"
import { GitBranchSvg, OpenLinkSvg } from "../SVG/svg"
import { themeContext } from "../context/Theme"
import { useTranslation } from "react-i18next"

interface Props {
  title: string;
  stack: string;
  gitUrl: string;
  livePageUrl?: string;
  id: string;
}

const Project: React.FC<Props> = ({ title, stack, gitUrl, livePageUrl = false, id }) => {
  const { theme } = useContext(themeContext)
  const { t } = useTranslation()
  return (
    <S.ProjectStyle>
      {livePageUrl && <a className="link-svg-mobile" href={`${livePageUrl}`} aria-label="Go to current project website" target="_blank"
                         rel="noopener noreferrer"><OpenLinkSvg
        iconColor={theme === "light" ? "black" : "white"} /></a>}
      <a className="git-svg-mobile" href={`${gitUrl}`} aria-label="Show Git Repository" target="_blank" rel="noopener noreferrer"><GitBranchSvg
        iconColor={theme === "light" ? "black" : "white"} /></a>
      <div>
        <b className="title">{title}</b>
        <p className="description">{t(`Projects.${id}`)}</p>
      </div>
      <p className="stack">{stack}</p>
      <div className="hidden-links">
        {livePageUrl && <a className="view-page" href={`${livePageUrl}`} aria-label="Go to current project website" target="_blank"
                           rel="noopener noreferrer">{t("Projects.ShowWebsite")}</a>}
        <a className="repo-link" href={`${gitUrl}`} aria-label="Show Git Repository" target="_blank"
           rel="noopener noreferrer">{t("Projects.Repository")}</a>
      </div>
    </S.ProjectStyle>
  )
}

export default React.memo(Project)