import React, { ReactNode } from "react"
import styled from "styled-components"

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

interface Props {
  label: string;
  svg?: ReactNode;
}

const Skill: React.FC<Props> = ({ label, svg }) => {
  return (
    <SkillStyle>
      {svg}
      <p>{label}</p>
    </SkillStyle>
  )
}

export default Skill