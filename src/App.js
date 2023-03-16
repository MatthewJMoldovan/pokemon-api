
import { useState } from "react";
import './App.css';




function App() {
  
  const [allPokemon, setAllPokemon] = useState([]);

  const handleFetchPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=808")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      setAllPokemon(response.results);
    })
    .catch((err) => {
      console.log(err);
    });
  }






  return (
    <div className="App">
      <button onClick={(e) => {
        handleFetchPokemon();
      }}>Catch them All!</button>
      {allPokemon.map((pokemon, i) => {
        return(
          <p key={i}>{pokemon.name}</p>
        )
      })}
    </div>
  );
}

export default App;
