import Flats from "./components/flats/Flats";

function App() {
  return (
    <>
      <h3>Disponibles ahora</h3>
      <h1>Habitaciones en Madrid</h1>
      <Flats 
        image="Flat01"
        description="Habitación luminosa en Malasaña"
        neighborhood="Malasaña"
        distance="8 min a la UCM"
        bedroomCount={3}
        wifi={true}
        position="Exterior"
      />
      <Flats 
        image="Flat02"
        description="Piso moderno cerca de IE University"
        neighborhood="Salamanca"
        distance="5 min al IE University"
        bedroomCount={4}
        wifi={true}
        position="Exterior"
      />
      <Flats 
        image="Flat03"
        description="Habitación acogedora en Lavapiés"
        neighborhood="Lavapíes"
        distance="10 min a la URJC"
        bedroomCount={2}
        wifi={true}
        position="Interior"
      />
    </>
  );
}

export default App;