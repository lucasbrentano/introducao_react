import style from './TaskList.module.css'
import {TaskListItem} from "./TaskListItem";

const TaskList = () => {
    const tasks = [
        {id: 1, name: 'Item 1'},
        {id: 2, name: 'Item 2'},
        {id: 3, name: 'Item 3'},
    ]
    return (
      <ul className={style.TaskList}>
          {tasks.map(item => <TaskListItem key={item.id} name={item.name} />)}
      </ul>
    );
};

export { TaskList };