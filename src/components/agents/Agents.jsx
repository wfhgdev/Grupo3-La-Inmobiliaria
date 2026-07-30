import './Agents.css';

const images = import.meta.glob('../../assets/img/*.png', {
  eager: true,
  import: 'default'
});

function Agents(props) {
  const imageSrc = props.image ? images[`../../assets/img/${props.image}.png`] : null;

  return (
    <>
      {props.title && (
        <div className="agentsHeader">
          <span className="agentsSubtitle">{props.subtitle}</span>
          <h2 className="agentsTitle">{props.title}</h2>
          <p className="agentsDescription">{props.description}</p>
        </div>
      )}

      {imageSrc && (
        <div className="agentCard">
          <img
            className="imageAgents"
            src={imageSrc}
            alt={`Photo of ${props.name}`}
          />
          <div className="agentsTextContainer">
            <h4 className="agentsNames">{props.name}</h4>
            <p className="agentsCountry">{props.country}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Agents;