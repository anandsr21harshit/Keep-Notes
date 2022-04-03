import React from 'react'
import {NavBar} from "../components/NavBar"
import {SideBar} from "../components/SideBar"
import "../css/trash.css"

function Trash() {
  return (
    <>
    <NavBar></NavBar>
    <div className="trash-container">
        <SideBar></SideBar>
    </div>
    </>
  )
}

export {Trash};