import {Content, Footer, Header} from "../../components";
import {Outlet} from "react-router-dom";

const StandardLayout = () => {
    return (
        <>
            <Header nomeUsuario={"Juca"}/>
            <Content>
                <Outlet />
            </Content>
            <Footer criador={"Brentano"}/>
        </>
    );
};

export { StandardLayout };