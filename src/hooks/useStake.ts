import { useCallback } from 'react'

import useCrops from './useCrops'
import { useWallet } from 'use-wallet'

import { stake, getCrops, getEarned, getMasterChefContract, getMasterChefAddress, getCropsAddress, getWethContract, getCropsContract } from '../crops/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const crops = useCrops()
  //console.log("account:",account)
  //console.log("crops11:",crops)
  //console.log("pid:",pid)

  const handleStake = useCallback(
    async (amount: string) => {

      const masterfarmer = getMasterChefContract(crops)
      const masterfarmeraddress = getMasterChefAddress(crops)
      const cropsaddress = getCropsAddress(crops)
      const WethContract = getWethContract(crops)
      const CropsContract = getCropsContract(crops)
      const getCrop = getCrops(crops)
      //const getearning = getEarned(crops)
      console.log("crops11:", crops)
      console.log("account11:", account)
      console.log("pid11:", pid)
      console.log("cropsaddress11:", cropsaddress)
      console.log("WethContract11:", WethContract)
      console.log("getCrop11:", getCrop)
      //console.log("getearning11:", getearning)
      console.log("CropsContract11:", CropsContract)
      console.log("masterfarmeraddress11:", masterfarmeraddress)
      console.log("masterfarmer11:", masterfarmer)

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
