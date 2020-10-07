import React from "react"
import styled from "styled-components"

const TitleWrapper = styled.div`
  .title{
     font-size: 1.25em;
     display: flex;
  }
  .title:before, .title:after {
    color: #7c7c7c;
    content: "";
    border-bottom: 1px solid;
    margin: auto 0.25em;
  }
  .title::before {
      width: 25px;
  }
  .title::after {
      flex: 1;
  }
`

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <TitleWrapper>
      <h1 className="title">{title}</h1>
      <div className="hr" />
    </TitleWrapper>
  )
}

export default SectionTitle