import "./Header.css";

<<<<<<< HEAD
function Header(){
        return(
            <header className="header">
                <div className="header-logo">
                    <span className="logo-icon">🏠</span>
                    <span className="logo-text">UniSpace</span>
                </div>

            <nav className="header-nav">
=======
function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <div className="logo-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </div>
        <span className="logo-text">
          <span className="logo-uni">Uni</span>
          <span className="logo-space">Space</span>
        </span>
      </div>

      <nav className="header-nav">
>>>>>>> feature/flats
        <a href="#inicio">Inicio</a>
        <a href="#pisos">Pisos</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <button className="header-button">Publicar Anuncio</button>
    </header>
<<<<<<< HEAD

        );
    }

    export default Header;

























    
=======
  );
}

export default Header;
>>>>>>> feature/flats
