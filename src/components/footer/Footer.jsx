import "./Footer.css";
import logoUnispace from "../../assets/img/image-icon.png";
import facebookIcon from "../../assets/img/facebook.png";
import instagramIcon from "../../assets/img/instagram.png";
import phoneIcon from "../../assets/img/telephone.png";
import directionIcon from "../../assets/img/direction.png";
import emailIcon from "../../assets/img/email.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={logoUnispace} alt="Logo de UniSpace" className="footer-logo" />

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