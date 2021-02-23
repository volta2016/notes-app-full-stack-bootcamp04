import "./styles.css";
import { Note } from "./components/Note";
import { useEffect, useState } from "react";
//import { Note, getNumber } from "./Note";
//el tipo de dato que vamos a tener en nuestra notas hemos dicho que
//[]

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
      })
    //console.log("useEffect");
  }, []);

  function handleChange(event) {
    setNewNote(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteToAddToState = {
      id: notes.length + 1,
      title: newNote,
      body: newNote
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

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>crear nota</button>
      </form>
    </div>
  );
}
