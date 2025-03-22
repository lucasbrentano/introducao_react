import {Header, Conteudo, Footer} from "./componentes";
import './App.css'

const App = () => {
  return (
    <>
        <Header nomeUsuario={"Juca"}/>
        <Conteudo>
            <h1>Titulo</h1>
            <p>Lorem ipsum</p>
        </Conteudo>
        <Footer criador={"Brentano"}/>
    </>
  )
}

export {App};
