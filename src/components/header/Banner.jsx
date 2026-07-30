import './Banner.css';

function Banner() {
  return (
    <section className="banner">
    
      <div className="banner-content">

        
        <span className="banner-badge">
          PISOS COMPARTIDOS PARA ESTUDIANTES EN MADRID
        </span>

      
        <h1 className="banner-title">
          Encuentra tu nuevo hogar{' '}
          <span className="banner-title-highlight">
            universitario en Madrid.
          </span>
        </h1>

     
        <div className="banner-search">
          <input
            type="text"
            placeholder="Encuentra tu habitación compartida en Madrid (Barrio/Universidad)"
            className="banner-search-input"
          />
          <button className="banner-search-button">Buscar</button>
        </div>

      </div>
    </section>
  );
}

export default Banner;