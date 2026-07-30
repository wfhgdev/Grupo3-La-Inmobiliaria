import Agents from "./components/agents/Agents";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Banner from "./components/header/Banner";

function App() {
  return (
    <>
      <Header />
      <Banner />

      <Agents
        subtitle="NUESTRO EQUIPO"
        title="Conoce a nuestros agentes"
        description="Expertos en los barrios universitarios de Madrid, listos para encontrar la habitación perfecta para ti."
      />

      <div className="agents-wrapper">
        <Agents name="William Hernández" country="Alicante" image="Willian" />

        <Agents name="Willfredy Salcedo" country="Sevilla" image="Willfredy" />

        <Agents name="Beatriz Iñiguez" country="Granada" image="Beatriz" />

        <Agents name="Oscar Pérez" country="Granada" image="Oscar" />

        <Agents name="Margarita Bellido" country="Mallorca" image="Margarita" />
      </div>
      <Footer />
    </>
  );
}

export default App;
