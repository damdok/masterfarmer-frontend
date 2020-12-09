import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  CROPSYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
}

export const contractAddresses = {
  crops: { 
    // 1: '0xb62aA4756d5911C9Aa899Dd01285753166d583E9',//when mint crops token, we should change this address // mainnet
    // 3: '0x94d9f606b8821921fd12279fc7e55976e4f43fac',//when mint crops token, we should change this address // ropsten
    //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa',//when mint crops token, we should change this address // kovan
    3: '0xfd6Fc55B53bc024d5Cf0f49FB6EA880B8A6F27F6',
  },
  masterChef: {
    //42: '0x55d6cb2EC359Af488f3BC281F17054f8160f7d75', //when mint crops token, we should change this address // mainnet
     3: '0xa8bf968c0d0ef8e5b2edb081fdca1f03b1e2096b', //when mint crops token, we should change this address // ropsten
    //42: '0x857b4e3Ad0b27d18A97F3A45217aad844695f3B6',
  },  
  weth: {
    // 1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    //42: '0xf3a6679b266899042276804930b3bfbaf807f15b',
    3: '0x4De39752BE165Fa535878018FB3E3Ec9e855d1a2',
  },
}

/*
UNI-V2 LP Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc
2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11
3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c
4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47  
7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
10 AMPL 0xc5be99a02c6857f9eac607bbce58df5572498f40c
11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28
12 CROPS 0xce84867c3c02b05dc570d0135103d3fb9cc19433
*/

/*
UNI-V2 LP Address on kovan for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
1  USDC 0x7079f3762805cff9c979a5bdc6f5648bcfee76c8
2  CROPS 0xB940Bb8967beB011C1D7f826a3f3B4894dDBd4f8
3  WETH 0xF3A6679B266899042276804930B3bFBaf807F15b 
*/

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',
      3: '0xBa23015D0285457F6DeD8bB9E9C86662F3282932',
    },
    tokenAddresses: {
      // 1: '0xb62aA4756d5911C9Aa899Dd01285753166d583E9', // contract address
      // 3: '0x94d9f606b8821921fd12279fc7e55976e4f43fac',
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa', // contract address      
      3: '0xfd6Fc55B53bc024d5Cf0f49FB6EA880B8A6F27F6',

    },
    name: 'CROPS-ETH',
    symbol: 'CROPS-ETH UNI-V2 LP',
    tokenSymbol: 'CROPS',
    icon: '🥕',
  },

  {
    pid: 1,
    lpAddresses: {
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',
      3: '0xBa23015D0285457F6DeD8bB9E9C86662F3282932',
    },
    tokenAddresses: {
      // 1: '0xb62aA4756d5911C9Aa899Dd01285753166d583E9',
      // 3: '0x94d9f606b8821921fd12279fc7e55976e4f43fac',
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa', // contract address
      3: '0xfd6Fc55B53bc024d5Cf0f49FB6EA880B8A6F27F6',
    },
    name: 'CROPS-ETH',
    symbol: 'CROPS-ETH UNI-V2 LP-1',
    tokenSymbol: 'CROPS',
    icon: '🥕',
  },
  {
    pid: 2,
    lpAddresses: {
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',
      3: '0xBa23015D0285457F6DeD8bB9E9C86662F3282932',
    },
    tokenAddresses: {
      // 1: '0xb62aA4756d5911C9Aa899Dd01285753166d583E9',
      // 3: '0x94d9f606b8821921fd12279fc7e55976e4f43fac',
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa', // contract address
      3: '0xfd6Fc55B53bc024d5Cf0f49FB6EA880B8A6F27F6',
    },
    name: 'CROPS-ETH',
    symbol: 'CROPS-ETH UNI-V2 LP-3',
    tokenSymbol: 'CROPS',
    icon: '🥕',
  },
  {
    pid: 3,
    lpAddresses: {
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',
      3: '0xBa23015D0285457F6DeD8bB9E9C86662F3282932',
    },
    tokenAddresses: {
      // 1: '0xb62aA4756d5911C9Aa899Dd01285753166d583E9',
      // 3: '0x94d9f606b8821921fd12279fc7e55976e4f43fac',
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa', // contract address
      3: '0xfd6Fc55B53bc024d5Cf0f49FB6EA880B8A6F27F6',
    },
    name: 'CROPS-ETH',
    symbol: 'CROPS-ETH UNI-V2 LP-7',
    tokenSymbol: 'CROPS',
    icon: '🥕',
  },
  {
    pid: 4,
    lpAddresses: {
      // 1: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
      //42: '0x3ff949b50691d71d9c159d33fa91656ebb454855',
      3: '0xBa23015D0285457F6DeD8bB9E9C86662F3282932',
    },
    tokenAddresses: {
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa',
      3: '0xfd6Fc55B53bc024d5Cf0f49FB6EA880B8A6F27F6',
    },
    name: 'CROPS-USDC',
    symbol: 'CROPS-USDC UNI-V2 LP',
    tokenSymbol: 'USDC',
    icon: '🥦',
  },
  {
    pid: 5,
    lpAddresses: {
      // 1: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
      //42: '0x3ff949b50691d71d9c159d33fa91656ebb454855',
      3: '0xBa23015D0285457F6DeD8bB9E9C86662F3282932',
    },
    tokenAddresses: {
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa',
      3: '0xfd6Fc55B53bc024d5Cf0f49FB6EA880B8A6F27F6',
    },
    name: 'CROPS-USDC',
    symbol: 'CROPS-USDC UNI-V2 LP-1',
    tokenSymbol: 'USDC',
    icon: '🥦',
  },
  {
    pid: 6,
    lpAddresses: {
      // 1: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
      //42: '0x3ff949b50691d71d9c159d33fa91656ebb454855',
      3: '0xBa23015D0285457F6DeD8bB9E9C86662F3282932',
    },
    tokenAddresses: {
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa',
      3: '0xfd6Fc55B53bc024d5Cf0f49FB6EA880B8A6F27F6',
    },
    name: 'CROPS-USDC',
    symbol: 'CROPS-USDC UNI-V2 LP-3',
    tokenSymbol: 'USDC',
    icon: '🥦',
  },
  {
    pid: 7,
    lpAddresses: {
      // 1: '0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc',
      //42: '0x3ff949b50691d71d9c159d33fa91656ebb454855',
      3: '0xBa23015D0285457F6DeD8bB9E9C86662F3282932',
    },
    tokenAddresses: {
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa',
      3: '0xfd6Fc55B53bc024d5Cf0f49FB6EA880B8A6F27F6',
    },
    name: 'CROPS-USDC',
    symbol: 'CROPS-USDC UNI-V2 LP-7',
    tokenSymbol: 'USDC',
    icon: '🥦',
  },
]
