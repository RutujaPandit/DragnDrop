import Toast from './Toast';
import {  useState } from 'react';
import Draggable from 'react-draggable';

const Component = (props) => {

    let [isDraggable, setIsDraggable] = useState(true)
     let [show, setShow] = useState(false)

    return (

        <>
        
      <div id="App" className="App" style={{ width: "450px", height: "450px" }}>
        <Draggable disabled={isDraggable} onStop={() => {
          setShow(true)
          setTimeout(() => setShow(false), 2000)
        }}>
          <button id="btn" data-tip="This is tooltip" className='tooltip'>This is draggable</button>

        </Draggable>

        {show ? <Toast></Toast> : <></>}

        <button className='fixed_button' onClick={() => setIsDraggable(!isDraggable)}>{isDraggable ? "Enable Drag" : "Disable Drag"}</button>
        
        </div>
        

     {/* <div id="App" className="App" style={{ width: "400px", height: "400px" }}>
        <Draggable disabled={isDraggable} onStop={() => {
          setShow(true)
          setTimeout(() => setShow(false), 2000)
        }}>
          <button id="btn" data-tip="This is tooltip" className='tooltip'>This is draggable</button>

        </Draggable>

        {show ? <Toast></Toast> : <></>}

        <button className='fixed_button' onClick={() => setIsDraggable(!isDraggable)}>{isDraggable ? "Enable Drag" : "Disable Drag"}</button>
      </div> */}

      
    </>

    )
}

export default Component;
