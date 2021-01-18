import React from 'react'
import styled from 'styled-components'
import Layouttop from './topcomponents/Layout';
import GlobalStyles from '../../styles/global';
import WalletProviderModal from '../../components/WalletProviderModal'
import Page from '../../components/Page'
import Button from '../../components/Button'
import useModal from '../../hooks/useModal'
import { Switch } from 'react-router-dom'
import { useWallet } from 'use-wallet'

const Balances: React.FC = () => {
  const { account } = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)

  return (               
    <StyledbrWrapper>
      <Layouttop/>
      <GlobalStyles/>
    </StyledbrWrapper>    
  )
}

const StyledbrWrapper = styled.div`
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
  padding-top: 30px;
  margin-top: 10px;
`

export default Balances
