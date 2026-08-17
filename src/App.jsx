// import Agents from "./components/agents/Agents";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
// import Banner from "./components/header/Banner";
// import Flats from "./components/flats/Flats";
// import About from "./components/about/About";
import "./styles/App.css";
//nuevos:
import { Routes, Route } from "react-router-dom";
import About from "./pages/about";
// import Flats from "./pages/flats"
// import Home from "./pages/home"
// import Agents from "./pages/agents"

function App() {
  return (
    <>
      <Header />
      <main className="p-6">
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/flats" element={<Flats />} />
          <Route path="/agents" element={<Agents />} /> */}
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
