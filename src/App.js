import "./styles.css";
import { useState } from "react";
//import {useRef} from "react";
import Item from "./components/Item";
import ListForm from "./components/ListForm";

export default function App() {
  //state
  const [items, setItems] = useState([
    { id: 1, nom: "Ajouter une tâche" },
    { id: 2, nom: "Supprimer une tâche" }
  ]);
  // const inputRef = useRef();//va rechercher l'élément identifié par

  //comportements

  const handleDelete = (id) => {
    //1. faire une copie du state
    const itemsCopy = [...items];
    //2. manipuler mon state
    const itemsCopyUpdated = itemsCopy.filter((item) => item.id !== id);
    //3. modifier mon state avec le setter
    setItems(itemsCopyUpdated);
  };

  const handleAdd = (itemAAjouter) => {
    const itemsCopy = [...items];
    itemsCopy.push(itemAAjouter);
    setItems(itemsCopy);
  };
  const afficherItemPrefere = (itemNom) => {
    alert(`j'aime trop ce item ${itemNom}`);
  };
  //affichage

  return (
    <div className="App">
      <h1>Liste des tâches</h1>
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onClick={() => handleDelete(item.id)}
          />
        ))}
      </ul>
      <ListForm handleAdd={handleAdd} />
    </div>
  );
}
