import { useEffect } from "react";
import axios from "axios";

function App() {

  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get(
        " https://www.themealdb.com/"
      );

      console.log(response);
    };

    getCharacters();
  }, []);

  return (
    <main>
      <h1>Rick and Morty</h1>
    </main>
  );
}

export default App;