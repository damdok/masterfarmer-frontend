import React from 'react'
import styled from 'styled-components'

import Nav from './components/Nav'
import bottom from '../../assets/img/bottom.png'

const Footer: React.FC = () => (
  <StyledFooter>
    <StyledFooterInner>
      <Nav />
    </StyledFooterInner>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  justify-content: center;
  background: url(${bottom}) no-repeat;
  height: 60px;
`
const StyledFooterInner = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;  
  max-width: ${props => props.theme.siteWidth}px;
  width: 100%;
`

export default Footer