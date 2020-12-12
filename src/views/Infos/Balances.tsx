import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Card from '../../components/Card'
import CardContent from '../../components/CardContent'
import Label from '../../components/Label'
import Container from '../../components/Container'
import Spacer from '../../components/Spacer'
import Page from '../../components/Page'
import Value from '../../components/Value'
import CropsIcon from '../../components/CropsIcon'
import ChangedCropsIcon from '../../components/ChangedCropsIcon'
import Button from '../../components/Button'
import useAllEarnings from '../../hooks/useAllEarnings'
import useAllStakedValue from '../../hooks/useAllStakedValue'
import useFarms from '../../hooks/useFarms'
import useTokenBalance from '../../hooks/useTokenBalance'
import useCrops from '../../hooks/useCrops'
import { getCropsAddress, getCropsSupply, totalgetStaked, totalgetClaimableRewards } from '../../crops/utils'
import { getBalanceNumber } from '../../utils/formatBalance'

const PendingRewards: React.FC = () => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)
  const [scale, setScale] = useState(1)

  const allEarnings = useAllEarnings()
  let sumEarning = 0
  for (let earning of allEarnings) {
    sumEarning += new BigNumber(earning)
      .div(new BigNumber(10).pow(18))
      .toNumber()
  }

  const [farms] = useFarms()
  const allStakedValue = useAllStakedValue()

  if (allStakedValue && allStakedValue.length) {
    const sumWeth = farms.reduce(
      (c, { id }, i) => c + (allStakedValue[i].totalWethValue.toNumber() || 0),
      0,
    )
  }

  useEffect(() => {
    setStart(end)
    setEnd(sumEarning)
  }, [sumEarning])

  return (
    <span
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'right bottom',
        transition: 'transform 0.5s',
        display: 'inline-block',
      }}
    >
      <CountUp
        start={start}
        end={end}
        decimals={end < 0 ? 4 : end > 1e5 ? 0 : 3}
        duration={1}
        onStart={() => {
          setScale(1.25)
          setTimeout(() => setScale(1), 600)
        }}
        separator=","
      />
    </span>
  )
}

const Balances: React.FC = () => {
  const [totalSupply, setTotalSupply] = useState<BigNumber>()
  const crops = useCrops()
  const cropsBalance = useTokenBalance(getCropsAddress(crops))
  const { account, ethereum }: { account: any; ethereum: any } = useWallet()

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getCropsSupply(crops)
      setTotalSupply(supply)
    }
    if (crops) {
      fetchTotalSupply()
    }
  }, [crops, setTotalSupply])

  return (
    <Page>
    <Container>

      <StyledTitle>
        {"My Account Summary"}
      </StyledTitle>

      <StyledFlexLayout>
        <StyledItemLayout>
          <StyledBalances>
            <ChangedCropsIcon />
            <Spacer />          
            <StyledValue>
              {!!account ? getBalanceNumber(cropsBalance)+"  CROPS" : 'Locked'}
            </StyledValue> 
          </StyledBalances>
          <StyledSubValue>
            {"My Balance"}
          </StyledSubValue>
        </StyledItemLayout>

        <StyledItemLayout>
          <StyledBalances>
            <ChangedCropsIcon />
            <Spacer />          
            <StyledValue>
              {totalSupply ? getBalanceNumber(totalSupply)+"  CROPS" : 'Locked'}
            </StyledValue> 
          </StyledBalances>
          <StyledSubValue>
            {"Total CROPS Supply"}
          </StyledSubValue>
        </StyledItemLayout>
      </StyledFlexLayout>
      <Spacer />
      <StyledFlexLayout>
        <StyledItemLayout>
          <StyledBalances>
            <ChangedCropsIcon />
            <Spacer />          
            <StyledValue>
              {!!account ? totalgetStaked() +"  CROPS" : 'Locked'}
            </StyledValue> 
          </StyledBalances>
          <StyledSubValue>
            {"My Staked Liquidity Value"}
          </StyledSubValue>
        </StyledItemLayout>

        <StyledItemLayout>
          <StyledBalances>
            <ChangedCropsIcon />
            <Spacer />          
            <StyledValue>
              {!!account ? totalgetClaimableRewards() +"  CROPS" : 'Locked'}
            </StyledValue> 
          </StyledBalances>
          <StyledSubValue>
            {"My Total Claimable Rewards"}
          </StyledSubValue>
        </StyledItemLayout>
      </StyledFlexLayout>

    </Container>
    </Page>
  )
}


const StyledBalances = styled.div`
  display: flex;
  align-items: center;
  justify-content: center
`


const StyledValue = styled.div`
  font-family: 'Arial-Rounded', sans-serif;
  font-size: 20px;
  font-weight: 500;
  padding-top: 6px;
  color: ${(props) => props.theme.color.grey[900]};
`


const StyledSubValue = styled.div`
  font-family: 'Arial-Rounded', sans-serif;
  font-size: 16px;
  font-weight: 600;
  padding-top: 5px;
  text-align: center;
  color: ${(props) => props.theme.color.grey[1000]};
`

const StyledTitle = styled.h2`
  color: ${(props) => props.theme.color.black};
  font-size: 30px;
  font-weight: 600;
  margin: 0;
  padding: 52px 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[900]};
  }
`

const StyledFlexLayout = styled.div`
  display: flex;
  justify-content: center;
`
const StyledItemLayout = styled.div`
  display: block;
  width: 50%; 
`


export default Balances
