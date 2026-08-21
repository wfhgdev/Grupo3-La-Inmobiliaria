import { useEffect, useState } from "react";
import axios from "axios";
import "./Meals.css";

function Meals() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMeals = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?a=Spain"
        );
        setMeals(response.data.meals || []);
      } catch (err) {
        setError("No se pudieron cargar los platos.");
      }
    };

    getMeals();
  }, []);

  return (
    <section className="mealsSection">
      <div className="mealsHeader">
        <div>
          <span className="mealsSubtitle">GASTRONOMÍA ESPAÑOLA</span>
          <h2 className="mealsTitle">Platos de España</h2>
        </div>
      </div>

      {error && <p className="mealsError">{error}</p>}

      <div className="mealsGrid">
        {meals.map((meal) => (
          <article className="mealCard" key={meal.idMeal}>
            <div className="mealImageWrapper">
              <img
                className="mealImage"
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <span className="mealTag">Española</span>
            </div>

            <div className="mealContent">
              <h3 className="mealTitle">{meal.strMeal}</h3>

              <div className="mealLocationRow">
                <svg
                  className="mealLocIcon"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ff6a1a"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="mealNeighborhood">{meal.strArea}</span>
                <span className="mealDot">•</span>
                <span className="mealDistance">Receta Tradicional</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Meals;