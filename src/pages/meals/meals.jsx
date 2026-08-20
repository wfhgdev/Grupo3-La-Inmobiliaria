import { useEffect } from "react";
import axios from "axios";

function App() {

  useEffect(() => {
    const getMeals = async () => {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canada"
      );

      console.log(response);
    };

    getMeals();
  }, []);
    

  return (
    <main>
      <h1>Comidas</h1>
    </main>
  );
}

export default App;