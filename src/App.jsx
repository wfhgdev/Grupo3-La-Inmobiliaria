import FooterComp from "./components/footer/FooterComp";
import HeaderComp from "./components/header/HeaderComp";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home"
import Flats from "./pages/flats/Flats"
import Agents from "./pages/agents/Agents"
import Meals from "./pages/meals/meals"


function App() {
  return (
    <>
      <HeaderComp />
      <main className="p-6">
        <Routes>
          { <Route path="/" element={<Home />} /> }
          {<Route path="/flats" element={<Flats />} />}
          {<Route path="/agents" element={<Agents />} />}
          {<Route path="/about" element={<About />} />}
        </Routes>
      </main>
      <FooterComp />
    </>
  );
}

export default App;