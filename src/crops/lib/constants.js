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
      // 1: '0xb62aA4756d5911C9Aa899Dd01285753166d583E9',//when mint crops token, we should change this address // mainnet
       //3: '0xA4F56EA167E1643414d9a8741C22958EE66b3C93',//when mint crops token, we should change this address // ropsten      
       //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa',//when mint crops token, we should change this address // kovan
       3: '0x00a439eC9b925AC1CbBd6DCe580Fc3FA981e882C',
    },
    masterChef: {
      //42: '0x55d6cb2EC359Af488f3BC281F17054f8160f7d75', //when mint crops token, we should change this address // mainnet
      //3: '0xC1c1809112d349A78f9ba7A157fAfafDFd0A0cD2', //when mint crops token, we should change this address // ropsten
      3: '0xaf49Fdc024d3CDA45Ae4B0f97256fd25ae24A5F9',
    },  
    weth: {
      // 1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      //3: '0xD2D2B00B3D5C1dbDd9232debbB5B8625310742C6',
      //42: '0xf3a6679b266899042276804930b3bfbaf807f15b',
      3: '0xA4F56EA167E1643414d9a8741C22958EE66b3C93',
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
      //1: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
      3:'0x559CfBF7f59D551b5dd488C769eEc7ea6Aa4f7Bb',
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',
    },
    tokenAddresses: {
      // 1: '0xb62aA4756d5911C9Aa899Dd01285753166d583E9', // contract address
       3: '0x00a439eC9b925AC1CbBd6DCe580Fc3FA981e882C',
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa', // contract address
    },
    name: 'CROPS-ETH',
    symbol: 'CROPS-ETH UNI-V2 LP',
    tokenSymbol: 'CROPS',
    icon: '🥕',
  },

  {
    pid: 1,
    lpAddresses: {
      //1: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
      3:'0x559CfBF7f59D551b5dd488C769eEc7ea6Aa4f7Bb',
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',
    },
    tokenAddresses: {
      // 1: '0xb62aA4756d5911C9Aa899Dd01285753166d583E9',
       3: '0x00a439eC9b925AC1CbBd6DCe580Fc3FA981e882C',
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa', // contract address
    },
    name: 'CROPS-ETH',
    symbol: 'CROPS-ETH UNI-V2 LP-1',
    tokenSymbol: 'CROPS',
    icon: '🥕',
  },
  {
    pid: 2,
    lpAddresses: {
      //1: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
      3:'0x559CfBF7f59D551b5dd488C769eEc7ea6Aa4f7Bb',
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',
    },
    tokenAddresses: {
      // 1: '0xb62aA4756d5911C9Aa899Dd01285753166d583E9',
       3: '0x00a439eC9b925AC1CbBd6DCe580Fc3FA981e882C',
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa', // contract address
    },
    name: 'CROPS-ETH',
    symbol: 'CROPS-ETH UNI-V2 LP-3',
    tokenSymbol: 'CROPS',
    icon: '🥕',
  },
  {
    pid: 3,
    lpAddresses: {
      //1: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
      3:'0x559CfBF7f59D551b5dd488C769eEc7ea6Aa4f7Bb',
      //42: '0x8aab1e7bb5b173ae809c6a0a9b769985d1b0d789',
    },
    tokenAddresses: {
      // 1: '0xb62aA4756d5911C9Aa899Dd01285753166d583E9',
       3: '0x00a439eC9b925AC1CbBd6DCe580Fc3FA981e882C',
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa', // contract address
    },
    name: 'CROPS-ETH',
    symbol: 'CROPS-ETH UNI-V2 LP-7',
    tokenSymbol: 'CROPS',
    icon: '🥕',
  },
  {
    pid: 4,
    lpAddresses: {
      //1: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
      3:'0x559CfBF7f59D551b5dd488C769eEc7ea6Aa4f7Bb',
      //42: '0x3ff949b50691d71d9c159d33fa91656ebb454855',
    },
    tokenAddresses: {
       3: '0x00a439eC9b925AC1CbBd6DCe580Fc3FA981e882C',
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa',
    },
    name: 'CROPS-USDC',
    symbol: 'CROPS-USDC UNI-V2 LP',
    tokenSymbol: 'USDC',
    icon: '🥦',
  },
  {
    pid: 5,
    lpAddresses: {
      //1: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
      3:'0x559CfBF7f59D551b5dd488C769eEc7ea6Aa4f7Bb',
      //42: '0x3ff949b50691d71d9c159d33fa91656ebb454855',
    },
    tokenAddresses: {
       3: '0x00a439eC9b925AC1CbBd6DCe580Fc3FA981e882C',
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa',
    },
    name: 'CROPS-USDC',
    symbol: 'CROPS-USDC UNI-V2 LP-1',
    tokenSymbol: 'USDC',
    icon: '🥦',
  },
  {
    pid: 6,
    lpAddresses: {
      //1: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
    3:'0x559CfBF7f59D551b5dd488C769eEc7ea6Aa4f7Bb',
      //42: '0x3ff949b50691d71d9c159d33fa91656ebb454855',
    },
    tokenAddresses: {
        3: '0x00a439eC9b925AC1CbBd6DCe580Fc3FA981e882C',
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa',
    },
    name: 'CROPS-USDC',
    symbol: 'CROPS-USDC UNI-V2 LP-3',
    tokenSymbol: 'USDC',
    icon: '🥦',
  },
  {
    pid: 7,
    lpAddresses: {
      //1: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
      3:'0x559CfBF7f59D551b5dd488C769eEc7ea6Aa4f7Bb',
      //42: '0x3ff949b50691d71d9c159d33fa91656ebb454855',
    },
    tokenAddresses: {
        3: '0x00a439eC9b925AC1CbBd6DCe580Fc3FA981e882C',
      //42: '0x6c524656cf44ce483f867b401983f5F2D00eEDFa',
    },
    name: 'CROPS-USDC',
    symbol: 'CROPS-USDC UNI-V2 LP-7',
    tokenSymbol: 'USDC',
    icon: '🥦',
  },  
]