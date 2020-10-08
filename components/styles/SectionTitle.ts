import styled from "styled-components"

const SectionTitle = styled.div`
  h1 {
     font-size: 1.25em;
     display: flex;
  }
  h1:before, h1:after {
    color: #7c7c7c;
    content: "";
    border-bottom: 1px solid;
    margin: auto 0.25em;
  }
  h1::before {
      width: 25px;
  }
  h1::after {
      flex: 1;
  }
`

export default SectionTitle