import React from 'react'
import { Navbar, Container, Nav, NavDropdown, FormControl, Button, Form } from 'react-bootstrap'
import logo from '../../assets/logo/images-removebg-preview.png'
import './header.styles.scss'

import { Link } from 'react-router-dom'

const Header = () => {
    return (
        
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><img className='logo-bg' src={logo} alt="img"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <Link to={"/"}><Nav.Link href="#1">Home</Nav.Link></Link>
                            <Link to={"/about"}><Nav.Link href="#2">About us</Nav.Link></Link>
                            <Link to={"/contact"}><Nav.Link href="#3">Contact</Nav.Link></Link>

                            
                            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown> */}
                            {/* <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link> */}

                            <Link to={"/sign"}><Nav.Link href="#4">Sign</Nav.Link></Link>


                            <Link to={"/demologin"}><Nav.Link href="#5">Demo Login</Nav.Link></Link>

                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-secondary">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default Header

