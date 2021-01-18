import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <FirstLink>
      <StyledLink exact activeClassName="active" to="/">
        Home
      </StyledLink>
      
      <StyledLink exact activeClassName="active" to="/farms">
        Farm
      </StyledLink> 
      </FirstLink>
      <SecondLink>     
      <StyledLink exact activeClassName="active" to="/decay">
       Global Decay
      </StyledLink>
      
      <StyledecolorAbsoluteLinkecolor
        href="https://app.uniswap.org/#/swap"
        target="_blank"
      >
        Buy CROPS
      </StyledecolorAbsoluteLinkecolor> 
      <StyledAbsoluteLink
        href="https://medium.com/@masteryieldfarmer"
        target="_blank"
      >
        About
      </StyledAbsoluteLink>
      </SecondLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  @media(max-width:860px){
    flex-direction: column;
  }
`

const FirstLink = styled.div`
  display:flex;
  flex:25%;
  @media(max-width:860px){
    flex:100%;
    margin-top:5px;
  }
`
const SecondLink = styled.div`
  display:flex;
  flex:75%;
  @media(max-width:860px){
    flex:100%;
    margin-top:5px;
  } 
`


const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  padding-top: ${(props) => props.theme.spacing[1]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledempLink = styled(NavLink)`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  border-radius: 15px;
  background: ${(props) => props.theme.color.grey[900]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  padding-bottom: ${(props) => props.theme.spacing[1]}px;  
  margin-top: ${(props) => props.theme.spacing[1]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
  
`

const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  padding-top: ${(props) => props.theme.spacing[1]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledecolorAbsoluteLinkecolor = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  border-radius: 15px;
  background: ${(props) => props.theme.color.grey[700]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  padding-bottom: ${(props) => props.theme.spacing[1]}px;
  padding-top: ${(props) => props.theme.spacing[1]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

export default Nav
