import './App.css';
import Component from './Component';
import {  useState } from 'react';


function App() {

  let [isDraggable, setIsDraggable] = useState(true)
  let [show, setShow] = useState(false)

  
  return (
        <div>
        <Component></Component>
         </div>
     );
}

export default App;
