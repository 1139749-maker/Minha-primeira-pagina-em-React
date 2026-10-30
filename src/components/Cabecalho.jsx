import './Cabecalho.css'

function Cabecalho({ nome, emoji, frase, foto, linkedin }) {
  return (
    <header className="cabecalho">
      <h1>
        {nome} {emoji}
      </h1>
      <p>{frase}</p>

      <img src={foto} alt={`Foto de perfil do ${nome}`} />

      <a href={linkedin} target="_blank" rel="noreferrer">
        Acesse meu LinkedIn
      </a>
    </header>
  )
}

export default Cabecalho
