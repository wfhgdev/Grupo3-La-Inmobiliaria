import FooterComp from "./components/footer/FooterComp";
import HeaderComp from "./components/header/HeaderComp";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
<<<<<<< HEAD
import Home from "./pages/home/Home"
import Flats from "./pages/flats/Flats"
=======
// import Flats from "./pages/flats/Flats"
import Home from "./pages/home/Home"
>>>>>>> eef426310beb3cbaa192904ba019f51f3a2dda6e
import Agents from "./pages/agents/Agents"

function App() {
  return (
    <>
      <HeaderComp />
      <main className="p-6">
        <Routes>
          { <Route path="/" element={<Home />} /> }
          {/* <Route path="/flats" element={<Flats />} /> */}
          {<Route path="/agents" element={<Agents />} />}
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <FooterComp />
    </>
  );
}

export default App;