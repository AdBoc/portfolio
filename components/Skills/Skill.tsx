import React, { ReactNode } from "react"
import * as S from './styles'
interface Props {
  label: string;
  svg?: ReactNode;
}

const Skill: React.FC<Props> = ({ label, svg }) => {
  return (
    <S.SkillStyle>
      {svg}
      <p>{label}</p>
    </S.SkillStyle>
  )
}

export default Skill