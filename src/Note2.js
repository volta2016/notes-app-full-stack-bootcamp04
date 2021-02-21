//en vez de utilizar note

const Note = ({id, content, date}) => {
  console.log(note)

  return (
    <li key={id}>
      <p>{content}</p>
      <small>
        <time>{date}</time>
      </small>
    </li>
  );
};

export default Note;