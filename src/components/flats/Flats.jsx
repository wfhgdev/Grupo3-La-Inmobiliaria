import './Flats.css';

const images = import.meta.glob('../../assets/img/*.png', 
    { eager: true, import: 'default' });

function Flats(props) {
  return (
    <div className="Flats">
      <img 
        className='flatImage'
        src={images[`../../assets/img/${props.image}.png`]}
        alt={`Picture of ${props.neighborhood} flat`} 
      />
      <p className='flatPrice'>€{props.price}/mes</p>
      <p className='flatDescription'>{props.description}</p>
      <p className='flatNeighborhood'>{props.neighborhood}</p>
      <p className='flatDistance'>{props.distance}</p>
      <p className='flatBedrooms'>{props.bedroomCount} habitaciones</p>
      <p className='flatWifi'>{props.wifi ? 'WiFi disponible' : 'Sin WiFi'}</p>
      <p className='flatPosition'>{props.position}</p>
      <button className='flatButton'>Ver más</button>
    </div>
  );
}

export default Flats;