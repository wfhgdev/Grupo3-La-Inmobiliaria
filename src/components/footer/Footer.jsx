import "./Footer.css";
import logoUnispace from "../../assets/img/image-icon.png";
import facebookIcon from "../../assets/img/facebook.png";
import instagramIcon from "../../assets/img/instagram.png";
import phoneIcon from "../../assets/img/telephone.png";
import directionIcon from "../../assets/img/direction.png";
import emailIcon from "../../assets/img/email.png";

function Footer(){
    return (
        <>
        <img src={logoUnispace} alt="Logo de UniSpace" />
        <h3>Contacto</h3>

        <p><img src={facebookIcon} alt="Facebook" /> Facebook</p>
        <p><img src={instagramIcon} alt="Instagram" /> Instagram</p>

        <p><img src={phoneIcon} alt="Teléfono" /> +34 987123456</p>

        <p><img src={directionIcon} alt="Dirección" /> Calle de Fuencarral, 72</p>
        <p>28004 Madrid, España</p>

        <p><img src={emailIcon} alt="Email" /> hola@unispace.es</p>
        </>
    );
}

export default Footer;
