import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
      <NavBar />   
      <Home />
      <SignUp />
    </>
  );
}

export default App;
