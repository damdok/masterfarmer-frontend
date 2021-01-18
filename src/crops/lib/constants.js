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
    3: '0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
    //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
  },
  masterChef: {
    3: '0x9489733bE7A439A13606eeC2FbbB95aa4a4b9fE9',
    //42: '0xEFa7b6952535b70807ce012D19D13d18970Bb58d',
    //1: '0x9cd44F132d3Ce92c9a4cBFc34581e11f1424fd26',//deployed
  },
  autodeposit: {
    3: '0xE6cCE927174249877dE4b68a0258B04b549E58f9', 
    //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    //1: '0x04dA62bd8F17fA294503f6819fb7d1b0edcB4355',//deployed
  }, 
  weth: {    
    //1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',//Mainnet
    //42: 0xd0a1e359811322d97991e03f863a0c30c2cf029c,//Kovan
    3: '0xc778417e063141139fce010982780140aa0cd5ab',//Ropsten
    //Rinkeby: 0xc778417e063141139fce010982780140aa0cd5ab,//Rinkeby
  },
}


export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      3:'0x882ce7f46e0a8c8737217cf969654eb7c68e2f6b',
      //42: '0x85b92eb6c67789f60a1b6b0d934196a2c35aa46f',
      //1: '0xb2479047528fe453eae9cfbf86c1ed1fb05e0d15',//deployed
    },
    tokenAddresses: {
      3:'0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
      //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
    },
    name: 'ETH-CROPS',
    symbol: 'ETH-CROPS UNI-V2 LP',
    tokenSymbol: 'CROPS',
    icon: '🥕',
  },  
  {
    pid: 1,
    lpAddresses: {
      3:'0x2e34f5419c757eB86CDCfB7dECb668c89a76A39E',
      //42: '0x85b92eb6c67789f60a1b6b0d934196a2c35aa46f',
      //1: '0x1880e9ff4de190a89e4c974555d16eda76a816d0',//deployed
    },
    tokenAddresses: {
      3:'0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
      //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
    },
    name: 'USDC-CROPS',
    symbol: 'USDC-CROPS UNI-V2 LP',
    tokenSymbol: 'USDC',
    icon: '🥦',
  },
  {
    pid: 2,
    lpAddresses: {
      3:'0x2e34f5419c757eB86CDCfB7dECb668c89a76A39E',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //1: '0x342b9f34e2f8d6ac03153c2c14725ff7cbe9c319',//deployed
    },
    tokenAddresses: {
      3:'0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
      //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
    },
    name: 'WBTC-CROPS',
    symbol: 'WBTC-CROPS UNI-V2 LP',
    tokenSymbol: 'WBTC',
    icon: '🐊',
  },
  {
    pid: 3,
    lpAddresses: {
      3:'0x2e34f5419c757eB86CDCfB7dECb668c89a76A39E',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //1: '0xe54a82e9f70831a8c8f6761d90d59b274b9f756f',//deployed
    },
    tokenAddresses: {
      3:'0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
      //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
    },
    name: 'SURF-CROPS',
    symbol: 'SURF-CROPS UNI-V2 LP',
    tokenSymbol: 'SURF',
    icon: '🍠',
  },
  {
    pid: 4,
    lpAddresses: {
      3:'0x2e34f5419c757eB86CDCfB7dECb668c89a76A39E',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //1: '0x5a28f5ebd040db0a8755aec44bea6912bffabcf4',//deployed
    },
    tokenAddresses: {
      3:'0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
      //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
    },
    name: 'MFT-CROPS',
    symbol: 'MFT-CROPS UNI-V2 LP',
    tokenSymbol: 'MFT',
    icon: '🍠',
  },
  {
    pid: 5,
    lpAddresses: {
      3:'0x2e34f5419c757eB86CDCfB7dECb668c89a76A39E',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //1: '0x27d0985051df5911b41225214b1255b709dfbfc6',//deployed
    },
    tokenAddresses: {
      3:'0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
      //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
    },
    name: 'BADGER-CROPS',
    symbol: 'BADGER-CROPS UNI-V2 LP',
    tokenSymbol: 'BADGER',
    icon: '🍠',
  },
  {
    pid: 6,
    lpAddresses: {
      3:'0x2e34f5419c757eB86CDCfB7dECb668c89a76A39E',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //1: '0x8d47e4b88c7465320ce6bd32981a8ea0015853e5',//deployed
    },
    tokenAddresses: {
      3:'0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
      //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
    },
    name: 'YFI-CROPS',
    symbol: 'YFI-CROPS UNI-V2 LP',
    tokenSymbol: 'YFI',
    icon: '🍠',
  },
  {
    pid: 7,
    lpAddresses: {
      3:'0x2e34f5419c757eB86CDCfB7dECb668c89a76A39E',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //1: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    tokenAddresses: {
      3:'0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
      //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
    },
    name: 'DRC-CROPS',
    symbol: 'DRC-CROPS UNI-V2 LP',
    tokenSymbol: 'DRC',
    icon: '🍠',
  },
  {
    pid: 8,
    lpAddresses: {
      3:'0x2e34f5419c757eB86CDCfB7dECb668c89a76A39E',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //1: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    tokenAddresses: {
      3:'0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
      //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
    },
    name: 'FARM-CROPS',
    symbol: 'FARM-CROPS UNI-V2 LP',
    tokenSymbol: 'FARM',
    icon: '🍠',
  },
  {
    pid: 9,
    lpAddresses: {
      3:'0x2e34f5419c757eB86CDCfB7dECb668c89a76A39E',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //1: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    tokenAddresses: {
      3:'0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
      //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
    },
    name: 'LUA-CROPS',
    symbol: 'LUA-CROPS UNI-V2 LP',
    tokenSymbol: 'LUA',
    icon: '🍠',
  },
  {
    pid: 10,
    lpAddresses: {
      3:'0x2e34f5419c757eB86CDCfB7dECb668c89a76A39E',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //1: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    tokenAddresses: {
      3:'0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
      //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
    },
    name: 'NICE-CROPS',
    symbol: 'NICE-CROPS UNI-V2 LP',
    tokenSymbol: 'NICE',
    icon: '🍠',
  },
  {
    pid: 11,
    lpAddresses: {
      3:'0x2e34f5419c757eB86CDCfB7dECb668c89a76A39E',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //1: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    tokenAddresses: {
      3:'0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
      //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
    },
    name: 'PICKLE-CROPS',
    symbol: 'PICKLE-CROPS UNI-V2 LP',
    tokenSymbol: 'PICKLE',
    icon: '🍠',
  },
  {
    pid: 12,
    lpAddresses: {
      3:'0x2e34f5419c757eB86CDCfB7dECb668c89a76A39E',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //1: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    tokenAddresses: {
      3:'0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
      //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
    },
    name: 'ROT-CROPS',
    symbol: 'ROT-CROPS UNI-V2 LP',
    tokenSymbol: 'ROT',
    icon: '🍠',
  },
  {
    pid: 13,
    lpAddresses: {
      3:'0x2e34f5419c757eB86CDCfB7dECb668c89a76A39E',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //1: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    tokenAddresses: {
      3:'0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
      //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
    },
    name: 'SUSHI-CROPS',
    symbol: 'SUSHI-CROPS UNI-V2 LP',
    tokenSymbol: 'SUSHI',
    icon: '🍠',
  },
  {
    pid: 14,
    lpAddresses: {
      3:'0x2e34f5419c757eB86CDCfB7dECb668c89a76A39E',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //1: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    tokenAddresses: {
      3:'0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
      //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
    },
    name: 'TOMOE-CROPS',
    symbol: 'TOMOE-CROPS UNI-V2 LP',
    tokenSymbol: 'TOMOE',
    icon: '🍠',
  },
  {
    pid: 15,
    lpAddresses: {
      3:'0x2e34f5419c757eB86CDCfB7dECb668c89a76A39E',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //1: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    tokenAddresses: {
      3:'0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
      //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
    },
    name: 'DRC-ETH',
    symbol: 'DRC-ETH UNI-V2 LP',
    tokenSymbol: 'DRC',
    icon: '🍠',
  },
  {
    pid: 16,
    lpAddresses: {
      3:'0x2e34f5419c757eB86CDCfB7dECb668c89a76A39E',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //1: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    tokenAddresses: {
      3:'0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
      //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
    },
    name: 'FARM-USDC',
    symbol: 'FARM-USDC UNI-V2 LP',
    tokenSymbol: 'USDC',
    icon: '🍠',
  },
  {
    pid: 17,
    lpAddresses: {
      3:'0x2e34f5419c757eB86CDCfB7dECb668c89a76A39E',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //1: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    tokenAddresses: {
      3:'0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
      //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
    },
    name: 'LUA-ETH',
    symbol: 'LUA-ETH UNI-V2 LP',
    tokenSymbol: 'LUA',
    icon: '🍠',
  },
  {
    pid: 18,
    lpAddresses: {
      3:'0x2e34f5419c757eB86CDCfB7dECb668c89a76A39E',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //1: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    tokenAddresses: {
      3:'0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
      //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
    },
    name: 'NICE-ETH',
    symbol: 'NICE-ETH UNI-V2 LP',
    tokenSymbol: 'NICE',
    icon: '🍠',
  },
  {
    pid: 19,
    lpAddresses: {
      3:'0x2e34f5419c757eB86CDCfB7dECb668c89a76A39E',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //1: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    tokenAddresses: {
      3:'0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
      //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
    },
    name: 'PICKLE-ETH',
    symbol: 'PICKLE-ETH UNI-V2 LP',
    tokenSymbol: 'PICKLE',
    icon: '🍠',
  },
  {
    pid: 20,
    lpAddresses: {
      3:'0x2e34f5419c757eB86CDCfB7dECb668c89a76A39E',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //1: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    tokenAddresses: {
      3:'0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
      //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
    },
    name: 'ROT-ETH',
    symbol: 'ROT-ETH UNI-V2 LP',
    tokenSymbol: 'ROT',
    icon: '🍠',
  },
  {
    pid: 21,
    lpAddresses: {
      3:'0x2e34f5419c757eB86CDCfB7dECb668c89a76A39E',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //1: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    tokenAddresses: {
      3:'0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
      //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
    },
    name: 'SUSHI-ETH',
    symbol: 'SUSHI-ETH UNI-V2 LP',
    tokenSymbol: 'SUSHI',
    icon: '🍠',
  },
  {
    pid: 22,
    lpAddresses: {
      3:'0x2e34f5419c757eB86CDCfB7dECb668c89a76A39E',
      //42: '0x66412bbbe59af66a56357fc348e3c33f1788daa3',
      //1: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
    },
    tokenAddresses: {
      3:'0x8F23fFa479beCBaD06819D1073EeD5B499f27282',
      //42: '0x02CECED9749cAfC8473468a51F9BE0b61a2a0542',
      //1: '0x9766d2e3f04AE13e8c2EB018eA51dC640d3f9f1F',//deployed
    },
    name: 'TOMOE-USDC',
    symbol: 'TOMOE-USDC UNI-V2 LP',
    tokenSymbol: 'TOMOE',
    icon: '🍠',
  }

]