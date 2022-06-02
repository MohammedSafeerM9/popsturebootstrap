import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarPop.css';
import logo from '../assets/images/Popsture.svg'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';


const NavbarPop = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="navbar">
                <Container className="navbar-container">
                    <img className="navbar-logo" src={ logo } alt='popsture' />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="navbar-link-style">
                        <Nav className="me-auto">
                            <Nav.Link href="#services" className="ps-2">Services</Nav.Link>
                            <Nav.Link href="#projects" className="p-2">Projects</Nav.Link>
                            <Nav.Link href="#about" className="p-2">About</Nav.Link>
                            <Nav.Link href="#projects" className="p-2">Careers</Nav.Link>
                            <Nav.Link href="#projects" className="p-2" >Contact</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>
    )
}

export default NavbarPop
