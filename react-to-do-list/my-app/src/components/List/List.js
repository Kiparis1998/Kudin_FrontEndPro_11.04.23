import './List.css';
import Task from "../Task/Task";
import { useTasks } from "../TasksContext/TasksContext";

const List = ({ statusHandler }) => {
    const tasks = useTasks();

    const renderList = (status) => {
        return tasks && tasks.length > 0  &&
        tasks.map((data) => {
            if (data.status === status) return <Task key={data.id} id={data.id} nameOfTask={data.name} statusHandler={statusHandler} />
        });
    }

    return (
        <div className='List-style'>
            <div className='Tasks-block'>
                <p className='Text-style'>In progress</p>
                {renderList(false)}
            </div>
            <div className='Tasks-block'>
                <p className='Text-style'>Done</p>
                {renderList(true)}
            </div>
        </div>
    );
}

export default List;