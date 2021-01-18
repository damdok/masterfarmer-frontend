import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getPoolWeight, getMasterChefContract } from '../crops/utils'
import useCrops from './useCrops'
import useBlock from './useBlock'

const usePoolWeight = (pid: number) => {
  const [poolweight, setPoolWeight] = useState(new BigNumber(0))
  const { account }: { account: string } = useWallet()
  const crops = useCrops()
  const masterChefContract = getMasterChefContract(crops)
  const block = useBlock()

  const fetchPoolWeight = useCallback(async () => {
    const poolweight = await getPoolWeight(masterChefContract, pid)
    setPoolWeight(new BigNumber(poolweight))
  }, [account, pid, crops])

  useEffect(() => {
    if (account && crops) {
      fetchPoolWeight()
    }
  }, [account, pid, setPoolWeight, block, crops])

  return poolweight
}

export default usePoolWeight
