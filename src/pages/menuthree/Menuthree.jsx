import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );

        setCharacters(response.data.results);
      } catch (error) {
        setError("No se pudieron cargar los personajes.");
      } 
    };

    getCharacters();
  }, []);

  return (
    <main>
      <h1>Rick and Morty</h1>

      {error && <p>{error}</p>}

        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              <img
                src={character.image}
                alt={character.name}
                width="100"
              />

              <h2>{character.name}</h2>

              <p>{character.species}</p>
              <p>{character.status}</p>
              <p>{character.gender}</p>
            </li>
          ))}
        </ul>
 
    </main>
  );
}

export default App;