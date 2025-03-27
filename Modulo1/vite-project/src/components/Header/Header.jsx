import style from "./Header.module.css"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={style.Header}>
            <Link to="/">
                <h1>
                    <span>To Do </span>
                    List
                </h1>
            </Link>
            <Link to="/about">
                Sobre o autor
            </Link>
        </div>
    )
}

export {Header};