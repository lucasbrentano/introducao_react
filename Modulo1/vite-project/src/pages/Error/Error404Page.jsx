import style from "./Error404Page.module.css";

const Error404Page = () => {
    return (
        <div className={style.Error}>
            <h1>404</h1>
            <h2>Página não encontrada</h2>
        </div>
    );
}

export { Error404Page };