import React from "react";
import { Link } from "react-router-dom";
import "../css/landing-page.css";

function LandingPage() {
  return (
    <div className="landing-page-container">
      <div className="landing-page-content">
        <h1 className="title">Keep Notes</h1>
        <h3 className="sub-title">Your personalised note taking app</h3>
        <div className="landing-page-image">
          <img
            src="https://res.cloudinary.com/mranand/image/upload/v1648905575/mypics/notebook-pages_23-2147490500_vw2quc.jpg"
            alt="NoteBook"
          />
        </div>
        <button className="btn btn-primary btn-landing">
          <Link className="btn-link" to={"/login"}>
            Login
          </Link>
        </button>
      </div>
    </div>
  );
}

export { LandingPage };
