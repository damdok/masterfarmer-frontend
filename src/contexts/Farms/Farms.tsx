import React, { useCallback, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'
import useCrops from '../../hooks/useCrops'

import { bnToDec } from '../../utils'
import { getMasterChefContract, getEarned } from '../../crops/utils'
import { getFarms } from '../../crops/utils'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const crops = useCrops()
  const { account } = useWallet()

  const farms = getFarms(crops)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
