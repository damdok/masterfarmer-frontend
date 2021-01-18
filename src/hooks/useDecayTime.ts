import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'

import { getdecaytime, getMasterChefContract } from '../crops/utils'
import useCrops from './useCrops'

const useDecayTime = () => {
  const [balance, setBalance] = useState(0)
  const crops = useCrops()
  const masterChefContract = getMasterChefContract(crops)

  const fetchBalance = useCallback(async () => {
    const balance = await getdecaytime(masterChefContract)
    setBalance(balance)
  }, [crops])
  useEffect(() => {
    if (crops) {
      fetchBalance()
    }
  }, [setBalance, crops])

  return balance
}

export default useDecayTime
