import "./Header.css";

function Header(){
        return(
            <header className="header">
                <div className="header-logo">
                    <span className="logo-icon">🏠</span>
                    <span className="logo-text">UniSpace</span>
                </div>

            <nav className="header-nav">
        <a href="#inicio">Inicio</a>
        <a href="#pisos">Pisos</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <button className="header-button">Publicar Anuncio</button>
    </header>

        );
    }

    export default Header;

























    