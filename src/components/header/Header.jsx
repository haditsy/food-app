import React from 'react'
import { styled } from 'styled-components'
import { BasketIcon } from '../../assets'
import HeaderCartButton from './HeaderCartButton'

const Header = () => {
  return (
    <StyledHeader>
        <h1>React Meels</h1>
        <HeaderCartButton />
    </StyledHeader>
  )
}
const StyledHeader = styled('header')`
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 5rem;
    color: white;
    background-color: #8a2b06;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2)
    z-index: 10;
    & > h1 {
        font-size: 2.4rem
    }
`
export default Header