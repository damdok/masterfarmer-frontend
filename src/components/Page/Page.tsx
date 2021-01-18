import React from 'react'
import styled from 'styled-components'
import Footer from '../Footer'
import Background from '../../assets/img/background.png'

const Page: React.FC = ({ children }) => (
  <StyledPage>
    <StyledMain>{children}</StyledMain>
    <Footer />
  </StyledPage>
)

const StyledPage = styled.div``

const StyledMain = styled.div`
  background: url(${Background}) no-repeat;
  align-items: center;
  align-content: stretch;
  display: flex;
  background-size:cover;
  background-position: center center;
  flex-direction: column;
  min-height: calc(106vh - ${(props) => props.theme.topBarSize * 2}px);  
`

export default Page
