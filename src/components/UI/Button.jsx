import React from 'react'
import { styled, css } from 'styled-components'

const Button = ({children, onClick, disabled, color, bgColor, size, ...restProps}) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} {...restProps}>{children}</StyledButton>
  )
}
const COLORS_VARIANTS = {
    primary: 'blue',
    light: 'white',
    dark: 'black',
}

const BACKGROUND_VARIANTS = {
    primary: {
		default: '#8A2B06',
		hover: '#7E2A0A',
		active: '#993108',
	},
	light: {
		default: '#8A2B06',
		hover: '#8A2B06',
		active: '#993108',
	},
	dark: {
		default: '#8A2B06',
		hover: '#7E2A0A',
		active: '#993108',
	},
}

const BUTTON_SIZES = {
	small: '99px',
	medium: '110px',
	large: '110px',
}

const getColors = (props) => {
    return COLORS_VARIANTS[props.color || 'light']
}

const getBackgroundColor = (props) => {
	const currentVariant = BACKGROUND_VARIANTS[props.bgColor || 'primary']
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
const StyledButton = styled('button')`
	height: 45px;
	padding: 12px 14px 12px 14px;
	border-radius: 10px;
	color: ${getColors};
	outline: none;
	border: none;
	cursor: pointer;
	&:disabled {
		background-color: grey;
	}
	font-size: ${({ size }) => BUTTON_SIZES[size]};
	${getBackgroundColor}; 
`

export default Button