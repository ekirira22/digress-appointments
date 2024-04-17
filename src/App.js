import logo from './logo.svg';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Guest from './components/Guest';

function App() {
  return (
    <>
      <NavBar />   
      <Home />
      <Guest />
    </>
  );
}

export default App;
