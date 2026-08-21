import "./FooterComp.css";
import facebookIcon from "../../assets/img/facebook.png";
import instagramIcon from "../../assets/img/instagram.png";
import phoneIcon from "../../assets/img/telephone.png";
import directionIcon from "../../assets/img/direction.png";
import emailIcon from "../../assets/img/email.png";

function FooterComp() {
  return (
    <footer className="footer">
      <div className="footerLogoContainer">
        <div className="footerLogoIcon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
        </div>
        <span className="footerLogoText">
          <span className="footerLogoUni">Uni</span>
          <span className="footerLogoSpace">Space</span>
        </span>
      </div>

      <div className="footerSectionSocial">
        <span className="footerTitle">Contacto</span>
        <div className="socialIcons">
          <img src={facebookIcon} alt="Facebook" className="socialIcon" />
          <img src={instagramIcon} alt="Instagram" className="socialIcon" />
        </div>
      </div>

      <div className="footerItem">
        <img src={phoneIcon} alt="Teléfono" className="contactIcon" />
        <span>+34 987123456</span>
      </div>

      <div className="footerItem">
        <img src={directionIcon} alt="Dirección" className="contactIcon" />
        <div className="addressText">
          <p>Calle de Fuencarral, 72</p>
          <p>28004 Madrid, España</p>
        </div>
      </div>

      <div className="footerItem">
        <img src={emailIcon} alt="Email" className="contactIcon" />
        <span>hola@unispace.es</span>
      </div>
    </footer>
  );
}

export default FooterComp;