import {Button, TextField, BUTTON_TYPE, Loading} from "../../components";
import style from "./FormCreateTask.module.css"
import {useState} from "react";
import {useAppContext} from "../../hooks";

const FormCreateTask = () => {
    const { addTask, loadingCreate } = useAppContext();

    const [taskName, setTaskName] = useState();

    const onChangeTaskName = (event) => {
        setTaskName(event.target.value);
    };

    const submitForm = (event) => {
        event.preventDefault();

        if (!taskName) {
            return;
        }

        addTask(taskName);

        setTaskName("");
    };

    return (
        <form className={style.FormCreateTask} onSubmit={submitForm}>
            <TextField
                value={taskName}
                onChange={onChangeTaskName}
            />
            <Button text={loadingCreate ? <Loading /> : '+'}  />
        </form>
    );
};

export {FormCreateTask};