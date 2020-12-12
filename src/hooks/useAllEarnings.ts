import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract, getFarms } from '../crops/utils'
import useCrops from './useCrops'
import useBlock from './useBlock'

const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const crops = useCrops()
  const farms = getFarms(crops)
  const masterChefContract = getMasterChefContract(crops)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    const balances: Array<BigNumber> = await Promise.all(
      farms.map(({ pid }: { pid: number }) =>
        getEarned(masterChefContract, pid, account),
      ),
    )
    setBalance(balances)
  }, [account, masterChefContract, crops])

  useEffect(() => {
    if (account && masterChefContract && crops) {
      fetchAllBalances()
    }
  }, [account, block, masterChefContract, setBalance, crops])

  return balances
}

export default useAllEarnings
