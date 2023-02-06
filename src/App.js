import { useState } from "react";

function App() {
  //state (état, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" }
  ]);
  //Comportements
  const handleDelete = (id) => {
    console.log(id);
  };
  //Affichage (render)
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.nom} <button onClick={handleDelete}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
