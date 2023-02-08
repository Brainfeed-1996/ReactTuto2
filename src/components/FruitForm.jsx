import { useState } from "react/cjs/react.production.min";

export default function FruitForm({handleSubmit})
    //state
    const [nouveauFruit, setNouveauFruit] = useState("");
    //Comportements
    const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(inputRef.current.value);
    
    //1. Copie du state
    const fruitsCopy = [...fruits]
    //2. Manipulation sur la copie du state
    const id = new Date().getTime()
    const nom = nouveauFruit
    const fruitAAjouter = { id, nom }
    fruitsCopy.push({ fruitAAjouter })
    //3. Modifier le state avec le setter
    setFruits(fruitsCopy);
    setNouveauFruit("");
  };
  
  const handleChange = (event) =>{
    setNouveauFruit(event.target.value);
  }
    //Affichage (render)
    return ( 
        <form action="submit" onSubmit={handleSubmit}>
            <input
            value={nouveauFruit}
            type="text"
            placeholder="Ajoutez un fruit..."
            onChange={handleChange}
        />
        <button>Ajouter +</button>
      </form>
    );
}