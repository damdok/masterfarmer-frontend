import { useCallback } from 'react'

import useCrops from './useCrops'
import { useWallet } from 'use-wallet'

import { harvest, getMasterChefContract } from '../crops/utils'

const useReward = (pid: number) => {
  const { account } = useWallet()
  const crops = useCrops()
  const masterChefContract = getMasterChefContract(crops)

  const handleReward = useCallback(async () => {
    const txHash = await harvest(masterChefContract, pid, account)
    console.log(txHash)
    return txHash
  }, [account, pid, crops])

  return { onReward: handleReward }
}

export default useReward
