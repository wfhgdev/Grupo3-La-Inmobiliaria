const flats = [
  {
    id: 1,
    title: 'Departamento céntrico',
    location: 'Buenos Aires',
    price: '$120.000',
  },
  {
    id: 2,
    title: 'Flat moderno',
    location: 'Córdoba',
    price: '$98.000',
  },
  {
    id: 3,
    title: 'Monoambiente luminoso',
    location: 'Rosario',
    price: '$85.000',
  },
]

function Flats() {
  return (
    <section aria-label="Listado de flats">
      <h2>Flats destacados</h2>
      <ul>
        {flats.map((flat) => (
          <li key={flat.id}>
            <h3>{flat.title}</h3>
            <p>Ubicación: {flat.location}</p>
            <p>Precio: {flat.price}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Flats
