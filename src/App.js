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
import BookAppointment from "./components/BookAppointment";
import DataFetch from "./components/DataFetch";
import EditAppointment from "./components/EditAppointment"
import Doctors from "./components/Doctors"
import HealthStats from "./components/HealthStats"
import Loader from "./components/Loader";

function App() {
  //API Endpoint
  const apiURL = process.env.REACT_APP_API_URL
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
    // Quick Fix: Switched to client-side session management instead of server-side
      // fetch(`${apiURL}/check_session`, { method: "GET" }).then((r) => {
      //   if (r.ok) {
      //     r.json().then((user) => setUser(user));
      //   }
      // });
      const user = JSON.parse(localStorage.getItem('user_obj'))
      setUser(user)

    // Get All Specializations
    const specialization_response = DataFetch(`${apiURL}/specializations`, "GET")
    specialization_response.then(specializations => setSpecializations(specializations))

    //Get All Doctors
    const doctors_response = DataFetch(`${apiURL}/doctors`, "GET")
    doctors_response.then(doctors => setAllDoctors(doctors))

    //Get All Patients
    const patients_response = DataFetch(`${apiURL}/patients`, "GET")
    patients_response.then(patients => setAllPatients(patients))


  }, [apiURL]);

  // console.log(apiURL)

  const onSignUp = (form_values) => {
      fetch(
        `${apiURL}/signup`,
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
      `${apiURL}/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form_values)
      }
    ).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          //Quick Fix: To client-side session management
          localStorage.setItem('user_obj', JSON.stringify(user))
          //Original Implementation: For server-side session management
          setUser(user)
        });
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
      
    fetch( `${apiURL}/${user_type}/${user_now}`, form_obj).then(r => {
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
    fetch(`${apiURL}/appointments`, form_obj).then((r) => {
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

  async function handleLogoutClick(){

    // Server-side session management
    // await fetch(`${apiURL}/logout`, { method: "DELETE" }).then((r) => {
    //     setUser(null);
    //     navigate('/home')
    //   });

    //Remove user from localStorage session
    localStorage.removeItem('user_obj')
    setUser(null)
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
        <Route path='/dashboard' element={user ? <Dashboard user={user} handleLogoutClick={handleLogoutClick} allDoctors={allDoctors} allPatients={allPatients} /> : <Loader /> }>
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
