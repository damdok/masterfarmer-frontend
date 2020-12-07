import { useCallback } from 'react'

import useCrops from './useCrops'
import { useWallet } from 'use-wallet'

import { stake, getMasterChefContract } from '../crops/utils'

const useStake = (pid: number) => {
  const { account } = useWallet()
  const crops = useCrops()
  //console.log("account:",account)
  //console.log("crops11:",crops)
  //console.log("pid:",pid)

  const handleStake = useCallback(
    async (amount: string) => {

      const masterfarmer = getMasterChefContract(crops)      
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
