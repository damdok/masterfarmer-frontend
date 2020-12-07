import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getStaked, getMasterChefContract } from '../crops/utils'
import useCrops from './useCrops'
import useBlock from './useBlock'

const useStakedBalance = (pid: number) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const crops = useCrops()
  const masterChefContract = getMasterChefContract(crops)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    const balance = await getStaked(masterChefContract, pid, account)
    setBalance(new BigNumber(balance))
  }, [account, pid, crops])

  useEffect(() => {
    if (account && crops) {
      fetchBalance()
    }
  }, [account, pid, setBalance, block, crops])

  return balance
}

export default useStakedBalance
