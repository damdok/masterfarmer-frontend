import BigNumber from 'bignumber.js'
import useFarms from '../../hooks/useFarms'
import { Farm } from '../../contexts/Farms'
import useAllStakedValue, {
  StakedValue,
} from '../../hooks/useAllStakedValue'
import Loader from '../../components/Loader'
import useCrops from '../../hooks/useCrops'
import { getMasterChefContract, getPoolWeight } from '../../crops/utils'
import { bnToDec } from '../../utils'
import useModal from '../../hooks/useModal'
import React, { useMemo, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Spacer from '../../components/Spacer'
import Yficropsapy from '../../components/stakingsapy/Yficropsapy'
import Button from '../../components/Button'
import useFarm from '../../hooks/useFarm'
import Harvest from './components/Harvest'
import Stake from './components/Stake'
import { getContract } from '../../utils/erc20'
import { provider } from 'web3-core'
import AutoDepositModal from './components/AutoDepositModal'

import { getAPYNumber } from '../../utils/formatBalance'
import ApyValue from '../../components/ApyValue'

import usePoolWeight from '../../hooks/usePoolWeight'

interface FarmWithStakedValue extends Farm, StakedValue {
  apy: BigNumber
}

interface FarmCardProps {
  farm: FarmWithStakedValue
}

const FarmCard: React.FC<FarmCardProps> = ({ farm }) => { 
  const [harvestable, setHarvestable] = useState(0)

  const { account } = useWallet()
  const { lpTokenAddress } = farm
  const crops = useCrops()

  const poolweight = usePoolWeight(5)
  
  /*return (
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
  )*/
  return (
    <StyledCardWrapper>
      APY:
        <ApyValue
          value={getAPYNumber(poolweight)}
        />
        %
        <Spacer /> 
    </StyledCardWrapper>
  )
 
}

const Subpage71: React.FC = () => {  
  const farmId = "YFI-CROPS UNI-V2 LP"

  const {
    pid,
    lpToken,
    lpTokenAddress,
  } = useFarm(farmId) || {
    pid: 6,
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

      
      const newFarmRows = [...farmRows]
      
      if (newFarmRows[newFarmRows.length - 1].length === 23) {
        newFarmRows.push([farmWithStakedValue])
      } else {
        newFarmRows[newFarmRows.length - 1].push(farmWithStakedValue)
      }
      return newFarmRows
    },
    [[]],
  )
  //console.log("rows",rows)
  return (
    <StyledFarm>
      <StyledWrapper>
      <StyledNav>
        <FirstLink>          
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
        </FirstLink>
      <SecondLink>
        <Styledimg>
          <StyledBalance>          
                <Yficropsapy/>              
                <span style={{ position: "absolute", bottom: 90, left: 60}}>              
                  {!!rows[0].length ? (                                                      
                      <FarmCard farm={rows[0][6]} />
                    ) : (
                      <StyledLoadingWrapper>
                        <Loader text="Farming ..." />
                      </StyledLoadingWrapper>
                    )}
                </span>                
                
          </StyledBalance>        
        </Styledimg>
      </SecondLink>
      <ThirdLink>
      <StyledBalance>
        <Spacer />
        <div style={{ flex: 1 }}>
          <StyledWrapper>
            <Harvest pid={pid} />
          </StyledWrapper>
        </div>
      </StyledBalance>
      </ThirdLink>
      <Spacer size="lg" />
      </StyledNav>
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
  font-weight: 500;
  font-size: 18px;
  font-family: 'Arial-Rounded', sans-serif;
`

const FirstLink = styled.div`
  display:flex;
  flex:40%;
  @media(max-width:860px){
    flex:100%;
    margin-top:5px;
  }
`
const SecondLink = styled.div`
  display:flex;
  flex:30%;
  @media(max-width:860px){
    flex:100%;
    margin-top:5px;
  } 
`
const ThirdLink = styled.div`
  display:flex;
  flex:40%;
  @media(max-width:860px){
    flex:30%;
    margin-top:5px;
  } 
`

const StyledNav = styled.div`
  align-items: center;
  display: flex;
  @media(max-width:860px){
    flex-direction: column;
  }
`

export default Subpage71
