import BigNumber from 'bignumber.js'
import { ethers } from 'ethers'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const GAS_LIMIT = {
  STAKING: {
    DEFAULT: 200000,
    SNX: 850000,
  },
}

export const getMasterChefAddress = (crops) => {
  return crops && crops.masterChefAddress
}
export const getCrops = (crops) => {
  return crops && crops.contracts
}
export const getCropsAddress = (crops) => {                                           
  return crops && crops.cropsAddress
}
export const getWethContract = (crops) => {
  return crops && crops.contracts && crops.contracts.weth
}
export const getAutoDepositContract = (crops) => {
  return crops && crops.contracts && crops.contracts.autodeposit
}
export const getMasterChefContract = (crops) => {
  return crops && crops.contracts && crops.contracts.masterChef
}
export const getCropsContract = (crops) => {
  return crops && crops.contracts && crops.contracts.crops
}
export const getFarms = (crops) => {
  return crops
    ? crops.contracts.pools.map(
        ({
          pid,
          name,
          symbol,
          icon,
          tokenAddress,
          tokenSymbol,
          tokenContract,
          lpAddress,
          lpContract,
        }) => ({
          pid,
          id: symbol,
          name,
          lpToken: symbol,
          lpTokenAddress: lpAddress,
          lpContract,
          tokenAddress,
          tokenSymbol,
          tokenContract,
          earnToken: 'crops',
          earnTokenAddress: crops.contracts.crops.options.address,
          icon,
        }),
      )
    : []
}

export const getPoolWeight = async (masterChefContract, pid) => {
  const { allocPoint } = await masterChefContract.methods.poolInfo(pid).call()
  const totalAllocPoint = await masterChefContract.methods
    .totalAllocPoint()
    .call()
  return allocPoint*1e20/totalAllocPoint
}



export const getTotalLPWethValue = async (
  masterChefContract,
  wethContract,
  lpContract,
  tokenContract,
  pid,
) => {
  // Get balance of the token address
  const tokenAmountWholeLP = await tokenContract.methods
    .balanceOf(lpContract.options.address)
    .call()
  const tokenDecimals = await tokenContract.methods.decimals().call()
  // Get the share of lpContract that masterChefContract owns
  const balance = await lpContract.methods
    .balanceOf(masterChefContract.options.address)
    .call()
  // Convert that into the portion of total lpContract = p1
  const totalSupply = await lpContract.methods.totalSupply().call()
  // Get total weth value for the lpContract = w1
  const lpContractWeth = await wethContract.methods
    .balanceOf(lpContract.options.address)
    .call()
  // Return p1 * w1 * 2
  const portionLp = new BigNumber(balance).div(new BigNumber(totalSupply))
  const lpWethWorth = new BigNumber(lpContractWeth)
  const totalLpWethValue = portionLp.times(lpWethWorth).times(new BigNumber(2))
  // Calculate
  const tokenAmount = new BigNumber(tokenAmountWholeLP)
    .times(portionLp)
    .div(new BigNumber(10).pow(tokenDecimals))

  const wethAmount = new BigNumber(lpContractWeth)
    .times(portionLp)
    .div(new BigNumber(10).pow(18))
  return {
    tokenAmount,
    wethAmount,
    tokenAmountWholeLP,
    portionLp,
    lpContractWeth,
    totalWethValue: totalLpWethValue.div(new BigNumber(10).pow(18)),
    tokenPriceInWeth: wethAmount.div(tokenAmount),
    poolWeight: await getPoolWeight(masterChefContract, pid),
  }
}

export const approve = async (lpContract, masterChefContract, account) => {
  return lpContract.methods
    .approve(masterChefContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account })
}

export const getCropsSupply = async (crops) => {
  return new BigNumber(await crops.contracts.crops.methods.totalSupply().call())
}

export const stake = async (masterChefContract, pid, amount, account) => {
  return masterChefContract.methods
    .deposit(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {      
      //console.log(tx)
      return tx.transactionHash
    })
}

export const unstake = async (masterChefContract, pid, amount, account) => {
  return masterChefContract.methods
    .withdraw(
      pid,
      new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(),
    )
    .send({ from: account })
    .on('transactionHash', (tx) => {   
      //console.log(tx)
      return tx.transactionHash
    })
}

export const harvest = async (masterChefContract, pid, account) => {
  return masterChefContract.methods
    .deposit(pid, '0')
    .send({ from: account })
    .on('transactionHash', (tx) => {
      //console.log(tx)
      return tx.transactionHash
    })
}

export const getStaked = async (masterChefContract, pid, account) => {
  try {
    const { amount } = await masterChefContract.methods
      .userInfo(pid, account)
      .call()
    return new BigNumber(amount)
  } catch {
    return new BigNumber(0)
  }
}

export const getEarned = async (masterChefContract, pid, account) => {
  try {
    return await masterChefContract.methods
      .pendingCrops(pid, account)
      .call()
  } catch {
    return new BigNumber(0)
  }
}

export const totalBurn = async (masterChefContract, account) => {
  try {
    const state = await masterChefContract.methods
      .globalDecay()
      .send({ from: account })
      .on('transactionHash', (tx) => {
        //console.log(tx)
        return tx.transactionHash
      })
  } catch {
    return false
  }
}

export const redeem = async (masterChefContract, account) => {
  let now = new Date().getTime() / 1000
  if (now >= 1597172400) {
    return masterChefContract.methods
      .exit()
      .send({ from: account })
      .on('transactionHash', (tx) => {
        //console.log(tx)
        return tx.transactionHash
      })
  } else {
    alert('pool not active')
  }
}


export const totalgetStaked = async (masterChefContract, account) => {
  try {
    let totalgetStakedamount = 0    
    for(var i = 0; i < 6; i++){
      const { amount } = await masterChefContract.methods
      .userInfo(i, account)
      .call()
      totalgetStakedamount += amount
    }    
    return new BigNumber(totalgetStakedamount)
  } catch {
    return new BigNumber(0)
  }
}


export const autodeposit = async (autodepositContract, amount, account) => {  
  return autodepositContract.methods
    .depositInto()
    .send({ from: account, value: new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(), gas: 1500000,  gasPrice: '3000000' })
    .on('transactionHash', (tx) => {
      //console.log(tx)
      return tx.transactionHash
    })
}

export const buycrops = async (autodepositContract, amount, account) => {
  return autodepositContract.methods
    .buyCrops()
    .send({ from: account, value: new BigNumber(amount).times(new BigNumber(10).pow(18)).toString(), gas: 1500000,  gasPrice: '3000000' })
    .on('transactionHash', (tx) => {
      //console.log(tx)
      return tx.transactionHash
    })
}

export const getdecaytime = async (masterChefContract) => {
  return await masterChefContract.methods.timestart().call()
}
