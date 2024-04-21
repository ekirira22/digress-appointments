import {useEffect,useState}  from "react";
import { Table } from "react-bootstrap";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import userimg from '../images/testimonial-2.jpg'
import Profile from "./Profile";
import Footer from "./Footer";

export default function Dashboard({user, setUser}){
    const [Doctors,setDoctors]=useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        fetchDoctors()
    },[])

    async function fetchDoctors(){
        try {
            const data=await fetch("http://localhost:4000/doctors")
            const allDoctors=await data.json()
            setDoctors(allDoctors)
            console.log(Doctors)
            
        } catch (error) {
            console.log(error)
        }
        
    }
    function handleLogoutClick(){
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              setUser(null);
              navigate('/')
            }
          });
    }
    return (
        
        <div className="container-xxl position-relative bg-white d-flex p-0">
            {/* <!-- Sidebar Start --> */}
            <div className="sidebar pe-4 pb-3">
                <nav className="navbar bg-light navbar-light">
                    <a href="/dashboard" className="navbar-brand mx-4 mb-3">
                        <h3 className="text-info"><i className="fa fa-hospital-o me-2"></i>DIGRESS 😉</h3>
                    </a>
                    <div className="d-flex align-items-center ms-4 mb-4">
                        <div className="position-relative">
                            <img className="rounded-circle" src={userimg} alt="" style={{width: '40px', height: '40px'}} />
                            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                        </div>
                        <div className="ms-3">
                            <h6 className="mb-0">Welcome {user['name']}</h6>
                            <span>{user['doctors_id'] ? "Doctor" : "Patient"}</span>
                        </div>
                    </div>
                    <div className="navbar-nav w-100">
                        <a href="/dashboard" className="nav-item nav-link active"><i className="fa fa-tachometer me-2"></i>Dashboard</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2"></i>Appointments</a>
                            <div className="dropdown-menu bg-transparent border-0">
                                <a href="/dashboard/book-appointment" className="nav-link dropdown-item">Make an appointment</a>
                                <a href="typography.html" className="nav-link dropdown-item">View Appointments</a>
                                <a href="element.html" className="nav-link dropdown-item">Reschedule</a>
                            </div>
                        </div>
                        <a href="/" className="nav-item nav-link" onClick={handleLogoutClick}><i className="fa fa-sign-out me-2"></i>Logout</a>
                    </div>
                </nav>
            </div>
            {/* <!-- Sidebar End --> */}

            {/* Dashboard Menu Start */}
            <div className="content">
            {/* <!-- Navbar Start --> */}
                <nav class="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
                    <a href="/" class="navbar-brand d-flex d-lg-none me-4">
                        <h2 class="text-primary mb-0"><i class="fa fa-user-doctor"></i></h2>
                    </a>
                    <a href="#" class="sidebar-toggler flex-shrink-0">
                        <i class="fa fa-bars"></i>
                    </a>
                    <form class="d-none d-md-flex ms-4">
                        <input class="form-control border-0" type="search" placeholder="Search" />
                    </form>
                    <div class="navbar-nav align-items-center ms-auto">
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                <img class="rounded-circle me-lg-2" src={userimg} alt="" style={{width: "40px", height: "40px"}} />
                                <span class="d-none d-lg-inline-flex">{user['name']}</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                                <a href="/dashboard/profile" class="dropdown-item">My Profile</a>
                                <a href="/dashboard/book-appointment" class="dropdown-item">Settings</a>
                                <a href="/" class="dropdown-item" onClick={handleLogoutClick}>Log Out</a>
                            </div>
                        </div>
                    </div>
                </nav>
                <div class="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <Outlet />
                    </div> 
                </div>
                <Footer />
            </div>
            
        </div>
    )
}