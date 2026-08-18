import BannerComp from "../../components/header/BannerComp";
import FlatsComp from "../../components/flats/FlatsComp";
import AboutComp from "../../components/about/AboutComp";
import AgentsComp from "../../components/agents/AgentsComp";

const Home = () => {
  return (
    <>
      <BannerComp />
      <section className="flatsSection">
        <div className="flatsHeader">
          <div>
            <span className="flatsSubtitle">DISPONIBLES AHORA</span>
            <h2 className="flatsTitle">Habitaciones en Madrid</h2>
          </div>
          <a href="#" className="flatsLink">
            Ver todas &rsaquo;
          </a>
        </div>

        <div className="flatsGrid">
          <FlatsComp   
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
          <FlatsComp
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
          <FlatsComp
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

      <AboutComp />

      <AgentsComp
        subtitle="NUESTRO EQUIPO"
        title="Conoce a nuestros agentes"
        description="Expertos en los barrios universitarios de Madrid, listos para encontrar la habitación perfecta para ti."
      />

      <div className="agents-wrapper">
        <AgentsComp name="William Hernández" country="Alicante" image="Willian" />
        <AgentsComp name="Willfredy Salcedo" country="Sevilla" image="Willfredy" />
        <AgentsComp name="Beatriz Iñiguez" country="Granada" image="Beatriz" />
        <AgentsComp name="Oscar Pérez" country="Granada" image="Oscar" />
        <AgentsComp  name="Margarita Bellido" country="Mallorca" image="Margarita" />
      </div>
    </>
  );
};

export default Home;


