import './Agents.css';


const images = import.meta.glob('../../assets/img/*.png', {
  eager: true,
  import: 'default'
});

function Testimony(props) {
  return (
    <div className='containerOfAgents'>
      <img
        className='imageAgents'
        
        src={images[`../../assets/img/${props.image}.png`]}
        
        alt={`Photo of ${props.name}`}
      />

      <div className='agentsTextContainer'>
        <p className='agentsNames'>
          
          <strong>{props.name}</strong> en {props.country}
        </p>

        <p className='agentsPosition'>
        
          {props.textAgent} en <strong>{props.aboutUs}</strong>
        </p>

        <p className='us'>
        
          "{props.ourTeam}"
        </p>
      </div>
    </div>
  );
}

export default Agents;
