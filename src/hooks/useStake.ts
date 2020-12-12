import { useCallback } from 'react'

import useCrops from './useCrops'
import { useWallet } from 'use-wallet'

import { stake, getCrops, getEarned, getMasterChefContract, getMasterChefAddress, getCropsAddress, getWethContract, getCropsContract } from '../crops/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const crops = useCrops()

  const handleStake = useCallback(
    async (amount: string) => {

      const masterfarmer = getMasterChefContract(crops)
      const masterfarmeraddress = getMasterChefAddress(crops)
      const cropsaddress = getCropsAddress(crops)
      const WethContract = getWethContract(crops)
      const CropsContract = getCropsContract(crops)
      const getCrop = getCrops(crops)

      const txHash = await stake(
        getMasterChefContract(crops),
        pid,
        amount,
        account,
      )
      console.log(txHash)
    },
    [account, pid, crops],
  )

  return { onStake: handleStake }
}

export default useStake
