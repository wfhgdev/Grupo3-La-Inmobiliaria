import './Flats.css';

const images = import.meta.glob('../../assets/img/*.png', { eager: true, import: 'default' });

function Flats(props) {
  return (
    <article className="Flats">
      <div className="flatImageWrapper">
        <img
          className="flatImage"
          src={images[`../../assets/img/${props.image}.png`]}
          alt={`Picture of ${props.neighborhood} flat`}
        />
        <p className="flatPrice">€{props.price}<span>/mes</span></p>
        <p className={`flatAvailability ${props.available ? 'is-available' : 'is-unavailable'}`}>
          {props.available ? 'Disponible' : 'Últimas plazas'}
        </p>
      </div>

      <div className="flatContent">
        <p className="flatDescription">{props.description}</p>

        <div className="flatLocationRow">
          <p className="flatNeighborhood">{props.neighborhood}</p>
          <span className="flatDot">•</span>
          <p className="flatDistance">{props.distance}</p>
        </div>

        <div className="flatFeatures">
          <p className="flatBedrooms">{props.bedroomCount} camas</p>
          <p className="flatWifi">{props.wifi ? 'Wi‑Fi incluido' : 'Sin Wi‑Fi'}</p>
          <p className="flatPosition">{props.position}</p>
        </div>

        <button className="flatButton">Ver detalles</button>
      </div>
    </article>
  );
}

export default Flats;