import React, { useState } from "react";
import { ChromePicker } from "react-color";
import axios from "axios";
import { useAuth } from "../context/auth-context";
import "../css/notes-input.css";


function NotesInput() {
  
  const {token} = useAuth();
  const [colorPalette, setColorPalette] = useState(false);
  const [color, setColor] = useState("#FFFFFF");

  const date = new Date();

  const initialNote = {
    title: "",
    content: "",
    dateCreated: `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`,
    label: "",
    backgroundColor: "#FFFFFF",
  };

  const [note, setNote] = useState(initialNote);

  const notesHandler = async () => {
    try{
      const response = await axios.post("/api/notes",note,{headers:{authorization: token}})

      if(response.status === 200 || response.status === 201){
        console.log("check response", response.data.notes)

      }
    }
    catch(err){
      console.log(err.message);
    }
  }

  return (
    <>
      <div className="notes-input-container">
        <header className="notes-header">
          <input
            className="notes-title"
            type="text"
            placeholder="Title"
            value={note.title}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
          />
          <p>
            <i className="bi bi-pin-fill"></i>
          </p>
        </header>
        <section>
          <textarea
            placeholder="Type Notes"
            className="notes-area"
            value={note.content}
            onChange={(e) => setNote({ ...note, content: e.target.value })}
          ></textarea>
        </section>
        <footer className="notes-footer">
          <div className="footer-left">
            <input
              type="text"
              placeholder="Label"
              className="notes-label"
              value={note.label}
              onChange={(e) => setNote({ ...note, label: e.target.value })}
            />
            <i
              className="bi bi-palette"
              onClick={() => setColorPalette(!colorPalette)}
            ></i>
            {colorPalette && (
              <ChromePicker
                className="color-palette"
                color={color}
                onChange={(newColor) => setColor(newColor)}
              />
            )}
          </div>
          <button className="btn btn-primary btn-add" onClick={()=>{
            notesHandler();
            setNote({
              title:"",
              content:"",
              backgroundColor: note.backgroundColor,
              dateCreated: note.dateCreated,
              label: ""
            })
          }}>Add</button>
        </footer>
      </div>
    </>
  );
}

export { NotesInput };
