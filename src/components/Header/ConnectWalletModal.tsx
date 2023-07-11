/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { Text, CloseIcon ,MetamaskIcon} from '@pancakeswap-libs/uikit'
import { InjectedConnector } from '@web3-react/injected-connector'





const BodyWrapper = styled.div`
  position: absolute;
  z-index: 6;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px 16px;
  align-items: center;
  flex: 1;
  // overflow-y: auto;
  // overflow-x: hidden;
  justify-content: center;
  // // background-image: url('/images/group-pancake.svg');
  // background-repeat: no-repeat;
  // background-position: bottom 24px center;
  // background-size: 90%;

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;

  }

  ${({ theme }) => theme.mediaQueries.lg} {
    // background-image: url('/images/arch-${({ theme }) => (theme.isDark ? 'dark' : 'light')}.svg'),
    //   url('/images/left-pancake.svg'), url('/images/right-pancake.svg');
    background-repeat: no-repeat;
    background-position: center 420px, 10% 230px, 90% 230px;
    background-size: contain, 266px, 266px;
    min-height: 90vh;
  }
`

const ConnectWalletModal = props => {
  const { account, activate, deactivate } = useWeb3React()
  const [showLoader, setShowLoader] = useState(false)

  if(!props.show){
    return null
  }
  const injected = new InjectedConnector({
    supportedChainIds:[421613,56]
  })
  function handleConnect(){
    activate(injected)
    props.onClose()
    // setShowLoader(true)
  }
  return (
    <BodyWrapper >
      <div className='mtmsk mtskmodal'>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',borderBottom:'1px solid white'}}>
          <Text fontWeight={800} marginLeft='15px' marginTop='10px' marginBottom='10px' fontFamily='avenir' fontStyle='normal' color='white' fontSize='18px'>
            Connect to a Wallet
          </Text >
          <div className='btn'><CloseIcon color='white' onClick={props.onClose} /></div>
      </div>

        <div className='mtmskbtn' onClick={handleConnect} 
        style={{marginTop:'25px',padding:'15px',justifyContent:'space-between',border:'1px solid #939db0',display:'flex',flexDirection:'row'}}>
          <Text fontWeight={800} marginLeft='10px' marginTop='7px' fontFamily='avenir' 
          fontStyle='normal' color='white' fontSize='16px'>Metamask</Text>

          <MetamaskIcon style={{height:'40px',width:'40px',marginRight:'15px'}}/>
        </div>
        <div style={{textAlign:'center',marginTop:'30px'}}><a className='learnconnect' target='_blank' rel='noreferrer'
         href='https://support.metamask.io/hc/en-us/articles/360015489531-Getting-started-with-MetaMask#:~:text=%22Add%20Extension%22.-,After%20adding%20MetaMask%20Extension%2C%20MetaMask%20will%20automatically%20open.,selecting%20%22Show%20in%20Toolbar%22.&text=Click%20%E2%80%9CDownload%22'>
        Learn how to connect</a></div> 
      </div>

    </BodyWrapper>
  )
}

export default ConnectWalletModal