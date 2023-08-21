import './ButtonResult.css';

export const ButtonReset = (props) => {
    return (
        <div className='Button-container'>
            <button className='Button-result' onClick={props.resetHandler}>Reset</button>
        </div>
    );
}