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
    3: '0x0D985cC85A98e6F9cf5421DAaf937BF4EdE4d709',
    //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
  },
  masterChef: {
    3: '0xd0a62f584329Ed7272225d33186d52d5311987Af',
    //42: '0xEFa7b6952535b70807ce012D19D13d18970Bb58d',
  },  
  weth: {
    3: '0xc778417e063141139fce010982780140aa0cd5ab',
    //42: '0x2bfCCE707529264856d87DEeeeB64cdcFf755a84',
  },
}


export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      3:'0x985a7a208993e4cc96b1c57d946ebf0083f2671f',
      //42: '0x85b92eb6c67789f60a1b6b0d934196a2c35aa46f',
    },
    tokenAddresses: {
      3:'0x0D985cC85A98e6F9cf5421DAaf937BF4EdE4d709',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    name: 'CROPS-ETH',
    symbol: 'CROPS-ETH UNI-V2 LP',
    tokenSymbol: 'CROPS',
    icon: '🥕',
  },

  {
    pid: 1,
    lpAddresses: {
      3:'0x985a7a208993e4cc96b1c57d946ebf0083f2671f',
      //42: '0x85b92eb6c67789f60a1b6b0d934196a2c35aa46f',
    },
    tokenAddresses: {
      3:'0x0D985cC85A98e6F9cf5421DAaf937BF4EdE4d709',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    name: 'CROPS-ETH',
    symbol: 'CROPS-ETH UNI-V2 LP-3',
    tokenSymbol: 'CROPS',
    icon: '🥕',
  },
  {
    pid: 2,
    lpAddresses: {
      3:'0x985a7a208993e4cc96b1c57d946ebf0083f2671f',
      //42: '0x85b92eb6c67789f60a1b6b0d934196a2c35aa46f',
    },
    tokenAddresses: {
      3:'0x0D985cC85A98e6F9cf5421DAaf937BF4EdE4d709',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    name: 'CROPS-ETH',
    symbol: 'CROPS-ETH UNI-V2 LP-7',
    tokenSymbol: 'CROPS',
    icon: '🥕',
  },
  {
    pid: 3,
    lpAddresses: {
      3:'0x985a7a208993e4cc96b1c57d946ebf0083f2671f',
      //42: '0x85b92eb6c67789f60a1b6b0d934196a2c35aa46f',
    },
    tokenAddresses: {
      3:'0x0D985cC85A98e6F9cf5421DAaf937BF4EdE4d709',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    name: 'CROPS-USDC',
    symbol: 'CROPS-USDC UNI-V2 LP',
    tokenSymbol: 'USDC',
    icon: '🥦',
  },
  {
    pid: 4,
    lpAddresses: {
      3:'0x985a7a208993e4cc96b1c57d946ebf0083f2671f',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
    },
    tokenAddresses: {
      3:'0x0D985cC85A98e6F9cf5421DAaf937BF4EdE4d709',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    name: 'CROPS-WBTC',
    symbol: 'CROPS-WBTC UNI-V2 LP',
    tokenSymbol: 'WBTC',
    icon: '🐊',
  },
  {
    pid: 5,
    lpAddresses: {
      3:'0x985a7a208993e4cc96b1c57d946ebf0083f2671f',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
    },
    tokenAddresses: {
      3:'0x0D985cC85A98e6F9cf5421DAaf937BF4EdE4d709',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    name: 'CROPS-SURF',
    symbol: 'CROPS-SURF UNI-V2 LP',
    tokenSymbol: 'SURF',
    icon: '🍠',
  }  
]