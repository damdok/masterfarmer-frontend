import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getEarned, getMasterChefContract } from '../crops/utils'
import useCrops from './useCrops'
import useBlock from './useBlock'

const useEarnings = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const {
    account,
    ethereum,
  }: { account: string; ethereum: provider } = useWallet()
  const crops = useCrops()
  const masterChefContract = getMasterChefContract(crops)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getEarned(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, masterChefContract, crops])

  useEffect(() => {
    if (account && masterChefContract && crops) {
      fetchBalance()
    }
  }, [account, block, masterChefContract, setBalance, crops])

  return balance
}

export default useEarnings
