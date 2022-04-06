import React from 'react'
import {NavBar,SideBar,NotesInput, NoteCard} from "../components/index"
import { useData } from '../context'
import "../css/home.css"

function Home() {

  const {state} = useData();
  return (
    <>
      <NavBar/>
      <header className='home-container'>
        <SideBar/>
        <NotesInput></NotesInput>
      </header>
      <section className="notes-container">
        {state.notes.map(note => (<NoteCard notesData={note}/>))}
      </section>
    </>

  )
}

export {Home}