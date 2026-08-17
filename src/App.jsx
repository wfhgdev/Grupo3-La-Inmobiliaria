import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
// import Flats from "./pages/flats/Flats"
// import Home from "./pages/home"
// import Agents from "./pages/agents"

function App() {
  return (
    <>
      <Header />
      <main className="p-6">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/flats" element={<Flats />} /> */}
          {/* <Route path="/agents" element={<Agents />} /> */}
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;