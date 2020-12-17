import { useCallback, useEffect, useState } from 'react'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import useCrops from './useCrops'

import { totalBurn, getMasterChefContract } from '../crops/utils'

const useTotalBurn = () => {

const { account } = useWallet()

  const crops = useCrops()
  const masterChefContract = getMasterChefContract(crops)

  const state = useCallback(async () => {
    const success = await totalBurn(masterChefContract, account)    
  }, [crops])

  return { onSuccess: state }
}

export default useTotalBurn

