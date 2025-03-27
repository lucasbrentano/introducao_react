import {Button, TextField, BUTTON_TYPE} from "../../components";
import style from "./FormCreateTask.module.css"

const FormCreateTask = () => {
    return (
        <form className={style.FormCreateTask}>
            <TextField />
            <Button text="+" />
        </form>
    );
};

export {FormCreateTask};