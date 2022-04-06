import axios from "axios";
import React, { useState } from "react";
import { NavBar } from "../components/NavBar";
import { SideBar } from "../components/SideBar";
import { useData } from "../context";
import "../css/trash.css";

function Trash() {
  const { state, dispatch } = useData();


  function permanentDeleteHandler(id){
    const newData = state.trash.filter(item => item._id !== id);

    dispatch({type:"PERMANENT_DELETE",payload:newData})
  }

  function restoreHandler(id){
    const restoredItem = state.trash.filter(item => item._id === id);
    const newData = state.trash.filter(item => item._id !== id);

    dispatch({type:"ADD_NOTES", payload:{note:restoredItem}});
    dispatch({type:"PERMANENT_DELETE",payload:newData})

  }

  return (
    <>
      <NavBar></NavBar>
      <div className="trash-container">
        <SideBar></SideBar>
        {state.trash.map((trashItem) => {
          return (
            <div className="card-container" key={trashItem._id}>
              <div
                className="card card-without-image"
                style={{backgroundColor: trashItem.backgroundColor.hex}}
              >
                <div className="heading">
                  <div className="card-title">{trashItem.title}</div>
                  <div className="card-sub-title">{trashItem.dateCreated}</div>
                </div>
                <div className="card-content">{trashItem.content}</div>
                <footer className="card-footer">
                  <i title="restore" className="bi bi-arrow-bar-up m-32" onClick={()=>restoreHandler(trashItem._id)}></i>
                  <i
                    title="delete permanently"
                    className="bi bi-trash-fill m-32"
                    onClick={() => permanentDeleteHandler(trashItem._id)}
                  ></i>
                </footer>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export { Trash };
