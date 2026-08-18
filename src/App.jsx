// import Agents from "./components/agents/Agents";
// import Footer from "./components/footer/Footer";
// import Header from "./components/header/Header";
// import Banner from "./components/header/Banner";
// import Flats from "./components/flats/Flats";
// import About from "./components/about/About";

//nuevos:
import { Routes, Route } from "react-router-dom"
// import About from "./pages/about/About";
// import Flats from "./pages/flats/Flats";
// import Home from "./pages/home/Home";
import AgentsPages from "./pages/agents/AgentsPage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./styles/App.css";

function App() {
  return (
    <>
      <Header />
      <main className="p-6">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/flats" element={<Flats />} /> */}
          <Route path="/agents" element={<AgentsPages />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
