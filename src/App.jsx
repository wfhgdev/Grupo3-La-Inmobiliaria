import Flats from "./components/flats/Flats";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;