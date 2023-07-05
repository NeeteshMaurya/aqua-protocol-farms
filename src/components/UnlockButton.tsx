import React from 'react'
import { Button, useWalletModal } from '@pancakeswap-libs/uikit'
import '../assets/header.css'
import useAuth from 'hooks/useAuth'
import useI18n from 'hooks/useI18n'


const UnlockButton = (props) => {
  const TranslateString = useI18n()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div style={{paddingLeft:'29px',paddingRight:'29px'}} className='navbarbtn nav-link buttonn btn text-white connectwalletbtn'>
      Connect Wallet
    </div>
    // <Button className='navbarbtn nav-link buttonn btn text-white connectwalletbtn' onClick={onPresentConnectModal} {...props}>
    //   {TranslateString(292, 'Unlock Wallet')}
    // </Button>
  )
}


export default UnlockButton