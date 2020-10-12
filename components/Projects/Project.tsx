import React, { useContext } from "react"

import * as S from "./styles"
import { GitBranchSvg, OpenLinkSvg } from "../SVG/svg"
import { themeContext } from "../context/Theme"

interface Props {
  title: string;
  description: string;
  stack: string;
  gitUrl: string;
  livePageUrl?: string;
}

const Project: React.FC<Props> = ({ title, description, stack, gitUrl, livePageUrl = false }) => {
  const {theme} = useContext(themeContext);
  return (
    <S.ProjectStyle>
      {livePageUrl && <a className="link-svg-mobile" href={`${livePageUrl}`} target="_blank" rel="noopener"><OpenLinkSvg iconColor={theme === "light" ? "black" : "white"}/></a>}
      <a className="git-svg-mobile" href={`${gitUrl}`} target="_blank" rel="noopener"><GitBranchSvg iconColor={theme === "light" ? "black" : "white"}/></a>
      <div>
        <b className="title">{title}</b>
        <p className="description">{description}</p>
      </div>
      <p className="stack">{stack}</p>
      <div className="hidden-links">
        {livePageUrl && <a className="view-page" href={`${livePageUrl}`} target="_blank" rel="noopener">Odwiedź stronę</a>}
        <a className="repo-link" href={`${gitUrl}`} target="_blank" rel="noopener">Repozytorium</a>
      </div>
    </S.ProjectStyle>
  )
}

export default React.memo(Project)