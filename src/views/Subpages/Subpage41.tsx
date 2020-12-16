import BigNumber from 'bignumber.js'
import React, { useCallback,useEffect, useMemo, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useWallet } from 'use-wallet'
import Spacer from '../../components/Spacer'
import Surfcropsapy from '../../components/Surfcropsapy'
import Button from '../../components/Button'
import useFarms from '../../hooks/useFarms'
import Harvest from './components/Harvest'
import Stake from './components/Stake'
import { getContract } from '../../utils/erc20'
import { provider } from 'web3-core'
import { Farm } from '../../contexts/Farms'
import useAllStakedValue, {StakedValue,} from '../../hooks/useAllStakedValue'


interface FarmWithStakedValue extends Farm, StakedValue {
  apy: BigNumber
}

const Subpage41: React.FC = () => {
  /////
  const [farms] = useFarms()
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
  /*
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
  )*/
  
  
  /*
  localStorage.setItem('pid', JSON.stringify(rows[3][0].pid))
  var savedtemperpid = localStorage.getItem('pid')  
  const pid = parseInt(savedtemperpid);
  console.log('pid', pid)

  localStorage.setItem('lpToken', rows[3][0].lpToken)
  const lpToken = localStorage.getItem('lpToken')
  console.log('lpToken', lpToken)

  localStorage.setItem('lpTokenAddress', rows[3][0].lpTokenAddress)
  const lpTokenAddress = localStorage.getItem('lpTokenAddress')
  console.log('lpTokenAddress', lpTokenAddress)
  */

 //const pid = rows[3][0].pid
 //const lpToken = rows[3][0].lpToken
 //const lpTokenAddress = rows[3][0].lpTokenAddress

  const pid = 5
  const lpToken = "CROPS-SURF UNI-V2 LP"
  const lpTokenAddress = "0x1889ec635e4399ce7629841ae65eed09949e64a7"
  
  const { ethereum } = useWallet()

  const lpContract = useMemo(() => {
    return getContract(ethereum as provider, lpTokenAddress)
  }, [ethereum, lpTokenAddress])

  
  
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
              <Surfcropsapy/>          
              <span style={{ position: "absolute", bottom: 150, left: 65}}>You can unstake</span>
              <span style={{ position: "absolute", bottom: 130, left: 80}}>at any time</span>
              <span style={{ position: "absolute", bottom: 90, left: 90}}>APY : 5%</span>
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


export default Subpage41
