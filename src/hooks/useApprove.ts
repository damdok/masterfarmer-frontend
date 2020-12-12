import { useCallback } from 'react'

import useCrops from './useCrops'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'

import { approve, getMasterChefContract } from '../crops/utils'

const useApprove = (lpContract: Contract) => {
  const { account }: { account: string; ethereum: provider } = useWallet()
  const crops = useCrops()
  const masterChefContract = getMasterChefContract(crops)
  
  const handleApprove = useCallback(async () => {
    try {

      const tx = await approve(lpContract, masterChefContract, account)
      return tx

    } catch (e) {

      console.log(e);

      return false
    }
  }, [account, lpContract, masterChefContract])

  return { onApprove: handleApprove }
}

export default useApprove
