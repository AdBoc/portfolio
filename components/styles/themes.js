import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  mainColor: "rgb(246, 247, 248)",
  secondaryColor: "#2C2C2C",
  fontColor: "#000000",
  secondaryFontColor: "#DFDFDF",
  boxColor: "#fff",
  boxBorder: "#b7b7b7",
  boxShadow: "rgba(233,240,243,0.5)",
  boxShadow2: "#E6ECF8",
  buttonColor: "#8d8d8d",
  buttonBorder: "#8d8d8d",
  buttonFont: "#fff"
}

export const darkTheme = {
  mainColor: "#0a192f",
  secondaryColor: "#0a192f",
  fontColor: "#ccd6f6",
  secondaryFontColor: "#ccd6f6",
  boxColor: "#172a45",
  boxBorder: "#2a3554",
  boxShadow: "#0f0f29",
  boxShadow2: "#1b1b3e",
  buttonColor: "#172a45",
  buttonBorder: "#64ffda",
  buttonFont: "#64ffda"
}

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.fontColor};
  }  
`