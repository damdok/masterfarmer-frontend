import React, { useEffect } from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/chef.png'
import { useState } from 'react'

import { useParams } from 'react-router-dom'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import CardContent from '../../components/CardContent'
import Card from '../../components/Card'
import Label from '../../components/Label'
import Value from '../../components/Value'

import Page from '../../components/Page'
import Button from '../../components/Button'
import PageHeader from '../../components/PageHeader'
import WalletProviderModal from '../../components/WalletProviderModal'

import useModal from '../../hooks/useModal'

import useCrops from '../../hooks/useCrops'
import useTotalBurn from '../../hooks/useTotalBurn'
import useFarm from '../../hooks/useFarm'
import useRedeem from '../../hooks/useRedeem'
import { getContract } from '../../utils/erc20'
import { getCropsAddress } from '../../crops/utils'

import BigNumber from 'bignumber.js'

import burn from '../../assets/img/burn.gif'
import CardIcon from '../../components/CardIcon'
import Spacer from '../../components/Spacer'
import TimerComponent from '../Subpages/components/Timer'


const Farm: React.FC = () => {
  const { account } = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const crops = useCrops()
  const { ethereum } = useWallet()

  const [burningToken, BurnedTx] = useState(false)
  const { onSuccess } = useTotalBurn()

  const [timeLock, setTimeLock] = useState(false)

  const localStorageDecayTime = localStorage.getItem('mDecayTimeStorage')

  useEffect(() => {    
    if (timeLock) {
      const mDecayTimeStorage = "mDecayTimeStorage"

      const date = new Date();
      const dt = date.getTime()/1000;

      localStorage.setItem(mDecayTimeStorage, dt.toString());
    }
  }, [timeLock])

  const calculateDecayTimeLeft = () => {
    var date = new Date();
    var dt = date.getTime() / 1000;
    var delay_date = 6 * 3600 * 1000;

    const decayTime = localStorage.getItem('mDecayTimeStorage')
    if (decayTime == null) return false;

    var difference = delay_date - Math.round(dt - Number(decayTime)) * 1000;
    // difference = 0

    if (difference > 0) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <Page>
      {!!account ? (
        <>
          <PageHeader
            icon={<img src={chef} height="120" />}
            title="Global Decay"
            subtitle="Activate to trigger global decay which burns .25% of the tokens in all wallets and you will receive 10% of the burned tokens as a reward"
          />

          <Card>
              <CardContent>
                <StyledCardHeader>
                  <StyledCardHeader>
                    <CardIcon><img src={burn} height="72" style={{ marginTop: 0 }} /></CardIcon>
                  
                  </StyledCardHeader>

                </StyledCardHeader>
                <StyledCardActions>
                    <>
                      <Button
                        disabled={calculateDecayTimeLeft()}   
                        text="Global Decay"
                        onClick={async () => {
                          BurnedTx(true)
                          await onSuccess()
                          setTimeLock(true)
                          BurnedTx(false)
                        }}
                      />
                  </>
                </StyledCardActions>
              </CardContent>
          </Card>
          <Spacer size="lg" />
          <TimerComponent
            pid={999}
            remaintime={localStorageDecayTime}
          />
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
  )
}


const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[400]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`
const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[6]}px;
  width: 100%;
`

const StyledActionSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export default Farm
