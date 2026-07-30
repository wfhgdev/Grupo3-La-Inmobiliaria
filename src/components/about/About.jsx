import './About.css';
// 1. Importa la imagen aquí arriba
import aboutMeetingImg from '../../assets/img/aboutMeeting.png';

function About() {
  return (
    <div className="about">
      {/* 2. Pasa la variable importada entre llaves {} */}
      <img src={aboutMeetingImg} alt="UniSpace staff meeting" />
      
      <h3>Sobre UniSpace</h3>
      <h1>Tu hogar en Madrid, nuestra especialidad.</h1>
      <p>
        UniSpace nació en 2014 con una misión clara: hacer que encontrar piso en Madrid sea sencillo, seguro y sin sorpresas para los estudiantes. Somos una agencia inmobiliaria especializada exclusivamente en alojamiento universitario, con un equipo que conoce de primera mano los barrios, universidades y necesidades de cada estudiante.
      </p>
      <p>
        Trabajamos con propietarios comprometidos, contratos transparentes y acompañamos a cada estudiante durante todo su proceso — desde la primera visita hasta la entrega de llaves.
      </p>
    </div>
  );
}

export default About;