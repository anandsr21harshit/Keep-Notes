import React, { useState } from 'react'
import "../css/notes-input.css"
import {ChromePicker} from "react-color"

function NotesInput() {

  const [colorPalette, setColorPalette] = useState(false);
  const [color , setColor] = useState("#FFFFFF");

  return (
    <>
    <div className="notes-input-container">
       <header className='notes-header'>
           <input className='notes-title' type="text" placeholder='Title' />
           <p><i className="bi bi-pin-fill"></i></p>
       </header>
      <section>
          <textarea placeholder='Type Notes' className='notes-area'></textarea>
      </section>
      <footer className='notes-footer'>
          <div className="footer-left">
            <input type="text" placeholder='Label' className='notes-label' />
            <i className="bi bi-palette" onClick={(()=>setColorPalette(!colorPalette))}></i>
            {colorPalette && <ChromePicker className='color-palette' color={color} onChange={(newColor)=>setColor(newColor)}/>}
          </div>
          <button className='btn btn-primary btn-add'>Add</button>
      </footer>
    </div>
    </>
  )
}

export {NotesInput}