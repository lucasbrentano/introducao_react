import style from "./Footer.module.css"

const Footer = (props) => {
    const {criador} = props;

    const anoAtual = (new Date).getFullYear();

    return (
        <div className={style.Footer}>
            <span>React Básico - {anoAtual} - {criador}</span>
        </div>
    )
}

export {Footer};