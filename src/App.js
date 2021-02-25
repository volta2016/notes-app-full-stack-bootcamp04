import "./styles.css";
import { Note } from "./components/Note";
import { useEffect, useState } from "react";

import {
  create as createNotes,
  getAll as getAllNotes
} from "./components/services/notes/index";

//import { Note, getNumber } from "./Note";
//el tipo de dato que vamos a tener en nuestra notas hemos dicho que
//[]

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("useEffect");
    setLoading(true);
    getAllNotes().then((notes) => {
      setNotes(notes);
      setLoading(false);
    });
    return () => console.log("removeEffect");
  }, []);
  

  useEffect(() => {
    console.log("useEffect 2");
  }, [newNote]);


  const handleChange = (event) => setNewNote(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1
    };

    setError("");
    createNotes(noteToAddToState)
      .then((newNote) => {
        setNotes((prevNotes) => prevNotes.concat(newNote));
      })
      .catch((error) => {
        console.log(error);
        setError("La API ha tenido problemas");
      });

    setNewNote("");
  };

  console.log("render!");

  return (
    <div>
      <h1>Notes</h1>
      {loading ? "estas cargando..." : ""}

      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note} />
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>crear nota</button>
      </form>
      {error ? <span style={{ color: "red" }}>{error}</span> : ""}
    </div>
  );
}
