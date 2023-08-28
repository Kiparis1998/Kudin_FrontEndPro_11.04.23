import './Task.css';

const Task = (props) => {
    if (props.textOfList === 'In progress') {
        return (
            <div className='Task-container' onClick={() => props.setDone(props.id)}>
                <p className="Task-style">{props.nameOfTask}</p>
            </div>
        )
    } else if (props.textOfList === 'Done') {
        return (
            <div className='Task-container' onClick={() => props.setInProgress(props.id)}>
                <p className="Task-style">{props.nameOfTask}</p>
            </div>
        )
    }
}

export default Task;