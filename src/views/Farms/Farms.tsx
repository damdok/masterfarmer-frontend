import React from 'react'
import { Switch, useRouteMatch } from 'react-router-dom'
import { useWallet } from 'use-wallet'
import chef from '../../assets/img/chef.png'
import Button from '../../components/Button'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import WalletProviderModal from '../../components/WalletProviderModal'
import useModal from '../../hooks/useModal'
import Layout from './components/Layout';
import GlobalStyles from '../../styles/global';


const Farms: React.FC = () => {
  const { account } = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
  return (
    <Switch>
      <Page>
        {!!account ? (
          <>            
            <PageHeader
              icon={<img src={chef} height="120" />}
              subtitle="Pools"                
            />
            <Layout />
            <GlobalStyles />                                   
          </>
        ) : (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={onPresentWalletProviderModal}
              text="🔓 Unlock Wallet"
            />
          </div>
        )}
      </Page>
    </Switch>
  )
}

export default Farms
