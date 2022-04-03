import React from 'react'
import {NavBar} from "../components/NavBar"
import {SideBar} from "../components/SideBar"
import "../css/archive.css"

function Archive() {
  return (
    <>
    <NavBar></NavBar>
    <div className="archive-container">
        <SideBar></SideBar>
    </div>
    </>
  )
}

export {Archive}