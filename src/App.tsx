import React, { useCallback, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { UseWalletProvider } from 'use-wallet'

//import FarmsProvider from './contexts/Farms'
import ModalsProvider from './contexts/Modals'
import TransactionProvider from './contexts/Transactions'
import CropsProvider from './contexts/CropsProvider'
import FarmsProvider from './contexts/Farms'
import theme from './theme'

import DisclaimerModal from './components/DisclaimerModal'
import MobileMenu from './components/MobileMenu'
import TopBar from './components/TopBar'
import TopTitleBar from './components/TopTitleBar'
import useModal from './hooks/useModal'
import Home from './views/Home'
import Farm from './views/Farm'
import Decay from './views/Decay'

const App: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const handleDismissMobileMenu = useCallback(() => {
    setMobileMenu(false)
  }, [setMobileMenu])

  const handlePresentMobileMenu = useCallback(() => {
    setMobileMenu(true)
  }, [setMobileMenu])

  return (
    
    <Providers>
      <Router>
        <TopTitleBar onPresentMobileMenu={handlePresentMobileMenu} />
        <TopBar onPresentMobileMenu={handlePresentMobileMenu} />
        <MobileMenu onDismiss={handleDismissMobileMenu} visible={mobileMenu} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/farms">
            <Farm />
          </Route>
          <Route path="/decay">
            <Decay />
          </Route>
        </Switch>
      </Router>
      <Disclaimer />
    </Providers>
  )
}

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <UseWalletProvider
        chainId={3}
        //connectors={{
        //  walletconnect: { rpcUrl: 'https://mainnet.infura.io/v3/8f3443d966884c7288b940947b5c37c1' },
        //}}
        connectors={{
          walletconnect: { rpcUrl: 'https://ropsten.infura.io/v3/8f3443d966884c7288b940947b5c37c1' },
        }}
        //connectors={{
        //  walletconnect: { rpcUrl: 'https://kovan.infura.io/v3/8f3443d966884c7288b940947b5c37c1' },         
        //}}
      >
        <CropsProvider>
          <TransactionProvider>
            <FarmsProvider>
              <ModalsProvider>{children}</ModalsProvider>
            </FarmsProvider>
          </TransactionProvider>
        </CropsProvider>
      </UseWalletProvider>
    </ThemeProvider>
  )
}

const Disclaimer: React.FC = () => {
  const markSeen = useCallback(() => {
    localStorage.setItem('disclaimer', 'seen')
  }, [])

  const [onPresentDisclaimerModal] = useModal(
    <DisclaimerModal onConfirm={markSeen} />,
  )

  useEffect(() => {
    const seenDisclaimer = true // localStorage.getItem('disclaimer')
    if (!seenDisclaimer) {
      onPresentDisclaimerModal()
    }
  }, [])

  return <div />
}

export default App;
