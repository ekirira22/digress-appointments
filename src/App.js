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

function App() {
  //Set Errors
  const [errors, setErrors] = useState('')
  const [user, setUser] = useState('')

  /* Check if session exists */
  useEffect(() => {
    // auto-login
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
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
          console.log(r)
          r.json().then((user) => setUser(user));
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
      }
    })
  }

  console.log(user)

  return (
    <>
      {errors.length > 1 ? <p className="error">{errors}</p> : null}
      {!user ? <NavBar user={user}/> : null}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={user ? <Dashboard user={user} setUser={setUser}/> : <SignUp onSignUp={onSignUp}/>} />
        <Route path='/login' element={user ? <Dashboard user={user} setUser={setUser}/> : <Login onLogin={onLogin}/>} />
        <Route path='/profile' element={user ? <Profile /> : <Login onLogin={onLogin}/>} />
        <Route path='/dashboard' element={user ? <Dashboard user={user} setUser={setUser}/> : <Login onLogin={onLogin}/> }>
          <Route path="profile" element={<Profile />} />
          <Route path="book-appointment" element={<BookAppointment />} />
        </Route>
        <Route path='/error404' element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
