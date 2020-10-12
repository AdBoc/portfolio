import styled from "styled-components"

const EducationWrapper = styled.div`
  width: fit-content;
  margin: 2.5em auto;
  .uni{
    font-size: 1.2em;
  }
  .date{ 
    font-size: 0.8em;
  }
  .class {
    font-size: 0.95em;    
  }
`

const Section = styled.section`
  max-width: 40em;
  margin: 2.5em auto;
`

export {
  Section,
  EducationWrapper
}