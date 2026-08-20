import { useSearchParams } from "react-router-dom";
import FlatsComp from "../../components/flats/FlatsComp";

const habitaciones = [
  {
    image: "Flat01",
    price: 350,
    available: true,
    favorite: false,
    description: "Habitación luminosa en Malasaña",
    neighborhood: "Malasaña",
    university: "UCM",
    distance: "8 min a la UCM",
    bedroomCount: 3,
    wifi: true,
    position: "Exterior",
  },
  {
    image: "Flat02",
    price: 390,
    available: false,
    favorite: false,
    description: "Piso moderno cerca de IE University",
    neighborhood: "Salamanca",
    university: "IE University",
    distance: "5 min al IE University",
    bedroomCount: 4,
    wifi: true,
    position: "Exterior",
  },
  {
    image: "Flat03",
    price: 320,
    available: true,
    favorite: false,
    description: "Habitación acogedora en Lavapiés",
    neighborhood: "Lavapiés",
    university: "URJC",
    distance: "10 min a la URJC",
    bedroomCount: 2,
    wifi: true,
    position: "Interior",
  },
    { 
                    image:"Flat04",
                    price:390,
                    available:true,
                    favorite:false,
                    description:"Habitación acogedora en Lavapiés",
                    neighborhood:"Lavapiés",
                    university:"URJC",
                    distance:"10 min a la URJC",
                    bedroomCount:2,
                    wifi:true,
                    position:"Interior" ,
    },

    { 
                    image:"Flat05",
                    price:450,
                    available:true,
                    favorite:false,
                    description:"Habitación acogedora en Lavapiés",
                    neighborhood:"Lavapiés",
                    university:"URJC",
                    distance:"10 min a la URJC",
                    bedroomCount:2,
                    wifi:true,
                    position:"Interior" ,
    },
    { 
                    image:"Flat06",
                    price:650,
                    available:true,
                    favorite:false,
                    description:"Habitación acogedora en Lavapiés",
                    neighborhood:"Lavapiés",
                    university:"URJC",
                    distance:"10 min a la URJC",
                    bedroomCount:2,
                    wifi:true,
                    position:"Interior", 
    },
    

];
const Flats = () => {
    const [searchParams] = useSearchParams();
    const universidadBuscada = searchParams.get("universidad");

    const habitacionesFiltradas = universidadBuscada
        ? habitaciones.filter((h) =>
            h.university.toLowerCase().includes(universidadBuscada.toLowerCase())
          )
        : habitaciones;
    return (
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
    {habitacionesFiltradas.map((h, index) => (
        <FlatsComp key={index} {...h} />
    ))}
            </div>
            
        </section>
    );
};

export default Flats;