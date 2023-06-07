import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'AQUA',
    lpAddresses: {
      421613: '0xd1A918d8fe334767a122BA41332D318168e144f5',
      56: '0x86c024a3740F29336Bd535846255Cb2Ecd4b5273',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      421613: '0xd1A918d8fe334767a122BA41332D318168e144f5',
      56: '0x86c024a3740F29336Bd535846255Cb2Ecd4b5273',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  {
    pid: 1,
    lpSymbol: 'AQUA-BNB LP',
    lpAddresses: {
      421613: '',
      56: '0xb324727cc0d5e57B70752974979D4A95C054c6b1',   // lp address token-bnb
    },
    tokenSymbol: 'AQUA',
    tokenAddresses: {
      421613: '0xd1A918d8fe334767a122BA41332D318168e144f5',
      56: '0x86c024a3740F29336Bd535846255Cb2Ecd4b5273', // token address
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

]

export default farms
