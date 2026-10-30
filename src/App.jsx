import { useState } from 'react'
import Cabecalho from './components/Cabecalho.jsx'
import Secao from './components/Secao.jsx'
import ListaTecnologias from './components/ListaTecnologias.jsx'
import ListaNumerada from './components/ListaNumerada.jsx'
import Citacao from './components/Citacao.jsx'
import Rodape from './components/Rodape.jsx'
import './App.css'

const foto =
  'https://media.licdn.com/dms/image/v2/D4D03AQHEWRmXogIRzA/profile-displayphoto-scale_200_200/B4DZ.G7rB4H0Ag-/0/1784675219614?e=1795046400&v=beta&t=AmQcuUErK4Qm7-oioBDPazQSazqmawRG5PZ-bD1N7Jo'

const tecnologias = ['Python', 'Java', 'PostgreSQL', 'BrModelo', 'Git', 'GitHub', 'JASP']

const estudos = [
  'Design',
  'Banco de Dados',
  'Sistemas Operacionais',
  'Inteligência Artificial',
]

export default function App() {
  const [curtidas, setCurtidas] = useState(0)

  return (
    <>
      <Cabecalho
        nome="Luisa Lima Migliorini"
        emoji="🌸"
        frase="Estudante de Ciência da Computação na Universidade Atitus Educação."
        foto={foto}
        linkedin="https://www.linkedin.com/in/luisalimamigliorini/"
      />

      <main className="conteudo">
        <Secao titulo="Sobre a Luisa">
          <p>
            Luisa é estagiária de Sistemas Operacionais na Prefeitura Municipal de Marau.
          </p>
          <p>
            Atualmente, seus principais interesses estão em Análise de Dados e Inteligência Artificial.
          </p>
        </Secao>

        <Secao titulo="Tecnologias favoritas 💻">
          <ListaTecnologias itens={tecnologias} />
        </Secao>

        <Secao titulo="O que ela gosta de estudar?">
          <ListaNumerada itens={estudos} />
        </Secao>

        <Secao titulo="Meu Objetivo 🎯">
          <p>
            Criar Sistemas Operacionais para empresas com Inteligência Artificial que possam ajudar a sociedade.
          </p>
        </Secao>

        <Secao titulo="Uma frase que representa a Luisa">
          <Citacao texto="Pelo menos tenta, mesmo que não der certo, pois sempre aprendemos alguma coisa importante." />
        </Secao>

        <Secao titulo="Curta a minha página">
          <div className="curtidas">
            <button
              className="botao-curtir"
              type="button"
              onClick={() => setCurtidas(1)}
              disabled={curtidas > 0}
            >
              {curtidas > 0 ? '❤️ Curtido' : '❤️ Curtir'}
            </button>
            <p aria-live="polite">
              {curtidas} {curtidas === 1 ? 'curtida' : 'curtidas'}
            </p>
          </div>
        </Secao>
      </main>

      <Rodape />
    </>
  )
}
