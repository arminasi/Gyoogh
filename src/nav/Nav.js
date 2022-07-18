import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavStyled = styled.div`
	z-index: 999;
	top: 0;
	left: 0;
  width: 100vw;
  height: 60px;
  background: #F68923;
  display: flex;
	position: fixed;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 50px;
  transition: 0.4s;
`

const RightNavStyled = styled.div `
  width: 260px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  padding: 0 20px;
  transition: 0.6s;
  &:hover {
    background: #F68923;
  }
`

const LinkStyled = styled.h4 `
  color: white;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
  display: inline-block;
  font-family: Comic Sans MS;
  transition: 0.2s;
  &:hover {
    transform: scale(1.2);
    color: #F68923;
    background: white;
  }
`

function Nav() {
	const [color, setColor] = React.useState(false);
	const changeColor = () => {
		if(window.scrollY >= 680) {
			setColor(true);
		} else {
			setColor(false);
		}
	}

  return (
    <NavStyled onScroll={window.addEventListener('scroll', changeColor)} style={{backgroundColor: color ? "#39a6e6" : "#F68923"}}>
      <img width={"140px"} src="../assets/Logos/SVG/MainLogo.svg"></img>
      <RightNavStyled>
        <Link to="/villages"><LinkStyled>Villages</LinkStyled></Link>
        <Link to="/offers"><LinkStyled>Offers</LinkStyled></Link>
        <Link to="/contact"><LinkStyled>Contact</LinkStyled></Link>
      </RightNavStyled>
    </NavStyled>
  )
}

export default Nav