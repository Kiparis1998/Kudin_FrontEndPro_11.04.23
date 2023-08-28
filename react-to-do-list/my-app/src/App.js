import './App.css';
import List from "./List";
import Form from "./Form";
import {useState, useRef} from "react";
import uniqId from 'uniqid';

const App = () => {
    const myRef = useRef();
    const [inProgressTasks, setInProgressTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (myRef.current.value) {
            const task = {
                id: uniqId(),
                name: myRef.current.value,
            }
            setInProgressTasks(prevState => [...prevState, task]);
            event.target.reset();
        }
    }

    const setDoneHandler = (id) => {
        const filteredDoneTasks = inProgressTasks.filter(data => data.id === id);
        setDoneTasks(prevState => [...prevState, ...filteredDoneTasks]);
        const filteredInProgressTasks = inProgressTasks.filter(data => data.id !== id);
        setInProgressTasks( [...filteredInProgressTasks]);
    }

    const setInProgressHandler = (id) => {
        const filteredInProgressTasks = doneTasks.filter(data => data.id === id);
        setInProgressTasks(prevState => [...prevState, ...filteredInProgressTasks]);
        const filteredDoneTasks = doneTasks.filter(data => data.id !== id);
        setDoneTasks( [...filteredDoneTasks]);
    }

    return (
        <div className='Wrapper'>
            <List text='In progress' contentInProgress={inProgressTasks} setDone={setDoneHandler}/>
            <List text='Done' contentDone={doneTasks} setInProgress={setInProgressHandler}/>
            <Form ref={myRef} onSubmit={onSubmitHandler} />
        </div>
  );
}

export default App;
