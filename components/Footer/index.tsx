import React from "react"
import styled from "styled-components"

import GitSVG from "../../static/assets/github.svg"
import LinkedSVG from "../../static/assets/linkedin.svg"
import MailSVG from "../../static/assets/mail.svg"
import MobileSVG from "../../static/assets/phone.svg"

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  background-color: ${(props) => props.theme.secondaryColor};
  border-top: 1px solid ${(props) => props.theme.boxBorder};
  color: ${(props) => props.theme.secondaryFontColor};
  height: 8em;

  .icons {
    display: flex;
    width: 12.5em;
    justify-content: space-evenly;
    margin: 0.9em auto;
  }
  
  .phone-number {
     display: inline;
     position: absolute;
     margin: 0.15em 0 0 18em;
     font-size: 0.8em;
     cursor: pointer;
  }

  .label {
    display: block;
    margin: 0 auto;
    color: #909090;//8892b0
    font-size: 0.85em;
    align-self: flex-end;
  }
`

const Footer = () => {
  return (
    <FooterStyle>
      <div className="icons">
        <a href="https://github.com/adboc" target="_blank" rel="noopener"><GitSVG /></a>
        <a href="https://www.linkedin.com/in/adrian-boczo%C5%84-206b671b8" target="_blank" rel="noopener"><LinkedSVG /></a>
        <a href="mailto:adrianboczon98@gmail.com"><MailSVG /></a>
        <a href="tel:737-303-025"><MobileSVG/></a>
      </div>
      <p className="label">2020 Adrian Boczoń</p>
    </FooterStyle>
  )
}

export default Footer