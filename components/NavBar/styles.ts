import styled from "styled-components"

const NavBar = styled.header<{ mode: string }>`
  background-color: var(--color-secondary);
  color: var(--color-secondary_font);
  width: 100%;
  height: 4em;
  box-shadow: ${props => props.mode === "dark" ? "0 10px 30px -10px rgba(2,12,27,0.7)" : "none"};
  
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Dropdown = styled.div`
    opacity: 0;
    transition: transform .3s cubic-bezier(0.88, 0, 0, 1), opacity .3s ease-in-out;
    transform: translateY(-7.5rem);
    position: absolute;
    font: inherit;
    width: 5em;
    left: 50%;
    margin: 0 0 0 -2.3em;
    text-align: center;
    
    z-index: 1;
    background: var(--color-secondary);
    
    a {
     padding: 0.5em 0;
     width: 100%;
     font-weight: 300;
     font-size: 1.2rem;
     display: block;
      &:hover{
        background: #454545;
      }
    }
`

const NavBarItem = styled.div`
    position: relative;
    text-decoration: none;
    color: inherit;
    display: inline;
    margin-right: 2em;
    padding: 0.1em;
    border-bottom: 1px solid;
    border-color: rgba(0, 0, 0, 0);
    transition: border-bottom 250ms; 
    
    .nav-item-label {
      cursor: pointer;
    }
    
    &:hover {
      border-color: rgba(255, 255, 255, 1);
      ${Dropdown} {
        opacity: 1;
        transform: translateY(0);
    }
  }
`

const ThemeSwitcher = styled.div<{ visibility: string }>`
 visibility: ${props => props.visibility === undefined ? "hidden" : "visible"};
  display: inline-block;    
  margin-right: 2em;
  padding: 0.1em;
  cursor: pointer;
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
  NavBar,
  NavBarItem,
  Dropdown,
  ThemeSwitcher,
  LanguageButton
}