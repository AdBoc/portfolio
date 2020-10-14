import styled from "styled-components"

const SkillsContainer = styled.div`
  background-color: var(--color-box);
  border: 1px solid var(--color-box_border);
  box-shadow: 0 5px 5px 0 var(--color-box_shadow), 0 0 0 1px var(--color-box_shadow2);
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  
  border-radius: 12px;
  
  @media (max-width: 600px) {
    flex-direction: column;
    max-width: 17.5em;
    margin: auto;
  }
`

const SkillsColumn = styled.div`
  border-right: 1px solid var(--color-box_border);
  flex-grow: 1;
  flex-basis: 0;
  padding: 0.75em;
  
  &:last-child {
    border-right: none;
  }
   
  @media (max-width: 600px) {
    border-right: none;
    border-bottom: 1px solid var(--color-box_border);
    &:last-child {
      border-bottom: none;
    }
  }
`

const Description = styled.div`
  text-align: center;
  margin-top: 1.5em;
  .desc {
     margin-top: 1em;
  }
  .small-font {
    font-size: 0.6em;
  }
`

const SkillStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.3em;
  justify-content: center;
  
 p {
   font-size: 0.85em;
   margin-left: 0.3em;
 }
`

export {
  SkillStyle,
  Description,
  SkillsColumn,
  SkillsContainer
}