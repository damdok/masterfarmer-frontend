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
    3: '0xA74545CE0bdDb063c4b468B89CE9630F28B75e64',
    //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa',//original
  },
  masterChef: {
    3: '0x6180BD5fE983dB9aC6dc39f8829c491d66d91db9',
    //42: '0xEFa7b6952535b70807ce012D19D13d18970Bb58d',
    //42: '0x55d6cb2EC359Af488f3BC281F17054f8160f7d75',//original
  },  
  weth: {
    3: '0x2D56ed810bb4Aa86b715f623615A34eE0DEA5bbC',
    //42: '0x2bfCCE707529264856d87DEeeeB64cdcFf755a84',
    //42: '0xf3a6679b266899042276804930b3bfbaf807f15b',//original
  },
}


export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      3:'0x431e9526d0282ce7d0a12b19e8cce3c58f384677',
      //42: '0x85b92eb6c67789f60a1b6b0d934196a2c35aa46f',
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',//original
    },
    tokenAddresses: {
      3:'0xA74545CE0bdDb063c4b468B89CE9630F28B75e64',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
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
      3:'0x431e9526d0282ce7d0a12b19e8cce3c58f384677',
      //42: '0x85b92eb6c67789f60a1b6b0d934196a2c35aa46f',
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',//original
    },
    tokenAddresses: {
      3:'0xA74545CE0bdDb063c4b468B89CE9630F28B75e64',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
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
      3:'0x431e9526d0282ce7d0a12b19e8cce3c58f384677',
      //42: '0x85b92eb6c67789f60a1b6b0d934196a2c35aa46f',
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',//original
    },
    tokenAddresses: {
      3:'0xA74545CE0bdDb063c4b468B89CE9630F28B75e64',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
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
      3:'0x431e9526d0282ce7d0a12b19e8cce3c58f384677',
      //42: '0x85b92eb6c67789f60a1b6b0d934196a2c35aa46f',
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',//original
    },
    tokenAddresses: {
      3:'0xA74545CE0bdDb063c4b468B89CE9630F28B75e64',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
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
      3:'0x431e9526d0282ce7d0a12b19e8cce3c58f384677',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',//original
    },
    tokenAddresses: {
      3:'0xA74545CE0bdDb063c4b468B89CE9630F28B75e64',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
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
      3:'0x431e9526d0282ce7d0a12b19e8cce3c58f384677',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',//original
    },
    tokenAddresses: {
      3:'0xA74545CE0bdDb063c4b468B89CE9630F28B75e64',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
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
      3:'0x431e9526d0282ce7d0a12b19e8cce3c58f384677',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',//original
    },
    tokenAddresses: {
      3:'0xA74545CE0bdDb063c4b468B89CE9630F28B75e64',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
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
      3:'0x431e9526d0282ce7d0a12b19e8cce3c58f384677',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',//original
    },
    tokenAddresses: {
      3:'0xA74545CE0bdDb063c4b468B89CE9630F28B75e64',
      //42: '0x2f7224d8024389e978D982f87AA79859b4730496',
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa',//original
    },
    name: 'CROPS-USDC',
    symbol: 'CROPS-USDC UNI-V2 LP-7',
    tokenSymbol: 'USDC',
    icon: '🥦',
  },
]