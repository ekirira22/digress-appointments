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
function App() {
  //Set Errors
  const [errors, setErrors] = useState('')

  const onSignUp = (form_values, isDoctor) => {
      console.log(form_values, isDoctor)
  }

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

      </Routes>   
      <Patient/>
    </>
  );
}

export default App;
