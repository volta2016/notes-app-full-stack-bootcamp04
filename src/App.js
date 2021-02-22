import "./styles.css";
import { Note } from "./components/Note"
import { useState } from "react";
//import { Note, getNumber } from "./Note";



export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault()
    console.log("crear nota");
    const noteToAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    };
    console.log(noteToAddToState);
    setNotes([...notes, noteToAddToState]);
    setNewNote("");
  };

  
  return (
    <div>
      <h1>Notes</h1>
      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>

      <div>
        <input type="text" onChange={handleChange} value={newNote} />
        <button onClick={handleClick}>crear nota</button>
      </div>
    </div>
  );
};


