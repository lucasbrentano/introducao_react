import {createContext, useEffect, useState} from "react";
import { api } from "../services/api";

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const { children } = props;

    const [creator, setCreator] = useState("Brentano");

    const [tasks, setTasks] = useState([]);

    const [loading, setLoading] = useState(false);
    const [loadingCreate, setLoadingCreate] = useState(false);
    const [loadingUpdate, setLoadingUpdate] = useState(null);
    const [loadingDelete, setLoadingDelete] = useState(null);

    const loadTasks = async () => {
        setLoading(true);

        const { data = [] } = await api.get("/tasks")

        setTasks([
            ...data,
        ]);

        setLoading(false);
    }

    const addTask = async (taskName) => {
        setLoadingCreate(true);

        const { data: task } = await api.post("/tasks", {
            name: taskName,
        });
        setTasks(currentState => {
            return [
                ...currentState,
                task,
            ];
        });

        setLoadingCreate(false);
    }

    const removeTask = async (idTask) => {
        setLoadingDelete(idTask);

        await api.delete(`/tasks/${idTask}`);

        setTasks(currentState => {
            const updatedTasks = currentState.filter(task => task.id !== idTask);

            return [
                ...updatedTasks,
            ]
        });

        setLoadingDelete(null);
    };

    const editTask = async (idTask, nameTask) => {
        setLoadingUpdate(idTask);

        const {data: updatedTask} = await api.put(`/tasks/${idTask}`, {
            name: nameTask,
        });

        setTasks(currentState => {
            const updatedTasks = currentState.map(task => {
                return task.id == idTask ? {
                    ...task,
                    name: updatedTask.name,
                } : task;
            });

            return [
                ...updatedTasks,
            ];
        })

        setLoadingUpdate(null);
    }

    useEffect(() => {
        loadTasks();
    }, [])

    return (
        <AppContext.Provider value={{
            creator,
            tasks,
            addTask,
            removeTask,
            editTask,
            loading,
            loadingCreate,
            loadingUpdate,
            loadingDelete,
        }}>
            {children}
        </AppContext.Provider>
    );
};