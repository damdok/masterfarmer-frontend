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
  console.log("crops address = ", getCropsAddress(crops))
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
    <Container>

      <StyledTitle>
        <StyledLabel>{"My Account Summary"}</StyledLabel>
      </StyledTitle>
      <StyledFlexLayout>
        <StyledItemLayout>
        </StyledItemLayout>
      </StyledFlexLayout>
      
      <StyledbrWrapper>
        <StyledWrapper>
          
            <CardContent>
              <StyledBalances>
                <StyledBalance>
                  <ChangedCropsIcon />
                  <Spacer />
                  <div style={{ flex: 1 }}>
                    <StyledValue>
                      {!!account ? getBalanceNumber(cropsBalance)+"  CROPS" : 'Locked'}
                    </StyledValue>
                    <StyledLabel>{"My Balance"}</StyledLabel>
                  </div>
                </StyledBalance>
              </StyledBalances>
            </CardContent>          

          <Spacer />

          <CardContent>
            <StyledValue>
              {totalSupply ? getBalanceNumber(totalSupply) : 'Locked'}
            </StyledValue>
            <StyledLabel>{"Total CROPS Supply"}</StyledLabel>
          </CardContent>          

        </StyledWrapper>
      </StyledbrWrapper>

      <StyledbrWrapper>
        <StyledWrapper>
          
          <CardContent>
            <StyledBalances>
              <StyledBalance>
                <ChangedCropsIcon />
                <Spacer />
                <div style={{ flex: 1 }}>
                  <StyledValue>
                    {!!account ? totalgetStaked() +"  CROPS" : 'Locked'}
                  </StyledValue>
                  <StyledLabel>{"My Staked Liquidity Value"}</StyledLabel>                
                </div>
              </StyledBalance>
            </StyledBalances>
          </CardContent>

          <Spacer />
          
          <CardContent>
            <StyledBalances>
              <StyledBalance>
                <ChangedCropsIcon />
                <Spacer />
                <div style={{ flex: 1 }}>
                  <StyledValue>
                    {!!account ? totalgetClaimableRewards() +"  CROPS" : 'Locked'}
                  </StyledValue>
                  <StyledLabel>{"My Total Claimable Rewards"} </StyledLabel>                
                </div>
              </StyledBalance>
            </StyledBalances>
          </CardContent>          

        </StyledWrapper>
      </StyledbrWrapper>

    </Container>
    
  )
}

const Footnote = styled.div`
  font-size: 14px;
  padding: 8px 20px;
  color: ${(props) => props.theme.color.grey[600]};
  border-top: solid 1px ${(props) => props.theme.color.grey[300]};
`
const FootnoteValue = styled.div`
  font-family: 'Arial-Rounded', sans-serif;
  float: right;
`

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: stretch;
  }
`

const StyledbrWrapper = styled.div`
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    align-items: stretch;
  }
  padding-bottom: 10px;
`
const StyledbrtopWrapper = styled.div`
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    align-items: stretch;
  }
  justify-content: center;
  padding-top: 40px;
`

const StyledbrrightWrapper = styled.div`
  float: right;  
  padding-bottom: 10px;
  padding-bottom: 15px;
`

const StyledBalances = styled.div`
  display: flex;
`

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`

const StyledValue = styled.div`
  font-family: 'Arial-Rounded', sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: ${(props) => props.theme.color.grey[900]};
`

const StyledctValue = styled.div`
  font-family: 'Arial-Rounded', sans-serif;;
  font-size: 20px;
  font-weight: 500;
  text-align:center;
  color: ${(props) => props.theme.color.grey[900]};
`

const StyledbrtopbtWrapper = styled.div`
  font-family: 'Arial-Rounded', sans-serif;;
  font-size: 20px;
  font-weight: 800;
  text-align:center;
  padding-top:25px;
  padding-bottom:35px;
  color: ${(props) => props.theme.color.grey[900]};
`

const StyledLabel = styled.div`
  color: ${(props) => props.theme.color.grey[1000]};
  font-size: 20px;
  font-family: 'Arial-Rounded', sans-serif;
`

const StyledTitle = styled.h2`
  color: ${(props) => props.theme.color.white};
  font-size: 30px;
  font-weight: 400;
  margin: 0;
  padding: 32px 0;
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
  width: 33%;
`


export default Balances
