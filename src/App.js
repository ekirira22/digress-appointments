import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import { useState } from "react";
import { Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Patient from './components/Patient';
import Profile from './components/Profile'
import Error404 from './components/Error404';

function App() {
  //Set Errors
  const [errors, setErrors] = useState('')
  const [user, setUser] = useState('')

  const onSignUp = (form_values) => {
      fetch(
        '/signup',
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
  console.log(user)

  const onLogin = (form_values, isDoctor) => {
    console.log(form_values, isDoctor)
}

  return (
    <>
      {errors.length > 1 ? <p className="error">{errors}</p> : null}
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp onSignUp={onSignUp}/>} />
        <Route path='/login' element={<Login onLogin={onLogin}/>} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/user' element={user ? <Patient/> : <Login onLogin={onLogin}/> } />
        <Route path='/error404' element={<Error404 />} />
      </Routes>
      
    </>
  );
}

export default App;
