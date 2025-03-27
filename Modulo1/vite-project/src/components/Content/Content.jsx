import style from './Content.module.css';

const Content = (props) => {
    const {children} = props;

    return (
        <div className={style.Conteudo}>
            {children}
        </div>
    )
};

export {Content};