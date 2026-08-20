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
          {Meals.map((meal) => (
            <li key={meal.idMeal}>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                width="100"
              />

              <h2>{meal.strMeal}</h2>

        
            </li>
          ))}
        </ul>
 
    </main>
  );
}

export default App;