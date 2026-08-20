import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const getMeals = async () => {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canada"
      );

      setMeals(response.data.meals);
    };

    getMeals();
  }, []);
    

  return (
    <main>
      <h1>Comidas</h1>
      <div>
        {meals.map((meal) => (
          <div key={meal.idMeal}>
            <h2>{meal.strMeal}</h2>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;