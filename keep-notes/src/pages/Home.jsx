import React from 'react'
import {NavBar,SideBar,NotesInput} from "../components/index"
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