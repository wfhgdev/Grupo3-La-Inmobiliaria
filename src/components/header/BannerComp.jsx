import './BannerComp.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BannerComp() {
  const [busqueda, setBusqueda] = useState('');
  const navigate = useNavigate(); 
  const [error, setError] = useState('');

  const handleBuscar = () => {
    if (busqueda === '') {
    setError('Por favor, elige una universidad para buscar.');
    return;
  }
    setError(''); 
    navigate(`/flats?universidad=${busqueda}`);
  };

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
        {error && <p className="banner-search-error">{error}</p>}


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

          <select className="banner-search-input" value={busqueda} onChange={(e) => setBusqueda(e.target.value)}>
            <option value="">-- Elige universidad --</option>
            <option value="UCM">UCM</option>
            <option value="URJC">URJC</option>
            <option value="IE University">IE University</option>
          </select>
          
          {/* <input
            type="text"
            placeholder="Encuentra tu habitación compartida en Madrid (Barrio/Universidad)"
            className="banner-search-input"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          /> */}
          <button className="banner-search-button" onClick={handleBuscar}>Buscar</button>
        </div>
        
      </div>
    </section>
  );
}

export default BannerComp;