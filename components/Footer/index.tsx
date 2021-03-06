import React from "react"
import {GitSvg, MobileSvg, MailSvg, LinkedInSvg} from "../SVG/svg";
import * as S from './styles'

const Footer = () => {
  return (
    <S.FooterStyle>
      <div className="icons">
        <a href="https://github.com/adboc" aria-label="Git Link" target="_blank" rel="noopener noreferrer"><GitSvg/></a>
        <a href="https://www.linkedin.com/in/adrian-boczo%C5%84-206b671b8" aria-label="LinkedIn link" target="_blank" rel="noopener"><LinkedInSvg/></a>
        <a href="mailto:adrianboczon98@gmail.com" aria-label="Send email message"><MailSvg/></a>
        <a href="tel:737-303-025" aria-label="Call number" ><MobileSvg/></a>
      </div>
      <p className="label">2020 Adrian Boczoń</p>
    </S.FooterStyle>
  )
}

export default Footer