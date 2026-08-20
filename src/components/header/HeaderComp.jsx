import { Link } from "react-router-dom";
import "./HeaderComp.css";

function HeaderComp() {
  return (
    <header className="header">
      <div className="header-logo">
        <div className="logo-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </div>
        <span className="logo-text">
          <span className="logo-uni">Uni</span>
          <span className="logo-space">Space</span>
        </span>
      </div>

      <nav className="header-nav">
        <Link to="/">Inicio</Link>
        <Link to="/flats">Habitaciones</Link>
        <Link to="/about">Nosotros</Link>
        <Link to="/agents">Agentes</Link>
        <Link to="/meals">Comida</Link>
      </nav>
    </header>
  );
}

export default HeaderComp;
