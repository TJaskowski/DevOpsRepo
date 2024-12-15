import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavBarMenu({ items }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Frontend Lab</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {items.map((item) => (
            <Nav.Link key={item.id} href={item.url}>
                {item.label}
            </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  )
}

export default NavBarMenu
