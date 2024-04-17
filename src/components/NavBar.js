import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../DigressEvents.png";
import { Container, Nav, Navbar, Button, Offcanvas } from "react-bootstrap";

export default function NavBar(){
    /* Offcanvas Setters*/
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar className="p-4 fs-6 text-light" bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Digress Appointments
                    </Navbar.Brand>
                    
                    <Button className="shadow-none d-lg-none border-0 fs-4" onClick={handleShow}>
                        <span className="navbar-toggler-icon"></span>
                    </Button>

                    <Offcanvas show={show} onHide={handleClose} responsive="lg">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Digress Appointments</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav>
                                <Nav.Link className="fw-semibold" href="#home">HOME</Nav.Link>
                                <Nav.Link className="fw-semibold" href="#about">ABOUT</Nav.Link>
                                <Nav.Link className="fw-semibold" href="#services">SERVICES</Nav.Link>
                                <Nav.Link className="fw-semibold" href="#contact">CONTACT</Nav.Link>

                            </Nav>
                            <Nav className="ms-4">
                                <Button variant="transparent border border-white">SIGN UP</Button>
                                <Button className="ms-2" variant="transparent border border-white">LOG IN</Button>
                            </Nav>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}