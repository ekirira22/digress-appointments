import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='vh-100 overflow-hidden' id='nav-header'>
      <NavBar />    
    </div>
  );
}

export default App;
