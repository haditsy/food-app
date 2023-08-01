import React from 'react'

const ButtonPlusMinus = ({children, onClick, disabled, colors, backgroundColor, sizes, ...restProps}) => {
    return (
      <StyledButtons onClick={onClick} disabled={disabled} {...restProps}>{children}</StyledButtons>
    )
  }
  const COLORS_VARIANT= {
      plus: 'blue',
      minus: 'black',
  }
  
  const BACKGROUND_VARIANT = {
      plus: {
          default: '#fffff',
          hover: '#8A2B06',
          active: '#993108',
      },
      minus: {
          default: '#fffff',
          hover: '#8A2B06',
          active: '#993108',
      },
  }
  
  const BUTTON_SIZE = {
      small: '48px',
      medium: '48px',
      large: '48px',
  }
  
  const getColor = (props) => {
      return COLORS_VARIANT[props.colors || 'lights']
  }
  
  const getBackgroundColors = (props) => {
      const currentVariant = BACKGROUND_VARIANT[props.backgroundColor || 'plus']
      return css`
          background-color: ${currentVariant.default};
          &:hover:not(:disabled) {
              background-color: ${currentVariant.hover};
          }
          &:active:not(:disabled) {
              background-color: ${currentVariant.active};
          }
      `
  }
  const StyledButtons = styled('button')`
      height: 36px;
      padding: 8px 10px 8px 10px;
      border-radius: 10px;
      color: ${getColor};
      outline: none;
      border: none;
      cursor: pointer;
      &:disabled {
          background-color: grey;
      }
      font-size: ${({ sizes }) => BUTTON_SIZE[sizes]};
      ${getBackgroundColors}; 
  `

export default ButtonPlusMinus
