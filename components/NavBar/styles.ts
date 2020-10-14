import styled from "styled-components"

const Header = styled.header<{ mode: string }>`
  background-color: var(--color-secondary);
  color: var(--color-secondary_font);
  width: 100%;
  height: 4em;
  box-shadow: ${props => props.mode === "dark" ? "0 10px 30px -10px rgba(2,12,27,0.7)" : "none"};
  
  .position-nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
  }
  .nav-item {
    text-decoration: none;
    color: inherit;
    display: inline;
    margin-right: 2em;
    padding: 0.1em;
    border-bottom: 1px solid;
    border-color: rgba(0, 0, 0, 0);
    transition: border-bottom 250ms;
  }
  .nav-item:hover {
    border-color: rgba(255, 255, 255, 1);
  }
`

const ThemeSwitcher = styled.div<{ visibility: string }>`
 visibility: ${props => props.visibility === undefined ? "hidden" : "visible"};
  display: inline-block;    
  margin-right: 2em;
  padding: 0.1em;
  .sun {
    position: relative;
    border-radius: 100%;
    width: 1.5rem;
    height: 1.5rem;
    background: linear-gradient(40deg, #FF0080, #FF8C00 70%);
    margin: 0 0 0 0;
  }
  .moon {
    position: absolute;
    border-radius: 100%;
    right: 0;
    width: 1.05rem;
    height: 1.05rem;
    background: var(--color-secondary);
    transform: scale(0);
    transform-origin: top right;
    transition: transform .6s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  .circle-color {
    background: linear-gradient(40deg, #8983F7, #A3DAFB 70%);
  }
  .moon-scale {
    transform: scale(1);
    background: var(--color-secondary);
  }
`

const LanguageButton = styled.button`
    color: inherit;
    background-color: inherit;
    margin-right: 2em;
    padding: 0.1em;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0);
    transition: border-bottom 250ms;
    cursor: pointer;
    min-width: 3.6em;
    
    &:hover {
      border-color: rgba(255, 255, 255, 1);
    }

    &:focus {
      outline: 0;
    }
`

export {
  Header,
  ThemeSwitcher,
  LanguageButton
}