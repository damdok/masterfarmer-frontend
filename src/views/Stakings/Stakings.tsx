import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Card from '../../components/Card'
import CardContent from '../../components/CardContent'
import Label from '../../components/Label'
import Spacer from '../../components/Spacer'
import Value from '../../components/Value'
import CropsIcon from '../../components/CropsIcon'
import Button from '../../components/Button'
import useAllEarnings from '../../hooks/useAllEarnings'
import useAllStakedValue from '../../hooks/useAllStakedValue'
import useFarms from '../../hooks/useFarms'
import useTokenBalance from '../../hooks/useTokenBalance'
import useCrops from '../../hooks/useCrops'
import { getCropsAddress, getCropsSupply } from '../../crops/utils'
import { getBalanceNumber } from '../../utils/formatBalance'
import Layouttop from './topcomponents/Layout';
import GlobalStyles from '../../styles/global';


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
    <StyledbrWrapper>
      <Layouttop/>
      <GlobalStyles/>
    </StyledbrWrapper>
    
  )
}

const Footnote = styled.div`
  font-family: 'Arial-Rounded', sans-serif;
  font-size: 25px;
  padding: 8px 20px;
  text-align: center;
  font-weight: 700;
  color: ${(props) => props.theme.color.grey[900]};
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

const StyledBalances = styled.div`
  display: flex;
`

const StyledBalance = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  align-items: center;
  justify-content: center;
  text-align:center;
  padding-top:15px;
  padding-bottom:15px;
  color: ${(props) => props.theme.color.grey[900]};
`

const StyledValue = styled.div`
  font-family: 'Arial-Rounded', sans-serif;
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 20px;
  font-weight: 400;
  padding-top: 10px;
  padding-bottom: 10px;
`

const StyledLabel = styled.div`
  color: ${(props) => props.theme.color.grey[900]};
  font-size: 15px;
`

export default Balances
