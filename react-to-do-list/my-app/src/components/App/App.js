import './App.css';
import List from "../List/List";
import Form from "../Form/Form";
import { useRef } from "react";
import uniqId from 'uniqid';
import { useTasks, useTasksSwitcher } from "../TasksContext/TasksContext";

const App = () => {
    const myRef = useRef();
    const tasks = useTasks();
    const tasksSwitcherStatus = useTasksSwitcher();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (myRef.current.value) {
            const task = {
                id: uniqId(),
                name: myRef.current.value,
                status: false,
            }

            tasksSwitcherStatus(prevState => [...prevState, task]);
            event.target.reset();
        }
    }

    const statusHandler = (id) => {
        const clickedTask = tasks.filter(task => task.id === id).map((task) => {
            return {
                id: task.id,
                name: task.name,
                status: !task.status,
            }
        });

        const otherTasks = tasks.filter(task => task.id !== id);
        tasksSwitcherStatus([...otherTasks, ...clickedTask]);
    }

    return (
        <div className='Wrapper'>
            <List statusHandler={statusHandler}/>
            <Form ref={myRef} onSubmit={onSubmitHandler} />
        </div>
  );
}

export default App;
