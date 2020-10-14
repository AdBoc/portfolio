import styled from "styled-components"

export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  background-color: var(--color-secondary);
  border-top: 1px solid var(--color-box_border);
  color: var(--color-secondary_font);
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
    color: var(--color-footer_label);
    font-size: 0.85em;
    align-self: flex-end;
  }
`
