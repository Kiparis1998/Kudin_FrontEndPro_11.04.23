import './Task.css';

const Task = ({ id, nameOfTask, statusHandler }) => {

    return (
        <div className='Task-container' onClick={() => statusHandler(id)}>
            <p className='Task-style'>{nameOfTask}</p>
        </div>
    );
}

export default Task;