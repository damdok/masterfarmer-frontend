import { useCallback } from 'react'

import useCrops from './useCrops'
import { useWallet } from 'use-wallet'

import { unstake, getMasterChefContract } from '../crops/utils'

const useUnstake = (pid: number) => {
  const { account } = useWallet()
  const crops = useCrops()
  const masterChefContract = getMasterChefContract(crops)

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChefContract, pid, amount, account)
      console.log(txHash)
    },
    [account, pid, crops],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
