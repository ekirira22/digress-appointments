import {useEffect,useState}  from "react";
import { Table } from "react-bootstrap";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import userimg from '../images/testimonial-2.jpg'
import Profile from "./Profile";
import Footer from "./Footer";

export default function Dashboard({user, setUser}){
    const navigate = useNavigate()
    const [isDoctor, setDoctor] = useState(false)

    useEffect(()=>{
        if (user['doctors_id']){
            setDoctor(true)
        }else{
            setDoctor(false)
        }
    },[])

    function handleLogoutClick(){
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              setUser(null);
              navigate('/')
            }
          });
    }

    console.log(user.appointments)

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
                        <a href="/dashboard/doctors" className="nav-item nav-link"><i className="fas fa-user-nurse me-2"></i>See {isDoctor? "Collegues" : "Doctors"}</a>
                        {
                            isDoctor ? 
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-user me-2"></i>Patients</a>
                                <div className="dropdown-menu bg-transparent border-0">
                                    <a href="/dashboard/book-appointment" className="nav-link dropdown-item">All Patients</a>
                                    <a href="typography.html" className="nav-link dropdown-item">Booked Appointments</a>
                                    <a href="element.html" className="nav-link dropdown-item">Reschedule</a>
                                </div>
                            </div> : 
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2"></i>Appointments</a>
                                <div className="dropdown-menu bg-transparent border-0">
                                    <a href="/dashboard/book-appointment" className="nav-link dropdown-item">Make an appointment</a>
                                    <a href="/dashboard/edit-appointment" className="nav-link dropdown-item">Reschedule appointment</a>
                                </div>
                            </div>
                        }
                        <a href="/" className="nav-item nav-link" onClick={handleLogoutClick}><i className="fa fa-sign-out me-2"></i>Logout</a>
                    </div>
                </nav>
            </div>
            {/* <!-- Sidebar End --> */}

            {/* Dashboard Menu Start */}
            <div className="content">
            {/* <!-- Navbar Start --> */}
                <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
                    <a href="/" className="navbar-brand d-flex d-lg-none me-4">
                        <h2 className="text-primary mb-0"><i className="fa fa-user-doctor"></i></h2>
                    </a>
                    <a href="#" className="sidebar-toggler flex-shrink-0">
                        <i className="fa fa-bars"></i>
                    </a>
                    <form className="d-none d-md-flex ms-4">
                        <input className="form-control border-0" type="search" placeholder="Search" />
                    </form>
                    <div className="navbar-nav align-items-center ms-auto">
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                <img className="rounded-circle me-lg-2" src={userimg} alt="" style={{width: "40px", height: "40px"}} />
                                <span className="d-none d-lg-inline-flex">{user['name']}</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                                <a href="/dashboard/profile" className="dropdown-item">My Profile</a>
                                <a href="/dashboard/health-stats" className="dropdown-item">Health Stats</a>
                                <a href="/" className="dropdown-item" onClick={handleLogoutClick}>Log Out</a>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i className="fa fa-heartbeat fa-3x text-primary"></i>
                            <div className="ms-3">
                                <p className="mb-2">Pulse</p>
                                <h6 className="mb-0">{user['pulse_rate']} bpm</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i className="fas fa-stethoscope fa-3x text-primary"></i>
                            <div className="ms-3">
                                <p className="mb-2">Blood pressure</p>
                                <h6 className="mb-0">{user['blood_pressure']} mm/Hg</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i className="fa fa-thermometer fa-3x text-primary"></i>
                            <div className="ms-3">
                                <p className="mb-2">Body Temperature</p>
                                <h6 className="mb-0">{user['temparature']}°C</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i className="fas fa-syringe fa-3x text-primary"></i>
                            <div className="ms-3">
                                <p className="mb-2">Blood Group</p>
                                <h6 className="mb-0">{user['blood_group']}</h6>
                            </div>
                        </div>
                    </div>
                        <Outlet />
                    </div>
                    <div className="row g-4 mt-4">
                        <div className="col-md-12 text-left">
                            <div className="col-12">
                                <div className="bg-light rounded h-100 p-4">
                                    <h6 className="mb-4"><span className="db-header">Appointments</span></h6>
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Doctors' Name</th>
                                                    <th scope="col">Treatment Area</th>
                                                    <th scope="col">Address</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Time</th>
                                                    <th scope="col">Approved</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    user['appointments'].map(app => {
                                                        return (
                                                            <tr key={app.id}>
                                                                <td>{app.doctors_id}</td>
                                                                <td></td>
                                                                <td></td>
                                                                <td>{app.date}</td>
                                                                <td>{app.time}</td>
                                                                <td><i className="fa fa-arrow-right text-success text-right"></i></td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>

                <Footer />
            </div>
            
        </div>
    )
}