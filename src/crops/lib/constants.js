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

export const contractAddresses = {
  crops: { 
    //3: '0x32AE4a28437298542dEb9307F8b5e627260228AE',
    42: '0x2f7224d8024389e978D982f87AA79859b4730496',
    //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa',//original
  },
  masterChef: {
    //3: '0x8AE90F580e26DA3e4C89105a3B824a8bBE9d720C',
    42: '0x56a18B8477132BdF6db6726f8A7800Fb4a4409a1',
    //42: '0x55d6cb2EC359Af488f3BC281F17054f8160f7d75',//original
  },  
  weth: {
    //3: '0x2D56ed810bb4Aa86b715f623615A34eE0DEA5bbC',
    42: '0x2bfCCE707529264856d87DEeeeB64cdcFf755a84',
    //42: '0xf3a6679b266899042276804930b3bfbaf807f15b',//original
  },
}


export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      //3:'0x3061B4ed5F462c2675ff6ADA1E3d5580A8b710E2',
      42: '0x22cf5d9d3ad561d0386717e919176C99776e1503',
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',//original
    },
    tokenAddresses: {
      //3:'0x32AE4a28437298542dEb9307F8b5e627260228AE',
      42: '0x2f7224d8024389e978D982f87AA79859b4730496',
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa',//original
    },
    name: 'CROPS-ETH',
    symbol: 'CROPS-ETH UNI-V2 LP',
    tokenSymbol: 'CROPS',
    icon: '🥕',
  },

  {
    pid: 1,
    lpAddresses: {
      //3:'0x3061B4ed5F462c2675ff6ADA1E3d5580A8b710E2',
      42: '0x22cf5d9d3ad561d0386717e919176C99776e1503',
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',//original
    },
    tokenAddresses: {
      //3:'0x32AE4a28437298542dEb9307F8b5e627260228AE',
      42: '0x2f7224d8024389e978D982f87AA79859b4730496',
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa',//original
    },
    name: 'CROPS-ETH',
    symbol: 'CROPS-ETH UNI-V2 LP-1',
    tokenSymbol: 'CROPS',
    icon: '🥕',
  },
  {
    pid: 2,
    lpAddresses: {
      //3:'0x3061B4ed5F462c2675ff6ADA1E3d5580A8b710E2',
      42: '0x22cf5d9d3ad561d0386717e919176C99776e1503',
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',//original
    },
    tokenAddresses: {
      //3:'0x32AE4a28437298542dEb9307F8b5e627260228AE',
      42: '0x2f7224d8024389e978D982f87AA79859b4730496',
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa',//original
    },
    name: 'CROPS-ETH',
    symbol: 'CROPS-ETH UNI-V2 LP-3',
    tokenSymbol: 'CROPS',
    icon: '🥕',
  },
  {
    pid: 3,
    lpAddresses: {
      //3:'0x3061B4ed5F462c2675ff6ADA1E3d5580A8b710E2',
      42: '0x22cf5d9d3ad561d0386717e919176C99776e1503',
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',//original
    },
    tokenAddresses: {
      //3:'0x32AE4a28437298542dEb9307F8b5e627260228AE',
      42: '0x2f7224d8024389e978D982f87AA79859b4730496',
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa',//original
    },
    name: 'CROPS-ETH',
    symbol: 'CROPS-ETH UNI-V2 LP-7',
    tokenSymbol: 'CROPS',
    icon: '🥕',
  },
  {
    pid: 4,
    lpAddresses: {
      //3:'0x3061B4ed5F462c2675ff6ADA1E3d5580A8b710E2',
      42: '0x22cf5d9d3ad561d0386717e919176C99776e1503',
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',//original
    },
    tokenAddresses: {
      //3:'0x32AE4a28437298542dEb9307F8b5e627260228AE',
      42: '0x2f7224d8024389e978D982f87AA79859b4730496',
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa',//original
    },
    name: 'CROPS-USDC',
    symbol: 'CROPS-USDC UNI-V2 LP',
    tokenSymbol: 'USDC',
    icon: '🥦',
  },
  {
    pid: 5,
    lpAddresses: {
      //3:'0x3061B4ed5F462c2675ff6ADA1E3d5580A8b710E2',
      42: '0x22cf5d9d3ad561d0386717e919176C99776e1503',
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',//original
    },
    tokenAddresses: {
      //3:'0x32AE4a28437298542dEb9307F8b5e627260228AE',
      42: '0x2f7224d8024389e978D982f87AA79859b4730496',
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa',//original
    },
    name: 'CROPS-USDC',
    symbol: 'CROPS-USDC UNI-V2 LP-1',
    tokenSymbol: 'USDC',
    icon: '🥦',
  },
  {
    pid: 6,
    lpAddresses: {
      //3:'0x3061B4ed5F462c2675ff6ADA1E3d5580A8b710E2',
      42: '0x22cf5d9d3ad561d0386717e919176C99776e1503',
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',//original
    },
    tokenAddresses: {
      //3:'0x32AE4a28437298542dEb9307F8b5e627260228AE',
      42: '0x2f7224d8024389e978D982f87AA79859b4730496',
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa',//original
    },
    name: 'CROPS-USDC',
    symbol: 'CROPS-USDC UNI-V2 LP-3',
    tokenSymbol: 'USDC',
    icon: '🥦',
  },
  {
    pid: 7,
    lpAddresses: {
      //3:'0x3061B4ed5F462c2675ff6ADA1E3d5580A8b710E2',
      42: '0x22cf5d9d3ad561d0386717e919176C99776e1503',
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',//original
    },
    tokenAddresses: {
      //3:'0x32AE4a28437298542dEb9307F8b5e627260228AE',
      42: '0x2f7224d8024389e978D982f87AA79859b4730496',
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa',//original
    },
    name: 'CROPS-USDC',
    symbol: 'CROPS-USDC UNI-V2 LP-7',
    tokenSymbol: 'USDC',
    icon: '🥦',
  },
]