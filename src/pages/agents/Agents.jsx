import AgentsComp from "../../components/agents/AgentsComp";


const Agents = () => {
  return (
    <>
      <AgentsComp 
        subtitle="NUESTRO EQUIPO"
        title="Conoce a nuestros agentes"
        description="Expertos en los barrios universitarios de Madrid, listos para encontrar la habitación perfecta para ti."
      />

      <div className="agentsGrid">
        <AgentsComp name="William Hernández" country="Alicante" image="Willian" />
        <AgentsComp name="Willfredy Salcedo" country="Sevilla" image="Willfredy" />
        <AgentsComp name="Beatriz Íñiguez" country="Granada" image="Beatriz" />
        <AgentsComp name="Oscar Pérez" country="Granada" image="Oscar" />
        <AgentsComp name="Margarita Bellido" country="Mallorca" image="Margarita" />
      </div>
    </>
  );
};

export default Agents;