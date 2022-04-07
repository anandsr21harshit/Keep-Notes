import axios from "axios";
import React from "react";
import { useAuth, useData } from "../context";
import "../css/note-card.css";

function NoteCard({ notesData }) {
  const{token} = useAuth()
  const{state,dispatch} = useData()

  async function deleteHandler() {
    try {
      const response = await axios.delete(`/api/notes/${notesData._id}`, {
        headers: {
          authorization: token,
        },
      });

      if(response.status === 200 || response.status === 201){
        const deletedData = state.notes.filter(item => item._id === notesData._id)[0];
        console.log({deletedData});
        dispatch({type:"TRASH", payload:deletedData})
        dispatch({type:"ADD_NOTES",payload:{note: response.data.notes}})
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  async function archiveHandler(){
    try{
      const response = await axios.post(`/api/notes/archives/${notesData._id}`,{notesData},{
        headers:{
          authorization:token
        }
      });

      if(response.status === 200 || response.status === 201){
        dispatch({type:"ARCHIVE",payload:{archive: response.data.archives}});
        dispatch({type:"ADD_NOTES", payload:{note: response.data.notes}});
      }
    }
    catch(err){
      console.error(err);
    }
  }

  return (
    <div className="card-container">
      <div
        className="card card-without-image"
        style={{ backgroundColor: notesData.backgroundColor}}
      >
        <div className="heading">
          <div className="card-title">{notesData.title}</div>
          <div className="card-sub-title">{notesData.dateCreated}</div>
        </div>
        <div className="card-content">{notesData.content}</div>
        <footer className="card-footer">
          <i title="edit" className="bi bi-pencil-square m-32"></i>
          <i title="archive" className="bi bi-archive-fill m-32" onClick={archiveHandler}></i>
          <i
            title="delete"
            className="bi bi-trash-fill m-32"
            onClick={deleteHandler}
          ></i>
        </footer>
      </div>
    </div>
  );
}

export { NoteCard };
