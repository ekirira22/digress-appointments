import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../DigressEvents.png";
import { Container, Nav, Navbar, Button, Offcanvas } from "react-bootstrap";

export default function NavBar({user}){
    /* Offcanvas Setters*/
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">

                            <div className="col-md-4 col-sm-5">
                                <p>Welcome to a Digress Professional Health Care</p>
                            </div>
                                
                            <div className="col-md-6 col-sm-6 text-align-right">
                                <span className="phone-icon"><i className="fa fa-phone"></i> +254 719 405 599</span>
                                <span className="date-icon"><i className="fa fa-calendar-plus-o"></i> 6:00 AM - 10:00 PM (Mon-Fri)</span>
                                <span className="email-icon"><i className="fa fa-envelope-o"></i> <a href="#">info@digresshealth.com</a></span>
                            </div>

                            <div className="col-md-2 col-sm-1">
                                <span className="user-icon"><i className="fa fa-user"></i> <a href="#">Welcome {user ? user['name'] : "Guest" }</a></span>
                            </div>

                    </div>
                </div>
            </header>

            <Navbar className="p-2 text-light" bg="primary" data-bs-theme="dark">
                <Container>

                    <div className="navbar-header">
                        <a href="/"><img alt="Digress Logo" src={logo} width="30" height="30" className="d-inline-block align-top"/>Digress Appointments</a>
                    </div>
                    
                    <Button className="shadow-none d-lg-none border-0" onClick={handleShow}>
                        <span className="navbar-toggler-icon"></span>
                    </Button>

                    <Offcanvas className="navbar-right" show={show} onHide={handleClose} responsive="lg">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Digress Appointments</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                        
                        <Nav>
                            <Nav.Link href="/">HOME</Nav.Link>
                            <Nav.Link href="/about">ABOUT</Nav.Link>
                            <Nav.Link href="/services">SERVICES</Nav.Link>
                            <Nav.Link href="/contact">CONTACT</Nav.Link>
                            <div className="ms-4">
                                <Button variant="transparent border border-white"> <NavLink to='/signup'>SIGN UP</NavLink> </Button>
                                <Button className="ms-2" variant="transparent border border-white"><NavLink to='/login'>LOG IN</NavLink></Button>
                            </div>
                        </Nav> 
                            
                        </Offcanvas.Body>
                    </Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}