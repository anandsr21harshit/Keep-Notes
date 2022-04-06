import React from "react";
import "../css/note-card.css";

function NoteCard({notesData}) {
  return (
    <div className="card-container">
      <div className="card card-without-image" style={{backgroundColor:notesData.backgroundColor.hex}}>
        <div className="heading">
          <div className="card-title">{notesData.title}</div>
          <div className="card-sub-title">{notesData.dateCreated}</div>
        </div>
        <div className="card-content">
         {notesData.content}
        </div>
        <footer className="card-footer">
          <i title="edit" class="bi bi-pencil-square m-32" ></i>
          <i title="archive"class="bi bi-archive-fill m-32"></i>
          <i title="delete" class="bi bi-trash-fill m-32"></i>
        </footer>
      </div>
    </div>
  );
}

export { NoteCard };
