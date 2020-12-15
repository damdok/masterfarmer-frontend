import BigNumber from 'bignumber.js'
import React, { useCallback,useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import CountUp from 'react-countup'
import styled, { keyframes } from 'styled-components'
import { useWallet } from 'use-wallet'
import Card from '../../components/Card'
import CardContent from '../../components/CardContent'
import Label from '../../components/Label'
import Spacer from '../../components/Spacer'
import Value from '../../components/Value'
import CropsIcon from '../../components/CropsIcon'
import Wbtccropsapy from '../../components/Wbtccropsapy'
import Cropsethapy from '../../components/Cropsethapy'
import Button from '../../components/Button'
import useAllEarnings from '../../hooks/useAllEarnings'
import useFarms from '../../hooks/useFarms'
import useFarm from '../../hooks/useFarm'
import useTokenBalance from '../../hooks/useTokenBalance'
import useCrops from '../../hooks/useCrops'
import useAllowance from '../../hooks/useAllowance'
import useApprove from '../../hooks/useApprove'
import useStake from '../../hooks/useStake'
import useModal from '../../hooks/useModal'
import useStakedBalance from '../../hooks/useStakedBalance'
import useUnstake from '../../hooks/useUnstake'
import DepositModal from './components/DepositModal'
import Harvest from './components/Harvest'
import Stake from './components/Stake'
import { getEarned, getCropsAddress, getCropsSupply, getMasterChefContract } from '../../crops/utils'
import { getBalanceNumber } from '../../utils/formatBalance'
import { Contract } from 'web3-eth-contract'
import { getContract } from '../../utils/erc20'
import { provider } from 'web3-core'
import useRedeem from '../../hooks/useRedeem'
import TimerComponent from './components/Timer'
import { Farm } from '../../contexts/Farms'
import useAllStakedValue, {StakedValue,} from '../../hooks/useAllStakedValue'
import Loader from '../../components/Loader'
import Countdown, { CountdownRenderProps } from 'react-countdown'
import { bnToDec } from '../../utils'
import carrot from '../../assets/img/carrot.gif'
import broccoli from '../../assets/img/broccoli.gif'
import { symbolName } from 'typescript'

interface FarmWithStakedValue extends Farm, StakedValue {
  apy: BigNumber
}

const Subpage31: React.FC = () => {
  /////
  const [farms] = useFarms()
  const { account } = useWallet()
  const stakedValue = useAllStakedValue()

  const cropsIndex = farms.findIndex(
    ({ tokenSymbol }) => tokenSymbol === 'CROPS',
  )

  
 
  const cropsPrice =
    cropsIndex >= 0 && stakedValue[cropsIndex]
      ? stakedValue[cropsIndex].tokenPriceInWeth
      : new BigNumber(0)

  

  const BLOCKS_PER_YEAR = new BigNumber(365)
  const CROPS_PER_BLOCK = new BigNumber(1)

  
  
  const rows = farms.reduce<FarmWithStakedValue[][]>(
    (farmRows, farm, i) => {

      const farmWithStakedValue = {
        ...farm,
        ...stakedValue[i],
        apy: stakedValue[i]
          ? cropsPrice
              .times(CROPS_PER_BLOCK)
              .times(BLOCKS_PER_YEAR)
              .times(stakedValue[i].poolWeight)
              .div(stakedValue[i].totalWethValue)
          : null,
      }

      
      const newFarmRows = [...farmRows]
      const newindex = newFarmRows.length - 1
      if(newindex == 0){
        if (newFarmRows[newindex].length === 3) {
          newFarmRows.push([farmWithStakedValue])
        } else {
          newFarmRows[newindex].push(farmWithStakedValue)
        }
      } else {
        if (newFarmRows[newindex].length === 1) {
          newFarmRows.push([farmWithStakedValue])
        } else {
          newFarmRows[newindex].push(farmWithStakedValue)
        }
      }
        
      return newFarmRows
    },
    [[]],
  )
  console.log("rows",rows)

  
  const data1 = rows[0].map( function(v) {
    return Object.values( v );
 });
 
  
//const { farmId } = useParams()

  /*const {
    pid,
    lpToken,
    lpTokenAddress,
    tokenAddress,
    earnToken,
    name,
    icon,
  } = useFarm("0") || {
    pid: 0,
    lpToken: '',
    lpTokenAddress: '',
    tokenAddress: '',
    earnToken: '',
    name: '',
    icon: '',
  }*/

  const pid = rows[2][0].pid
  const lpToken = rows[2][0].lpToken
  const lpTokenAddress = rows[2][0].lpTokenAddress
  const tokenAddress = rows[2][0].tokenAddress
  const earnToken = rows[2][0].earnToken
  const name = rows[2][0].name
  const icon = rows[2][0].icon
  
  const crops = useCrops()
  const { ethereum } = useWallet()

  const lpContract = useMemo(() => {
    return getContract(ethereum as provider, lpTokenAddress)
  }, [ethereum, lpTokenAddress])

  const { onRedeem } = useRedeem(getMasterChefContract(crops))

  const lpTokenName = useMemo(() => {
    return lpToken.toUpperCase()
  }, [lpToken])

  const localStorageTime = localStorage.getItem('myValueInLocalStorage' + pid)

  const earnTokenName = useMemo(() => {
    return earnToken.toUpperCase()
  }, [earnToken])

  
  return (
    <StyledFarm>
    <StyledWrapper>           
      <StyledBalance>
      <Spacer />
        <div style={{ flex: 1 }}>
          <StyledWrapper>
            <Stake
              lpContract={lpContract}
              pid={pid}
              tokenName={lpToken.toUpperCase()}
            />
          </StyledWrapper>

        </div>
      </StyledBalance>

      <Styledimg>
        <StyledBalance>
          <div style={{ flex: 1 }}>          
              <Wbtccropsapy/>          
              <span style={{ position: "absolute", bottom: 170, left: 80}}>No Lock Pool</span>
              <span style={{ position: "absolute", bottom: 100, left: 25}}>You Can Un-Stake Your LP Tokens at Any Time</span>
              <span style={{ position: "absolute", bottom: 40, left: 60}}>
                <Button text="Stake Using ETH" size= "sm" onClick={async () => {          
                  }}
                />
              </span>
          </div>
        </StyledBalance>
      </Styledimg>

      <StyledBalance>
        <Spacer />
        <Harvest pid={pid} />
      </StyledBalance>
      
      <Spacer size="lg" />
    
    </StyledWrapper>

    <StyledcolumnWrapper>
      <Spacer size="lg" />
      <TimerComponent
        pid={pid}
        remaintime={localStorageTime}
      />
      <Spacer size="lg" />
    </StyledcolumnWrapper>
    
    </StyledFarm>
  )
}


interface FarmCardProps {
  farm: FarmWithStakedValue
}

const FarmCard: React.FC<FarmCardProps> = ({ farm }) => {
  const [startTime, setStartTime] = useState(0)
  const [harvestable, setHarvestable] = useState(0)

  const { account } = useWallet()
  const { lpTokenAddress } = farm
  const crops = useCrops()

  
  const renderer = (countdownProps: CountdownRenderProps) => {
    const { hours, minutes, seconds } = countdownProps
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const paddedHours = hours < 10 ? `0${hours}` : hours
    return (
      <span style={{ width: '100%' }}>
        {paddedHours}:{paddedMinutes}:{paddedSeconds}
      </span>
    )
  }

  useEffect(() => {
    async function fetchEarned() {
      if (crops) return
      const earned = await getEarned(
        getMasterChefContract(crops),
        lpTokenAddress,
        account,
      )
      setHarvestable(bnToDec(earned))
    }
    if (crops && account) {
      fetchEarned()
    }
  }, [crops, lpTokenAddress, account, setHarvestable])

  const poolActive = true // startTime * 1000 - Date.now() <= 0

  if (farm.tokenSymbol === 'CROPS'){
  return (
    <StyledCardWrapper>
      {farm.tokenSymbol === 'CROPS' && <StyledCardAccent />}
      
      <CarrotStyledCard>        
        <CardContent>
          <StyledContent>
            
            <StyledHeaderTitle>
                  ETH Carrot
              </StyledHeaderTitle>
              <img src={carrot} height="150" width ="150" style={{ marginTop: 10 }} />

            <StyledTitle>{farm.name}</StyledTitle>
            
            <StyledBigTitle>{farm.lpToken.toUpperCase()}</StyledBigTitle>
            
              <StyledHeaderTitle>

                {farm.apy
                  ? `${farm.apy
                      .times(new BigNumber(100))
                      .toNumber()
                      .toLocaleString('en-US')
                      .slice(0, -1)}%`
                  : 'Loading ...'}
                  APY
              </StyledHeaderTitle>

              <Spacer />

              {/* <span>
                {farm.tokenAmount
                  ? (farm.tokenAmount.toNumber() || 0).toLocaleString('en-US')
                  : '-'}{' '}
                {farm.tokenSymbol}
              </span>
              <span>
                {farm.wethAmount
                  ? (farm.wethAmount.toNumber() || 0).toLocaleString('en-US')
                  : '-'}{' '}
                ETH
              </span> */}
            

            <Button
              disabled={!poolActive}
              text={poolActive ? 'Select' : undefined}
              to={`/farms/${farm.id}`}
            >
              {!poolActive && (
                <Countdown
                  date={new Date(startTime * 1000)}
                  renderer={renderer}
                />
              )}
            </Button>
            
            
          </StyledContent>
        </CardContent>
        </CarrotStyledCard> 

    </StyledCardWrapper>
  )}
  else{
  return (
    <StyledCardWrapper>
      {farm.tokenSymbol === 'CROPS' && <StyledCardAccent />}
      <BroccoliStyledCard>
        <CardContent>
          <StyledContent>
           
            <StyledHeaderTitle>
                  USDC Broccoli
            </StyledHeaderTitle>              

            <img src={broccoli} height="150" width ="150" style={{ marginTop: 20 }} />

            <StyledTitle>{farm.name}</StyledTitle>

           
            
            <StyledBigTitle>{farm.lpToken.toUpperCase()}</StyledBigTitle>
            
              <StyledHeaderTitle>
                {farm.apy
                  ? `${farm.apy
                      .times(new BigNumber(100))
                      .toNumber()
                      .toLocaleString('en-US')
                      .slice(0, -1)}%`
                  : 'Loading ...'}
                  APY
              </StyledHeaderTitle>

              <Spacer />
          

              {/* <span>
                {farm.tokenAmount
                  ? (farm.tokenAmount.toNumber() || 0).toLocaleString('en-US')
                  : '-'}{' '}
                {farm.tokenSymbol}
              </span>
              <span>
                {farm.wethAmount
                  ? (farm.wethAmount.toNumber() || 0).toLocaleString('en-US')
                  : '-'}{' '}
                ETH
              </span> */}
            

            <Button
              disabled={!poolActive}
              text={poolActive ? 'Select' : undefined}
              to={`/farms/${farm.id}`}
            >
              {!poolActive && (
                <Countdown
                  date={new Date(startTime * 1000)}
                  renderer={renderer}
                />
              )}
            </Button>
            
          </StyledContent>
        </CardContent>
        </BroccoliStyledCard>
    </StyledCardWrapper>
  )
  }
}


const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  width:100%;
`

const StyledcolumnWrapper = styled.div`
  display: flex;  
  align-items: center;
  flex-direction: column;
`

const Styledimg = styled.div`
  padding-left:20px;
  position: relative;
`

const StyledBalance = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  color: ${(props) => props.theme.color.grey[900]};
`

const StyledFarm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;  
`

const StyledCards = styled.div`
  width: 1080px;
  margin-right:70px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledRow = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;
  flex-flow: row wrap;
  width:140%;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledLoadingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`

const StyledCardWrapper = styled.div`
  display: flex;
  width: calc((900px - ${(props) => props.theme.spacing[4]}px * 2) / 3);
  position: relative;
`

const RainbowLight = keyframes`
  
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const StyledCardAccent = styled.div`
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
  background-size: 300% 300%;
  background-color:white;
  animation: ${RainbowLight} 2s linear infinite;
  border-radius: 12px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`

const CarrotStyledCard = styled.div`
  border-radius: 12px;
  box-shadow: inset 1px 1px 0px ${(props) => props.theme.color.grey[100]};
  display: flex;
  flex: 1;
  background-color:#ea6627;
  flex-direction: column;
`

const StyledContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color:white;
  border-radius:10px;
`

const StyledHeaderTitle = styled.h4`
  color: green;
  font-size: 20px;
  font-weight: 700;
  margin: ${(props) => props.theme.spacing[2]}px 0 0;
  padding: 0;
  margin-top:15px;
`

const StyledTitle = styled.h4`
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 20px;
  font-weight: 700;
  margin: ${(props) => props.theme.spacing[2]}px 0 0;
  padding: 0;
  margin-bottom:10px;
  margin-top:-13px;  
`

const StyledBigTitle = styled.h4`
  color: ${(props) => props.theme.color.grey[600]};
  font-size: 20px;
  font-weight: 700;
  margin: ${(props) => props.theme.spacing[2]}px 0 0;
  padding: 0;
  margin-top:13px;  
`

const BroccoliStyledCard = styled.div`
  background: ${(props) => props.theme.color.grey[200]};
  border: 1px solid ${(props) => props.theme.color.grey[300]}ff;
  border-radius: 12px;
  box-shadow: inset 1px 1px 0px ${(props) => props.theme.color.grey[100]};
  display: flex;
  flex: 1;
  background-color:green;
  flex-direction: column;
`

export default Subpage31
