import { Button } from 'bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import UserInput from './Components/User/UserInput';
import AccordionFunc from './Components/User/AccordionItems';
import HeaderArea from './Components/Header/MainMenu';

import './CSS/style.css';


function App() {
  return (
    <div className="Origin">
      <HeaderArea/>
       <UserInput />
       <AccordionFunc/>
    </div>
  );
}

export default App;
