import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-main: rgb(246, 247, 248);
    --color-secondary: #2C2C2C;
    --color-font: #000000;
    --color-secondary_font: #DFDFDF;
    --color-box: #fff;
    --color-box_border: #b7b7b7;
    --color-box_shadow: rgba(233,240,243,0.5);
    --color-box_shadow2: #E6ECF8;
    --color-button: #8d8d8d;
    --color-button_border: #8d8d8d;
    --color-button_font: #fff;
    --color-footer_label: #909090;
  }

  html.dark {
    --color-main: #0a192f;
    --color-secondary: #0a192f;
    --color-font: #ccd6f6;
    --color-secondary_font: #ccd6f6;
    --color-box: #172a45;
    --color-box_border: #2a3554;
    --color-box_shadow: #0f0f29;
    --color-box_shadow2: #1b1b3e;
    --color-button: #172a45;
    --color-button_border: #64ffda;
    --color-button_font: #64ffda;
    --color-footer_label: #8892b0;
  }
  
  html {
    background-color: var(--color-main);
    color: var(--color-font);
  }
`