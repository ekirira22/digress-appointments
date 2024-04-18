import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import { useState } from "react";
import { Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Profile from './components/Profile'

function App() {
  //Set Errors
  const [errors, setErrors] = useState('')

  return (
    <>
      {errors.length > 1 ? <p className="error">{errors}</p> : null}
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>   
    </>
  );
}

export default App;
