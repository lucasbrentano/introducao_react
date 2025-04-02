import {Button, TextField, BUTTON_TYPE, Loading} from "../../../components";
import style from './TaskListItem.module.css';
import {useAppContext} from "../../../hooks/index.js";
import {useState} from "react";

const TaskListItem = (props) => {
    const { id, name } = props;

    const [isEditing, setIsEditing] = useState(false);

    const { loadingUpdate, loadingDelete, editTask, removeTask } = useAppContext();

    const onBlurTask = (event) => {
        const taskName = event.target.value;

        editTask(id, taskName);

        setIsEditing(false)
    };

    const loadingIsUpdating = loadingUpdate == id;
    const loadingIsDeleting = loadingDelete == id;

    return (
        <li className={style.TaskListItem}>
            {(isEditing || loadingIsUpdating) && (
                <TextField
                    defaultValue={name}
                    onBlur={onBlurTask}
                    autoFocus
                />
            )}
            {!isEditing && !loadingIsUpdating && (
                <span onDoubleClick={() => setIsEditing(true)}>{name}</span>
            )}

            {loadingIsUpdating && (
                <Loading />
            )}

            <Button
                text={loadingIsDeleting ? <Loading /> : "-"}
                type={BUTTON_TYPE.SECONDARY}
            onClick={() => removeTask(id)}
            />
        </li>
    );
};

export { TaskListItem }