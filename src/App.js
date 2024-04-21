import { useState, useEffect } from "react";
import { Route, Routes} from 'react-router-dom';
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

function App() {
  //Set Errors
  const [errors, setErrors] = useState('')
  const [success, setSuccess] = useState('')

  const [user, setUser] = useState('')
  const [specializations, setSpecializations] = useState([])
  const [allDoctors, setAllDoctors] = useState([])
  const [allPatients, setAllPatients] = useState([])


  /* Check if session exists */
  useEffect(() => {
    // auto-login
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });

    // Get All Sessions
    const specialization_response = DataFetch("/specializations", "GET")
    console.log(specialization_response.ok)
    specialization_response.then(specializations => setSpecializations(specializations))

    //Get All Doctors
    const doctors_response = DataFetch("/doctors", "GET")
    doctors_response.then(doctors => setAllDoctors(doctors))

    //Get All Patients
    const patients_response = DataFetch("/patients", "GET")
    patients_response.then(patients => setAllPatients(patients))


  }, []);

  console.log(allPatients)

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
          r.json().then((user) => setUser(user));
          setErrors('')
          setSuccess("Sucess!! OK.")
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
        setSuccess("Sucess!! OK.")
      }else{
        r.json().then((response) => setErrors(response.errors[0]))
      }
    })
  }

  return (
    <>
      {errors.length > 1 ? <p className="container error-container">{errors}</p> : null}
      {success.length > 1 ? <p className="container success-container">{success}</p> : null}
      {!user ? <NavBar user={user}/> : null}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={user ? <Dashboard user={user} setUser={setUser}/> : <SignUp onSignUp={onSignUp} specializations={specializations}/>} />
        <Route path='/login' element={user ? <Dashboard user={user} setUser={setUser}/> : <Login onLogin={onLogin}/>} />
        <Route path='/profile' element={user ? <Profile /> : <Login onLogin={onLogin}/>} />
        <Route path='/dashboard' element={user ? <Dashboard user={user} setUser={setUser}/> : <Login onLogin={onLogin}/> }>
          <Route path="profile" element={<Profile />} />
          <Route path="book-appointment" element={<BookAppointment specializations={specializations} allDoctors={allDoctors} />} />
          <Route path="edit-appointment" element={<EditAppointment />} />
          <Route path="doctors" element={<Doctors allDoctors={allDoctors}/>} />
        </Route>
        <Route path='/error404' element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
