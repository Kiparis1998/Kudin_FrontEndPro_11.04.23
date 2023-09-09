import {createContext, useContext, useState} from "react";

const TasksContext = createContext(null);
const TasksSwitcherContext = createContext(null);

export const useTasks = () => {
    return useContext(TasksContext);
}

export const useTasksSwitcher = () => {
    return useContext(TasksSwitcherContext);
}

const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    return (
        <TasksContext.Provider value={tasks}>
            <TasksSwitcherContext.Provider value={setTasks}>
                {children}
            </TasksSwitcherContext.Provider>
        </TasksContext.Provider>
    )
}

export default TasksProvider;