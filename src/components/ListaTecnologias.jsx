import './ListaTecnologias.css'

function ListaTecnologias({ itens }) {
  return (
    <ul className="tech-list">
      {itens.map((tecnologia) => (
        <li key={tecnologia}>{tecnologia}</li>
      ))}
    </ul>
  )
}

export default ListaTecnologias
