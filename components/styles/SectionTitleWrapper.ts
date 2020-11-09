import styled from "styled-components"

export const SectionTitle = styled.h1`
  font-size: 1.25em;
  display: flex;
  &:before, &:after {
    color: #7c7c7c;
    content: "";
    border-bottom: 1px solid;
    margin: auto 0.25em;
  }
  &::before {
    flex: 1;
    //width: 25px;
  }
  &::after {
    flex: 1;
  }
`