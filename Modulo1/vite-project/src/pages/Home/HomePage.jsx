import {FormCreateTask, TaskList} from "../../components/index.js";
import style from "./HomePage.module.css"

const HomePage = () => {
    return (
        <div className={style.HomePage}>
            <FormCreateTask />
            <TaskList />
        </div>
    );
};

export {HomePage};