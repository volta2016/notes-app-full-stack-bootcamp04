import "./styles.css";

//const notes = []
const notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    date: "2019-05-30T18:39:34.091Z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true
  }
];

const App = () => {
  if (!notes) {
    return "no tenemos notas que mostrar";
  }
  //otra forma
  if (typeof notes === "undefined" || notes.length === 0) {
    return "no tenemos notas que mostrar";
  }

  //no tiene mucho sentido ponerlo 2 veces
  if (notes === 0) {
    return "no tenemos notas que mostrar";
  }

  //si es null también tendrias que hacer un check
  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => (
        <div>
          <p>{note.content}</p>
          <small>
            <time>{note.date}</time>
          </small>
        </div>
      ))}
      
    </div>
  );
};

export default App;
