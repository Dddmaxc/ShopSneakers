import styled from 'styled-components'

const NavWrapper = styled.div`
	margin-left: 10px;
	font-size: 20px;
	font-family: 'Saira Condensed', sans-serif;
	font-style: normal;
	& > a {
		text-decoration: none;
		color: #000000;
		font-family: 'Saira Condensed', sans-serif;
		font-weight: 400;
		font-size: 40px;
	}
	& > a.active {
		text-decoration: none;
		color: #fff200;
	}
	& > a:hover {
		color: #00ffff;
	}
`
const container = styled.div`
	display: flex;
	flex-direction: column;
	& h2 {
		font-family: 'Anton', sans-serif;
		font-weight: 400;
		font-style: normal;
	}
`
const header = styled.div`
	background-color: #000000;
	width: 100%;
	height: 100px;
	text-align: center;
	color: white;
	position: fixed;
`
const containerForNavAndContent = styled.div`
	padding-top: 100px;
	display: flex;
`
const nav = styled.div`
	background-color: white;
	min-height: 400px;
	width: 30%;
	color: #282c34;
	font-size: 30px;
`
const content = styled.div`
	background-color: #ffffff;
	min-height: 400px;
	width: 70%;
	color: #000000;
	font-size: 30px;
	padding: 20px;
`
const footer = styled.div`
	background-color: #000000;
	width: 100%;
	height: 120px;
	text-align: center;
	color: white;
`
const adidas = styled.div`
	column-gap: 20px;
`
const adidasImg = styled.div`
	& img {
		width: 200px;
		height: auto;
	}
`

export const S = {
	NavWrapper,
	container,
	header,
	nav,
	content,
	footer,
	containerForNavAndContent,
	adidas,
	adidasImg,
}
