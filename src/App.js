import { useState, useEffect } from "react";
import { Route, Routes, useNavigate} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile'
import Error404 from './components/Error404';
import Footer from "./components/Footer";
import BookAppointment from "./components/BookAppointment";
import DataFetch from "./components/DataFetch";
import EditAppointment from "./components/EditAppointment"
import Doctors from "./components/Doctors"
import HealthStats from "./components/HealthStats"

function App() {
  //Set Errors
  const [errors, setErrors] = useState('')
  const [success, setSuccess] = useState('')

  const [user, setUser] = useState('')
  const [specializations, setSpecializations] = useState([])
  const [allDoctors, setAllDoctors] = useState([])
  const [allPatients, setAllPatients] = useState([])

  const navigate = useNavigate()
  /* Check if session exists */
  useEffect(() => {
    // auto-login
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });

    // Get All Specializations
    const specialization_response = DataFetch("/specializations", "GET")
    specialization_response.then(specializations => setSpecializations(specializations))

    //Get All Doctors
    const doctors_response = DataFetch("/doctors", "GET")
    doctors_response.then(doctors => setAllDoctors(doctors))

    //Get All Patients
    const patients_response = DataFetch("/patients", "GET")
    patients_response.then(patients => setAllPatients(patients))


  }, []);

  const onSignUp = (form_values) => {
      fetch(
        "/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form_values)
        }
      ).then((r) => {
        if (r.ok) {
          setSuccess(`Thank you for signing up!! Log in to access dashboard`)
        }else{
          r.json().then((response) => setErrors(response.errors[0]))
        }
      })
  }
  const onLogin = (form_values) => {
    fetch(
      "/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form_values)
      }
    ).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        setErrors('')
        setSuccess("Sucessfully logged in!")
      }else{
        r.json().then((response) => setErrors(response.errors[0]))
      }
    })
  }

  const onEditUser = (form_values) => {
    const form_obj = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form_values)
    }
    const user_now = user['username']
    let user_type
    // Check if user is doctor or patient

    user['doctors_id'] ? user_type = "doctors" : user_type = "patients"
      
    fetch( `/${user_type}/${user_now}`, form_obj).then(r => {
      if(r.ok){
        //set state
        const updated_user = {...user, ...form_values}
        setUser(updated_user)

        setSuccess("Updated successfully!!")
      }else{
        r.json().then((response) => setErrors(response.errors[0]))
      }
    })
    //After updating, update user state using setUser
  }

  const onBookAppointment = (form_values) => {
    form_values.patient_id = user['id']
    const form_obj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form_values)
    }
    // Post appointments
    fetch('/appointments', form_obj).then((r) => {
      if(r.ok){
        //update appointments in state
        r.json().then((res) => {
          const appointments = [...user.appointments, res]
          delete user.appointments
          const updated_user = {...user, appointments} 
          setUser(updated_user)
        })
        setUser(user)
        setSuccess("Booked Appointment successfully!!")

      }else{
        r.json().then((response) => setErrors(response.errors[0]))
      }
    })
    

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
    <>
      {errors.length > 1 ? <p className="container error-container">{errors}</p> : null}
      {success.length > 1 ? <p className="container success-container">{success}</p> : null}
      {!user ? <NavBar user={user}/> : null}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp onSignUp={onSignUp} specializations={specializations}/>} />
        <Route path='/login' element={<Login onLogin={onLogin}/>} />
        <Route path='/profile' element={user ? <Profile /> : <Login onLogin={onLogin}/>} />
        <Route path='/dashboard' element={user ? <Dashboard user={user} handleLogoutClick={handleLogoutClick} allDoctors={allDoctors} allPatients={allPatients} /> : <Login onLogin={onLogin}/> }>
          <Route path="profile" element={<Profile user={user} onEditUser={onEditUser} />} />
          <Route path="book-appointment" element={<BookAppointment user={user} specializations={specializations} allDoctors={allDoctors} onBookAppointment={onBookAppointment}/>} />
          <Route path="edit-appointment" element={<EditAppointment />} />
          <Route path="doctors" element={<Doctors allDoctors={allDoctors} allPatients={allPatients} />} />
          <Route path="health-stats" element={<HealthStats user={user} setUser={setUser} onEditUser={onEditUser}/>} />
        </Route>
        <Route path='/error404' element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
