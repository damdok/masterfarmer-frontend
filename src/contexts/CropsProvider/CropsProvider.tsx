import React, { createContext, useEffect, useState } from 'react'

import { useWallet } from 'use-wallet'

import { Crops } from '../../crops'

export interface CropsContext {
  crops?: typeof Crops
}

export const Context = createContext<CropsContext>({
  crops: undefined,
})

declare global {
  interface Window {
    cropssauce: any
  }
}

const CropsProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [crops, setCrops] = useState<any>()

  // @ts-ignore
  window.crops = crops
  // @ts-ignore
  window.eth = ethereum

  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const cropsLib = new Crops(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setCrops(cropsLib)
      window.cropssauce = cropsLib
    }
  }, [ethereum])

  return <Context.Provider value={{ crops }}>{children}</Context.Provider>
}

export default CropsProvider
