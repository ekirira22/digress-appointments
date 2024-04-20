import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../DigressEvents.png";
import { Container, Nav, Navbar, Button, Offcanvas } from "react-bootstrap";

export default function NavBar({user, setUser}){
    /* Offcanvas Setters*/
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleLogoutClick(){
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              setUser(null);
            }
          });
    }
    return (
        <>
            <header>
                <div class="container">
                    <div class="row">

                            <div class="col-md-4 col-sm-5">
                                <p>Welcome to a Digress Professional Health Care</p>
                            </div>
                                
                            <div class="col-md-6 col-sm-6 text-align-right">
                                <span class="phone-icon"><i class="fa fa-phone"></i> +254 719 405 599</span>
                                <span class="date-icon"><i class="fa fa-calendar-plus-o"></i> 6:00 AM - 10:00 PM (Mon-Fri)</span>
                                <span class="email-icon"><i class="fa fa-envelope-o"></i> <a href="#">info@digresshealth.com</a></span>
                            </div>

                            <div class="col-md-2 col-sm-1">
                                <span class="user-icon"><i class="fa fa-user"></i> <a href="#">Welcome {user ? user['name'] : "Guest" }</a></span>
                            </div>

                    </div>
                </div>
            </header>

            <Navbar className="p-4 text-light" bg="primary" data-bs-theme="dark">
                <Container>

                    <div class="navbar-header">
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
                            {!user ? 
                                <Nav>
                                    <Nav.Link className="fw-semibold" href="/">HOME</Nav.Link>
                                    <Nav.Link className="fw-semibold" href="/about">ABOUT</Nav.Link>
                                    <Nav.Link className="fw-semibold" href="/services">SERVICES</Nav.Link>
                                    <Nav.Link className="fw-semibold" href="/contact">CONTACT</Nav.Link>
                                    <div className="ms-4">
                                        <Button variant="transparent border border-white"> <NavLink to='/signup'>SIGN UP</NavLink> </Button>
                                        <Button className="ms-2" variant="transparent border border-white"><NavLink to='/login'>LOG IN</NavLink></Button>
                                    </div>
                                </Nav> :
                                <Nav>
                                    <Nav.Link className="fw-semibold" href="/profile">PROFILE</Nav.Link>
                                    <div className="ms-4">
                                        <Button className="ms-2" variant="transparent border border-white" onClick={handleLogoutClick}><NavLink to='/logout'>LOG OUT</NavLink></Button>
                                    </div>
                                </Nav>
                            }
                            
                        </Offcanvas.Body>
                    </Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}