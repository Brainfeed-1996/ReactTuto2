export default function Fruit({ fruitInfo, onFruitDelete }) {
  //state
  //const fruitInfo = props.fruitInfo
  //const onFruitDelete = props.onFruitDelete

  //Comportements

  //Affichage (render)
  return (
    <li key={fruitInfo.id}>
      {fruitInfo.nom}{" "}
      <button onClick={() => onFruitDelete(props.fruitInfo.id)}>X</button>
    </li>
  );
}
