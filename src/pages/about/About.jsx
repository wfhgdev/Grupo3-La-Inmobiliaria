import "../../components/about/About.css";
import aboutMeetingImg from "../../assets/img/aboutMeeting.png";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image-col">
          <img
            src={aboutMeetingImg}
            alt="UniSpace staff meeting"
            className="about-image"
          />
        </div>

        <div className="about-content-col">
          <span className="about-subtitle">SOBRE UNISPACE</span>
          <h2 className="about-title">
            Tu hogar en Madrid,
            <br />
            nuestra especialidad.
          </h2>
          <p className="about-paragraph">
            UniSpace nació en 2014 con una misión clara: hacer que encontrar
            piso en Madrid sea sencillo, seguro y sin sorpresas para los
            estudiantes. Somos una agencia inmobiliaria especializada
            exclusivamente en alojamiento universitario, con un equipo que
            conoce de primera mano los barrios, universidades y necesidades de
            cada estudiante.
          </p>
          <p className="about-paragraph">
            Trabajamos con propietarios comprometidos, contratos transparentes y
            acompañamos a cada estudiante durante todo su proceso — desde la
            primera visita hasta la entrega de llaves.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

