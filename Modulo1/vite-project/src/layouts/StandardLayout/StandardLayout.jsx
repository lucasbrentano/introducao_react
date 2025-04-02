import {Content, Footer, Header} from "../../components";
import {Outlet} from "react-router-dom";
import {useAppContext} from "../../hooks";

const StandardLayout = () => {
    const { creator } = useAppContext();

    return (
        <>
            <Header userName={"Juca"}/>
            <Content>
                <Outlet />
            </Content>
            <Footer creator={creator}/>
        </>
    );
};

export { StandardLayout };