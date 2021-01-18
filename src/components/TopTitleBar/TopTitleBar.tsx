import React from 'react'
import styled from 'styled-components'

import Container from '../Container'
import Spacer from '../../components/Spacer'
import head from '../../assets/img/head.png'
import toptitle from '../../assets/img/toptitle.png'

interface TopTitleBarProps {
  onPresentMobileMenu: () => void
}

const TopTitleBar: React.FC<TopTitleBarProps> = ({ onPresentMobileMenu }) => {
  return (
    <StyledTopBar>
      <Container size="lg">
        <StyledNavWrapper>
          <img src={head} height="40" style={{ marginTop: 0 }} />
          <Spacer/>
          <img src={toptitle} height="40" style={{ marginTop: 0 }} />
        </StyledNavWrapper>
      </Container>
    </StyledTopBar>
  )
}


const StyledTopBar = styled.div`
  background: #b9f3f2;
`

const StyledNavWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding-top:15px;
  padding-bottom:5px;
  @media (max-width: 400px) {
    display: none;
  }
`

export default TopTitleBar
