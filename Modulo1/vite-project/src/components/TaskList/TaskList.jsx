import style from './TaskList.module.css'
import {TaskListItem} from "./TaskListItem";
import {useAppContext} from "../../hooks";
import {Loading} from "../Loading";

const TaskList = () => {
    const { tasks, loading } = useAppContext();
    return (
      <ul className={style.TaskList}>
          {loading && (
              <p>Carregando... <Loading /></p>
          )}
          {!loading && !tasks.length && (
              <p>Não há tarefas cadastradas...</p>
          )}
          {tasks.map(item => (
              <TaskListItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
              />
          ))}
      </ul>
    );
};

export { TaskList };