import './ListaNumerada.css'

function ListaNumerada({ itens }) {
  return (
    <ol className="lista-numerada">
      {itens.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  )
}

export default ListaNumerada
