import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [Meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMeals = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?a=Spain"
        );

        setMeals(response.data.meals);
      } catch (error) {
        setError("No se pudieron cargar los platos.");
      } 
    };

    getMeals();
  }, []);

  return (
    <main>
      <h1>Meals on Spain</h1>

      {error && <p>{error}</p>}

        <ul>
          {Meals.map((character) => (
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