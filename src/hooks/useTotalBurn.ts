import { useCallback, useEffect, useState } from 'react'


import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import useCrops from './useCrops'


import { totalBurn, getCropsContract } from '../crops/utils'

const useTotalBurn = () => {

const { account } = useWallet()

  const crops = useCrops()
  
  const state = useCallback(async () => {
    console.log("call burn function");
    const success = await totalBurn(crops, account)
    console.log("3333333");
    
  }, [crops])

  return { onSuccess: state }
}

export default useTotalBurn
