import Agents from "./components/agents/Agents";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Banner from "./components/header/Banner";
import Flats from "./components/flats/Flats";
import About from "./components/about/About";


function App() {
  return (
    <>
      <Header />
      <Banner />
      <section className="flatsSection">
        <div className="flatsHeader">
          <div>
            <h3>Disponibles ahora</h3>
            <h1>Habitaciones en Madrid</h1>
          </div>
          <a href="#" className="flatsLink">
            Ver todas
          </a>
        </div>

        <div className="flatsGrid">
          <Flats
            image="Flat01"
            price={350}
            available={true}
            favorite={false}
            description="Habitación luminosa en Malasaña"
            neighborhood="Malasaña"
            distance="8 min a la UCM"
            bedroomCount={3}
            wifi={true}
            position="Exterior"
          />
          <Flats
            image="Flat02"
            price={390}
            available={false}
            favorite={false}
            description="Piso moderno cerca de IE University"
            neighborhood="Salamanca"
            distance="5 min al IE University"
            bedroomCount={4}
            wifi={true}
            position="Exterior"
          />
          <Flats
            image="Flat03"
            price={320}
            available={true}
            favorite={false}
            description="Habitación acogedora en Lavapiés"
            neighborhood="Lavapiés"
            distance="10 min a la URJC"
            bedroomCount={2}
            wifi={true}
            position="Interior"
          />
        </div>
      </section>
      <About />
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