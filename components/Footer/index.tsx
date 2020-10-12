import React from "react"
import * as S from './styles'
import {GitSvg, MobileSvg, MailSvg, LinkedInSvg} from "../SVG/svg";

const Footer = () => {
  return (
    <S.FooterStyle>
      <div className="icons">
        <a href="https://github.com/adboc" target="_blank" rel="noopener"><GitSvg/></a>
        <a href="https://www.linkedin.com/in/adrian-boczo%C5%84-206b671b8" target="_blank" rel="noopener"><LinkedInSvg/></a>
        <a href="mailto:adrianboczon98@gmail.com"><MailSvg/></a>
        <a href="tel:737-303-025"><MobileSvg/></a>
      </div>
      <p className="label">2020 Adrian Boczoń</p>
    </S.FooterStyle>
  )
}

export default Footer