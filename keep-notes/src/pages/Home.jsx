import React from 'react'
import {NavBar} from "../components/NavBar"
import {SideBar} from "../components/SideBar"
import {NotesInput} from "../components/NotesInput"
import "../css/home.css"

function Home() {
  return (
    <>
      <NavBar/>
      <main className='home-container'>
        <SideBar/>
        <NotesInput></NotesInput>
      </main>
    </>

  )
}

export {Home}