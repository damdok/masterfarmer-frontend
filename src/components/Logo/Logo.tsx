import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import chef from '../../assets/img/head.png'
import title1 from '../../assets/img/title1.png'

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <img src={chef} height="34" style={{ marginTop: -4 }} />
      <StyledText>
        Master Farmer
      </StyledText>       
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0;
  min-height: 44px;
  min-width: 44px;
  font-family: 'Arial-Rounded', sans-serif;
  padding: 0;
  text-decoration: none;
`

const StyledText = styled.span`
  color: #5b3926;
  font-family: 'Arial-Rounded', sans-serif;
  font-size: 25px;
  font-weight: 700;
  letter-spacing: 0.03em;
  margin-left: ${(props) => props.theme.spacing[2]}px;
  @media (max-width: 400px) {
    display: none;
  }
`

const MasterChefText = styled.span`
  font-family: 'Arial-Rounded', sans-serif;
`

export default Logo
