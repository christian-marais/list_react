import { useState } from "react";

export default function ListForm({ handleAdd }) {
  //state
  const [nouveauElement, setNouveauElement] = useState("1");

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    // copie du state

    //manipulation sur la copie du state
    const id = new Date().getTime();
    const nom = nouveauElement;
    const elementAAjouter = { id, nom };
    handleAdd(elementAAjouter);
    //modifier le state avec le setter

    setNouveauElement("");
    // console.log(inputRef.current.value);
  };
  const handleChange = (event) => {
    setNouveauElement(event.target.value);
  };
  // affichage (render)
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={nouveauElement}
        placeholder="Ajouter un item..."
      />
      <button>Ajouter + </button>
    </form>
  );
}
