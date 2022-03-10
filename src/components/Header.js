import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavStyle } from '../styles/style'

const Header = () => {
  return (
    <NavStyle>
        <Navbar expand="lg" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><img src="https://i.ibb.co/KyWqVFY/logo.png" alt="logo" border="0" width="110px"  /></Navbar.Brand>
    <Nav>
      <Nav.Link href="#Features">Features</Nav.Link>
      <Nav.Link href="#Team"> Team</Nav.Link>
      <Nav.Link href="#signIn"> Sign In </Nav.Link>
    </Nav>
    </Container>
</Navbar>
    </NavStyle>
  )
}

export default Header