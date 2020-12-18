import BigNumber from 'bignumber.js'
import useFarms from '../../hooks/useFarms'
import { Farm } from '../../contexts/Farms'
import useAllStakedValue, {
  StakedValue,
} from '../../hooks/useAllStakedValue'
import Loader from '../../components/Loader'
import useCrops from '../../hooks/useCrops'
import { CountdownRenderProps } from 'react-countdown'
import { getEarned, getMasterChefContract } from '../../crops/utils'
import { bnToDec } from '../../utils'

import React, { useMemo, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Spacer from '../../components/Spacer'
import Usdccropsapy from '../../components/Usdccropsapy'
import Button from '../../components/Button'
import useFarm from '../../hooks/useFarm'
import Harvest from './components/Harvest'
import Stake from './components/Stake'
import { getContract } from '../../utils/erc20'
import { provider } from 'web3-core'

interface FarmWithStakedValue extends Farm, StakedValue {
  apy: BigNumber
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
  
  return (
    <StyledCardWrapper> 
        {farm.apy
          ? `${farm.apy
              .times(new BigNumber(100))
              .toNumber()
              .toLocaleString('en-US')
              .slice(0, -1)}%`
          : 'Loading ...'}
          APY
        <Spacer /> 
    </StyledCardWrapper>
  )
 
}

const Subpage21: React.FC = () => {
  const farmId = "CROPS-USDC UNI-V2 LP"

  const {
    pid,
    lpToken,
    lpTokenAddress,
  } = useFarm(farmId) || {
    pid: 0,
    lpToken: '',
    lpTokenAddress: '',
  }
  
  const { ethereum } = useWallet()
  //
  const [farms] = useFarms()
  const stakedValue = useAllStakedValue()
  //const BLOCKS_PER_YEAR = new BigNumber(2336000)
  const BLOCKS_PER_YEAR = new BigNumber(365)
  const CROPS_PER_BLOCK = new BigNumber(1)
  const cropsIndex = farms.findIndex(
    ({ tokenSymbol }) => tokenSymbol === 'CROPS',
  )  

  const cropsPrice =
    cropsIndex >= 0 && stakedValue[cropsIndex]
      ? stakedValue[cropsIndex].tokenPriceInWeth
      : new BigNumber(0)

  //
  const lpContract = useMemo(() => {
    return getContract(ethereum as provider, lpTokenAddress)
  }, [ethereum, lpTokenAddress])   


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

      console.log("farm111 = ",farm)
      console.log("farmWithStakedValue = ",farmWithStakedValue)

      const newFarmRows = [...farmRows]
      console.log("newFarmRows",newFarmRows)
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
              <Usdccropsapy/>
              <span style={{ position: "absolute", bottom: 150, left: 65}}>You can unstake</span>
              <span style={{ position: "absolute", bottom: 130, left: 80}}>at any time</span>
              <span style={{ position: "absolute", bottom: 90, left: 80}}>
              
                {!!rows[0].length ? (                                                      
                  <FarmCard farm={rows[1][0]} />
                ) : (
                  <StyledLoadingWrapper>
                    <Loader text="Farming ..." />
                  </StyledLoadingWrapper>
                )}
              </span>
              
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
    
    </StyledFarm>
    
  )
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
  font-color: ${(props) => props.theme.color.grey[900]};
`

export default Subpage21
