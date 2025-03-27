import {Header, Content, Footer} from "./components";
import './App.css'
import {HomePage} from "./pages";

const App = () => {
  return (
    <>
        <Header nomeUsuario={"Juca"}/>
        <Content>
            <HomePage/>
        </Content>
        <Footer criador={"Brentano"}/>
    </>
  )
}

export {App};
