import style from "./Footer.module.css"

const Footer = (props) => {
    const {creator} = props;

    const anoAtual = (new Date).getFullYear();

    return (
        <div className={style.Footer}>
            <span>React Básico - {anoAtual} - {creator}</span>
        </div>
    )
}

export {Footer};