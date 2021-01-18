import { useCallback } from 'react'

import useCrops from './useCrops'
import { useWallet } from 'use-wallet'

import { autodeposit, getAutoDepositContract } from '../crops/utils'

const useAutoDeposit = () => {
  const { account } = useWallet()
  const crops = useCrops()

  const handleAutoDeposit = useCallback(
    async (amount: string) => {

      const txHash = await autodeposit(
        getAutoDepositContract(crops),
        amount,
        account
      )
      //console.log(txHash)
    },
    [account, crops],
  )

  return { onAutoDeposit: handleAutoDeposit }
}

export default useAutoDeposit
