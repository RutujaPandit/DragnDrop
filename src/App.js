import './App.css';
import Draggable from 'react-draggable';
import { useState } from 'react';

import Toast from './Toast';

function App() {

  let [isDraggable, setIsDraggable] = useState(true)
  let [show, setShow] = useState(false)

  
  return (
    <>
      <div id="App" className="App" style={{ width: "400px", height: "400px" }}>
        <Draggable disabled={isDraggable} onStop={() => {
          setShow(true)
          setTimeout(() => setShow(false), 2000)
        }}>
          <button id="btn" data-tip="This is tooltip" className='tooltip'>This is draggable</button>

        </Draggable>

        {show ? <Toast></Toast> : <></>}

        <button className='fixed_button' onClick={() => setIsDraggable(!isDraggable)}>{isDraggable ? "Enable Drag" : "Disable Drag"}</button>
        
        </div>


     <div id="App" className="App" style={{ width: "400px", height: "400px" }}>
        <Draggable disabled={isDraggable} onStop={() => {
          setShow(true)
          setTimeout(() => setShow(false), 2000)
        }}>
          <button id="btn" data-tip="This is tooltip" className='tooltip'>This is draggable</button>

        </Draggable>

        {show ? <Toast></Toast> : <></>}

        <button className='fixed_button' onClick={() => setIsDraggable(!isDraggable)}>{isDraggable ? "Enable Drag" : "Disable Drag"}</button>
      </div>

      
    </>
  );
}

export default App;
