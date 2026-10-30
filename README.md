# Sobre a Luisa — React + Vite

Projeto de exemplo da Aula 09: a página "sobre mim" da aula de HTML/CSS,
agora dividida em componentes React. Ainda sem estado (useState).

## Como rodar

```sh
npm install
npm run dev
```

Abra http://localhost:5173

## Estrutura

```
src/
├─ main.jsx                 liga o React ao index.html e importa o CSS global
├─ index.css                CSS global: reset, variáveis (:root) e body
├─ App.jsx                  componente raiz: guarda os dados e monta a página
├─ App.css                  layout da área principal
└─ components/
   ├─ Cabecalho.jsx/.css    topo com nome, frase, foto e LinkedIn   (props)
   ├─ Secao.jsx/.css        cartão com título                       (props + children)
   ├─ ListaTecnologias.jsx  tags geradas com .map()                 (array por props)
   ├─ ListaNumerada.jsx     lista <ol> gerada com .map()            (array por props)
   ├─ Citacao.jsx/.css      bloco de citação                        (props)
   └─ Rodape.jsx/.css       rodapé fixo                             (sem props)
```

## Do HTML para o JSX

| HTML                     | JSX                         |
|--------------------------|-----------------------------|
| `class="secao"`          | `className="secao"`         |
| `<img ...>`              | `<img ... />`               |
| `<hr>`                   | `<hr />`                    |
| texto repetido em `<li>` | `itens.map(i => <li key={i}>{i}</li>)` |
