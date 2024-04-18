import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Patient from './components/Patient';
function App() {
  return (
    <>
      <NavBar />   
      <Home />
      <SignUp />
      <Patient/>
    </>
  );
}

export default App;
