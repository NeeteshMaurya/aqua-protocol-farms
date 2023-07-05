import React from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const FarmTabButtons = () => {
  const { url, isExact } = useRouteMatch()
  const TranslateString = useI18n()

  return (
    <Wrapper>
      {/* <ButtonMenu activeIndex={isExact ? 0 : 1} scale="sm" variant="subtle"> */}
        <Link className='btn connectwalletbtn' style={{background:'#1214fd',fontFamily:'avenir',color:'white'}}  to={`${url}`}>
          {TranslateString(1198, 'Live')}
        </Link>
        <Link className='btn connectwalletbtn' style={{fontFamily:'avenir',background:'#1214fd',marginLeft:'10px'}}  to={`${url}/history`}>
          {TranslateString(388, 'Finished')}
        </Link>
        {/* <ButtonMenuItem  style={{background:'#1214fd',fontFamily:'avenir',color:'white'}} as={Link} to={`${url}`}>
          {TranslateString(1198, 'Live')}
        </ButtonMenuItem> */}
        {/* <ButtonMenuItem style={{fontFamily:'avenir',background:'#1214fd'}} as={Link} to={`${url}/history`}>
          {TranslateString(388, 'Finished')}
        </ButtonMenuItem> */}
      {/* </ButtonMenu> */}
    </Wrapper>
  )
}

export default FarmTabButtons

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding-left: 12px;
    padding-right: 12px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    margin-left: 16px;
  }
`
