import './ButtonResult.css';

export const ButtonResult = (props) => {
    return (
        <div className='Button-container'>
            <button className='Button-result' onClick={props.displayResultHandler}>Show Result</button>
        </div>
    );
}