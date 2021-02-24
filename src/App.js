import "./styles.css";
import { Note } from "./components/Note";
import { useEffect, useState } from "react";
//import { Note, getNumber } from "./Note";
//el tipo de dato que vamos a tener en nuestra notas hemos dicho que
//[]

export default function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    console.log("useEffect")
    setLoading(true)
    setTimeout(() => {
      console.log("ahora! setTimeOut")
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log("Setiando las notas de la Api")
        setNotes(json)
        setLoading(false)
      })
    }, 2000)
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

  console.log("render!")
  

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
    </div>
  );
}
