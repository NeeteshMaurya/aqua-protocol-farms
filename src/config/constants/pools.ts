import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'AQUA',
    tokenAddress: '0xd1A918d8fe334767a122BA41332D318168e144f5',  // token address
    stakingTokenName: QuoteToken.CAKE,
    stakingTokenAddress: '0xd1A918d8fe334767a122BA41332D318168e144f5',  // token address
    contractAddress: {
      421613: '0x41404Ee4da1CBE43Ee2c5acdfa18fee438A3603b',
      56: '0xc92D9E05999929aA459BB4FAC0b9ba4577f4DdC3',  /// masterchef address
    },
    poolCategory: PoolCategory.CORE,
    projectLink: '/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
 
]

export default pools
