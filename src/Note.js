//aplico destructuring assignment
//ahora en una sola linea tenimos lo qye renderizamos antes
//Esto no suele estar mal del Todo
//Estamos exportando el modulo por defecto Note, dentro de App podemos
//poner el nombre que queramos
export const Note = ({ categories = [], content, date }) => {
  return (
    <li>
      <p>{content}</p>
      <small>
        <time>{date}</time>
      </small>
      {categories.map((category) => (
	    <small key={category}>{category}</small>
	    ))}
    </li>
  );
};

export const getNumber = () => 2;
