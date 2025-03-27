import {Button, BUTTON_TYPE} from "../../Button/index.js";
import style from './TaskListItem.module.css';

const TaskListItem = (props) => {
    const { name } = props;

    return (
        <li className={style.TaskListItem}>
            {name}
            <Button text="-" type={BUTTON_TYPE.SECONDARY}/>
        </li>
    );
};

export { TaskListItem }