import React, { useState } from "react";
import "../css/side-bar.css";
import {Link} from "react-router-dom"
import { LogoutModal } from "./Logout-Modal";
import { useData } from "../context";

function SideBar() {

  const localStorageItem = JSON.parse(localStorage.getItem("loginCred"))
  const user = localStorageItem.user.firstName;

  const [logoutModal, setLogoutModal] = useState(false);
  const [filter, setFilter] = useState(false);

  const {dispatch} = useData();

  return (
    <>
    <div className="side-bar">
      <Link to={"/home"} className="side-bar-links">
      <div className="options">
        <i className="bi bi-house-door-fill"></i>
        <h3>Home</h3>
      </div>
      </Link>
      <Link to={"/archive"} className="side-bar-links">
      <div className="options">
        <i className="bi bi-archive-fill"></i>
        <h3>Archive</h3>
      </div>
      </Link>
      <Link to={"/trash"} className="side-bar-links">
      <div className="options">
        <i className="bi bi-trash-fill"></i>
        <h3>Trash</h3>
      </div>
      </Link>
      <Link to={"#"} className="side-bar-links">
      <div className="options" onClick={()=>setFilter(!filter)}>
        <i className="bi bi-funnel-fill"></i>
        <h3>Filter</h3>
      </div>
      {filter && <div className = "filter-container">
        <div className="filter-item">
          <input type="radio" id="new" name="sort" value="new" onChange={(e)=> dispatch({type:"FILTER", payload:e.target.value})} />
          <label htmlFor="new">New to Old</label>
        </div>
        <div className="filter-item">
          <input type="radio" id="old" name="sort" value="old" onChange={(e)=> dispatch({type:"FILTER", payload:e.target.value})} />
          <label htmlFor="old">Old to New</label>
        </div>
        <div className="filter-item">
          <p>Clear Filter</p>
        </div>
      </div>}
      </Link>
      <Link to={"#"} className="side-bar-links">
      <div className="options" onClick={()=>setLogoutModal(true)}>
        <i className="bi bi-person-fill"></i>
        <h3>{user}</h3>
      </div>
      </Link>
    </div>
    {logoutModal && <LogoutModal setLogoutModal={setLogoutModal}/>}
    </>
  );
}

export { SideBar };
