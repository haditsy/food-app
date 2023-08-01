import React from 'react'
import { styled } from 'styled-components'
import Button from '../UI/Button'

const MeelItem = ({title, description, price}) => {
  return (
        <StyledBoxes>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <StyledPrice>${price}</StyledPrice>
        </div>
        <StyledForm>
            <p>Amount</p>
            <StyledInputNumber type="number" />
            <StyledButtonAdd  bgColor={'primary'} >+ Add</StyledButtonAdd>
         </StyledForm>
    </StyledBoxes>
  )
}

const StyledBoxes = styled('div')`
    display: flex;
    justify-content: space-between;
    background-color: white;
    width: 80%;
    margin: 0 10%;
    padding: 20px;
`
const StyledPrice = styled('div')`
color: #AD5502;
font-weight: 700;
`

const StyledInputNumber = styled('input')`
    width: 50px;
    height: 25px;
    margin-left: 10px;
`
const StyledForm = styled('div')`
    display: flex;
`
const StyledButtonAdd = styled(Button)`
border-radius: 25px;
`
export default MeelItem
