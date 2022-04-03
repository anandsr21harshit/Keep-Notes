import React from "react";
import "../css/side-bar.css";
import {Link} from "react-router-dom"

function SideBar() {
  return (
    <div className="side-bar">
      <Link to={"/home"} className="side-bar-links">
      <div className="options">
        <i className="bi bi-house-door-fill"></i>
        <h3>Home</h3>
      </div>
      </Link>
      <Link to={"/labels"} className="side-bar-links">
      <div className="options">
        <i className="bi bi-tags-fill"></i>
        <h3>Lables</h3>
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
      <Link to={"/profile"} className="side-bar-links">
      <div className="options">
        <i className="bi bi-person-fill"></i>
        <h3>Profile</h3>
      </div>
      </Link>
    </div>
  );
}

export { SideBar };
