import styled from 'styled-components';

export const BuyButton = styled.button `
  width:100;
  max-width: 250px;
  margin: 10px;
  border: 2px solid #159957;
  padding: 6px 24px;
  font-size: 1.15em;
  letter-spacing: 1px;
	color: #159957;
  background-color: white;
	transition: all 0.25s ease-in-out;
	&:hover {
		background-color: #159957;
		border-color: #159957;
		color: white;
	}
	&:active {
		background-color: #159957;
		border-color: #159957;
		color: white;
		box-shadow: none;
	}
	&:focus, &:active:focus {
		background-color: #159957;
		border-color: #159957;
		color: white;
		outline: 5px auto #159957;
	}
	&:visited {
		background-color: #159957;
		border-color: #159957;
	}

`
