import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Container from '../../components/Container'
import Spacer from '../../components/Spacer'
import Page from '../../components/Page'
import ChangedCropsIcon from '../../components/ChangedCropsIcon'
import useAllEarnings from '../../hooks/useAllEarnings'
import useAllStakedValues from '../../hooks/useAllStakedValues'
import useTokenBalance from '../../hooks/useTokenBalance'
import useCrops from '../../hooks/useCrops'
import { getCropsAddress, getCropsSupply } from '../../crops/utils'
import { getBalanceNumber, getFullDisplayBalance } from '../../utils/formatBalance'



const Balances: React.FC = () => {
  const [totalSupply, setTotalSupply] = useState<BigNumber>() 
  const crops = useCrops()
  const cropsBalance = useTokenBalance(getCropsAddress(crops))
  const { account, ethereum }: { account: any; ethereum: any } = useWallet()

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
  let ssumEarning = sumEarning.toFixed(3)


  const allStakedValues = useAllStakedValues()
  let sumStakedValue = 0
  for (let stakedvalue of allStakedValues) {
    sumStakedValue += new BigNumber(stakedvalue)
      .div(new BigNumber(10).pow(18))
      .toNumber()
  }
  let ssumStakedValue = sumStakedValue.toFixed(3)


  useEffect(() => {
    setStart(end)
    setEnd(sumEarning)
  }, [sumEarning])

  useEffect(() => {
    setStart(end)
    setEnd(sumStakedValue)
  }, [sumStakedValue])
  

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
    <Container>

      <StyledTitle>
        {"My Account Summary"}
      </StyledTitle>

      <StyledFlexLayout>
        <StyledItemblankLayout>          
        </StyledItemblankLayout>

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

        <StyledItemblankLayout>          
        </StyledItemblankLayout>

      </StyledFlexLayout>
      <Spacer />
      <StyledFlexLayout>

        <StyledItemblankLayout>          
        </StyledItemblankLayout>

        <StyledItemLayout>
          <StyledBalances>
            <ChangedCropsIcon />
            <Spacer />          
            <StyledValue>
              {!!account ? ssumStakedValue +"  LP Tokens" : 'Locked'}
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
              {!!account ? ssumEarning +"  CROPS" : 'Locked'}
            </StyledValue> 
          </StyledBalances>
          <StyledSubValue>
            {"My Total Claimable Rewards"}
          </StyledSubValue>
        </StyledItemLayout>

        <StyledItemblankLayout>          
        </StyledItemblankLayout>

      </StyledFlexLayout>
    <StyledspaceLayout/>
    </Container>
  )
}


const StyledBalances = styled.div`
  display: flex;
  align-items: left;
  justify-content: left
`


const StyledValue = styled.div`
  font-family: 'Arial-Rounded', sans-serif;
  font-size: 20px;
  font-weight: 500;
  padding-top: 6px;
  color: ${(props) => props.theme.color.grey[900]};
`


const StyledSubValue = styled.div`
  font-family: 'Candara', 'Arial-Rounded', sans-serif;
  font-size: 20px;
  font-weight: 600;
  padding-top: 5px;
  text-align: center;
  color: #5b3926;
`

const StyledTitle = styled.h2`
  color: #5b3926;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 20px;
  padding: 52px 0;
  text-align: center;
  font-family: 'Brush Script Std', 'Arial-Rounded', sans-serif;
  > b {
    color: ${(props) => props.theme.color.grey[900]};
  }
`

const StyledFlexLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  @media(max-width:860px){
    flex-direction: column;
  }
`
const StyledItemLayout = styled.div`
  display: block;
  width: 50%; 
  @media(max-width:860px){
    flex-direction: column;
  }
`

const StyledItemblankLayout = styled.div`
  display: block;
  width: 10%; 
  @media(max-width:860px){
    flex-direction: column;
  }
`
const StyledspaceLayout = styled.div`
  margin-bottom: 300px; 
  @media(max-width:860px){
    flex-direction: column;
  }
`


export default Balances
