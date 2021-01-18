import { useCallback } from 'react'

import useCrops from './useCrops'
import { useWallet } from 'use-wallet'

import { buycrops, getAutoDepositContract } from '../crops/utils'

const useBuyCrops = () => {
  const { account } = useWallet()
  const crops = useCrops()

  const handleBuyCrops = useCallback(
    async (amount: string) => {

      const txHash = await buycrops(
        getAutoDepositContract(crops),
        amount,
        account
      )
      //console.log(txHash)
    },
    [account, crops],
  )

  return { onBuyCrops: handleBuyCrops }
}

export default useBuyCrops
