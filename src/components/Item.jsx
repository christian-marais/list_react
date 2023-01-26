export default function Item({ item, onClick }) {
  //state

  //comportements

  //affichage
  return (
    <li>
      {item.nom}
      <button onClick={onClick}>X</button>
    </li>
  );
}
