import './Button.css'

const Button = ({ text, deleteHandler, saveHandler, modalHandler, className, type = 'button' }) => {
    return (
        <div className='button-container'>
            <button type={type} className={className} onClick={text === 'Delete' ? deleteHandler : text === 'Open form' || text === 'Cancel'
                ? modalHandler : saveHandler}>
                {text}
            </button>
        </div>
    );
};

export default Button;