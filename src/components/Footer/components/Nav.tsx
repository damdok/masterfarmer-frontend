import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <FirstLink> 
        <StyledLink
          href="https://t.me/MasterYieldFarmer"
          target="_blank"
        >
          Telegram
        </StyledLink>      
        <StyledLink
          href="https://github.com/MasterYieldFarmer"
          target="_blank"
        >
          Github
        </StyledLink>
      </FirstLink>
      <SecondLink>
        <StyledLink
          href="https://twitter.com/MasterYieldFarm"
          target="_blank"
        >
          Twitter
        </StyledLink>
        <StyledLink
          href="http://masterfarmer.io/Updated%20Master%20Farmer%20Whitepaper.pdf"
          target="_blank"
        >
          Whitepaper
        </StyledLink>
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
  flex:50%;
  @media(max-width:860px){
    flex:100%;
    margin-top:5px;
  }
`
const SecondLink = styled.div`
  display:flex;
  flex:50%;
  @media(max-width:860px){
    flex:100%;
    margin-top:5px;
  } 
`

const StyledLink = styled.a`  
  color: #fff;
  font-weight: 600;
  font-size: 17px;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`


export default Nav
