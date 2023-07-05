import React from 'react'
import { Tag, VerifiedIcon, CommunityIcon, BinanceIcon } from '@pancakeswap-libs/uikit'

const CoreTag = (props) => (

  <Tag variant="secondary" outline startIcon={<VerifiedIcon />} {...props}>
    <p style={{color:'white',fontFamily:'avenir'}}>Core</p>
  </Tag>

)

const CommunityTag = (props) => (
  <Tag variant="textSubtle" outline startIcon={<CommunityIcon />} {...props}>
    <p style={{color:'white',fontFamily:'avenir'}}>Community</p>
  </Tag>
)

const BinanceTag = (props) => (
  <Tag variant="binance" outline startIcon={<BinanceIcon />} {...props}>
    <p style={{color:'white',fontFamily:'avenir'}}>Binance</p>
  </Tag>
)

const DualTag = (props) => (
  <Tag variant="textSubtle" outline {...props}>
    <p style={{color:'white',fontFamily:'avenir'}}>Dual</p>
  </Tag>
)

export { CoreTag, CommunityTag, BinanceTag, DualTag }
