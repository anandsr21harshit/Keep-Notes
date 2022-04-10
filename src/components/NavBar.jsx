import React, { useState } from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import { useAuth, useData } from "../context";

function NavBar() {
  const [list, setList] = useState(false);
  const {logOutHandler} = useAuth();
  const {state, dispatch} = useData();
  const [filter, setFilter] = useState(false);
  
  return (
    <>
      <nav className="nav-bar">
        <h1 className="nav-brand">Keep Notes</h1>
        <ul className="menus">
          <li className="menu">
            <i className="bi bi-list" onClick={() => setList(!list)}></i>
          </li>
        </ul>
      </nav>
      {list && (
        <div className="modal">
          <ul className="list-container hidden-list">
            <div className="list-heading">
              <i className="bi bi-x-lg" onClick={() => setList(false)}></i>
            </div>
            <li className="stacked">
              <Link to={"/home"} className="side-bar-links">
                <div className="options">
                  <i className="bi bi-house-door-fill"></i>
                  <h3>Home</h3>
                </div>
              </Link>
            </li>
            <li className="stacked">
              <Link to={"/archive"} className="side-bar-links">
                <div className="options">
                  <i className="bi bi-archive-fill"></i>
                  <h3>Archive</h3>
                </div>
              </Link>
            </li>
            <li className="stacked">
              <Link to={"/trash"} className="side-bar-links">
                <div className="options">
                  <i className="bi bi-trash-fill"></i>
                  <h3>Trash</h3>
                </div>
              </Link>
            </li>
            <li className="stacked">
              <Link to={"#"} className="side-bar-links" onClick={()=>setFilter(filter => !filter)}>
                <div className="options">
                  <i className="bi bi-funnel-fill"></i>
                  <h3>Filter</h3>
                </div>
              </Link>
            </li>
            {filter && (
          <div className="filter-container">
            <div className="filter-item">
              <label>
                <input
                  type="radio"
                  name="sort"
                  checked={state.date === "new"}
                  onChange={() => {
                    dispatch({ type: "FILTER", payload: "new" });
                  }}
                />
                New to Old
              </label>
            </div>
            <div className="filter-item">
              <label>
                <input
                  type="radio"
                  name="sort"
                  checked={state.date === "old"}
                  onChange={() => {
                    dispatch({ type: "FILTER", payload: "old" });
                  }}
                />
                Old to New
              </label>
            </div>
            <div className="filter-item" onClick={()=> dispatch({type:"FILTER", payload:""})}>
              <p>Clear Filter</p>
            </div>
          </div>
        )}
            <li className="stacked" onClick={logOutHandler}>
              <Link to={"/login"} className="side-bar-links">
                <div className="options">
                  <i className="bi bi-person-fill"></i>
                  <h3>LogOut</h3>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export { NavBar };
