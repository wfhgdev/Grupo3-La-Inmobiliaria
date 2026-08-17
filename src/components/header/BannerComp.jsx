import './BannerComp.css';

function BannerComp() {
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
          <svg
            className="banner-search-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
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

export default BannerComp;