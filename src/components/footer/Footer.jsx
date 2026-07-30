import "./Footer.css";
import facebookIcon from "../../assets/img/facebook.png";
import instagramIcon from "../../assets/img/instagram.png";
import phoneIcon from "../../assets/img/telephone.png";
import directionIcon from "../../assets/img/direction.png";
import emailIcon from "../../assets/img/email.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-container">
        <div className="footer-logo-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </div>
        <span className="footer-logo-text">
          <span className="footer-logo-uni">Uni</span>
          <span className="footer-logo-space">Space</span>
        </span>
      </div>

      <div className="footer-section-social">
        <span className="footer-title">Contacto</span>
        <div className="social-icons">
          <img src={facebookIcon} alt="Facebook" className="social-icon" />
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </div>
      </div>

      <div className="footer-item">
        <img src={phoneIcon} alt="Teléfono" className="contact-icon" />
        <span>+34 987123456</span>
      </div>

      <div className="footer-item">
        <img src={directionIcon} alt="Dirección" className="contact-icon" />
        <div className="address-text">
          <p>Calle de Fuencarral, 72</p>
          <p>28004 Madrid, España</p>
        </div>
      </div>

      <div className="footer-item">
        <img src={emailIcon} alt="Email" className="contact-icon" />
        <span>hola@unispace.es</span>
      </div>
    </footer>
  );
}

export default Footer;