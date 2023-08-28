import './List.css';
import Task from "./Task";

const List = ({text, contentInProgress, contentDone, setDone, setInProgress}) => {

    return (
        <div className='List-style'>
            <p className='Text-style'>{text}</p>
            {contentInProgress && contentInProgress.length > 0  &&
                contentInProgress.map((data, idx) => {
                    return <Task key={idx} setDone={setDone} id={data.id} nameOfTask={data.name} textOfList={text}/>
                })
            }
            {contentDone && contentDone.length > 0  &&
                contentDone.map((data, idx) => {
                    return <Task key={idx} setInProgress={setInProgress} id={data.id} nameOfTask={data.name} textOfList={text}/>
                })
            }
        </div>
    );
}

export default List;