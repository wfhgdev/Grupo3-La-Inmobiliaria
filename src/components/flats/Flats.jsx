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
        <p className="flatPrice">
          €{props.price}<span>/mes</span>
        </p>
        <p className={`flatAvailability ${props.available ? 'is-available' : 'is-unavailable'}`}>
          {props.available ? 'Disponible' : 'Últimas plazas'}
        </p>
      </div>

      <div className="flatContent">
        <h3 className="flatDescription">{props.description}</h3>

        <div className="flatLocationRow">
          <svg className="flatLocIcon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff6a1a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="flatNeighborhood">{props.neighborhood}</span>
          <span className="flatDot">•</span>
          <span className="flatDistance">{props.distance}</span>
        </div>

        <div className="flatFeatures">
          <span className="flatBedrooms">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 4v16M2 8h20v12M2 17h20M22 8V4M6 8v3M10 8v3" />
            </svg>
            {props.bedroomCount} camas
          </span>
          <span className="flatWifi">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" />
            </svg>
            {props.wifi ? 'Wi-Fi incluido' : 'Sin Wi-Fi'}
          </span>
          <span className="flatPosition">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
            {props.position}
          </span>
        </div>

        <button className="flatButton">
          Ver detalles &rsaquo;
        </button>
      </div>
    </article>
  );
}

export default Flats;