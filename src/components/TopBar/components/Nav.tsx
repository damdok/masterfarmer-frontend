import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import useModal from '../../../hooks/useModal'
import useBuyCrops from '../../../hooks/useBuyCrops'
import BuyCropsModal from './BuyCropsModal'

const Nav: React.FC = () => {

  const { onBuyCrops } = useBuyCrops()

  const [onBuyCropsWithETH] = useModal(
    <BuyCropsModal
      onConfirm={onBuyCrops}
    />,
  )

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
      <StyledAbsoluteLink
        href="https://app.uniswap.org/#/swap?inputCurrency=0x9766d2e3f04ae13e8c2eb018ea51dc640d3f9f1f&outputCurrency=ETH"
        target="_blank"
      >      
        Buy CROPS
      </StyledAbsoluteLink> 
      <StyledAbsoluteLink
        href="https://masterfarmer.medium.com/"
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
  color: #fff;
  font-weight: 600;
  font-size: 17px;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  padding-top: ${(props) => props.theme.spacing[1]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: #e9f602;
  }
  @media (max-width: 400px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledAbsoluteLink = styled.a`
  color: #fff;
  font-weight: 600;
  font-size: 17px;
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

export default Nav
