import React from 'react'
import {NavBar,SideBar,NotesInput, NoteCard} from "../components/index"
import { useData } from '../context'
import {sortByDate} from "../utilities/filterFunction"
import "../css/home.css"

function Home() {

  const {state} = useData();
  const {notes, date} = state;
  const sortedData = sortByDate(notes, date);

  return (
    <>
      <NavBar/>
      <header className='home-container'>
        <SideBar/>
        <NotesInput/>
      </header>
      <section className="notes-container">
        {sortedData.map(note => (<NoteCard notesData={note} key={note._id}/>))}
      </section>
    </>

  )
}

export {Home}