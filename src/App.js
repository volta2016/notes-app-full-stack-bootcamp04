import "./styles.css";
import { Note, getNumber } from "./Note";
import { useState } from "react" 
//import { Note, getNumber } from "./Note";

getNumber();



const App = (props) => {
  const [notes, setNotes] = useState(props.notes)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => 
        <Note key={note.id} {...note} />)}
      </ul>
      <input type="text" />
    </div>
  );
};

export default App;
