import './Button.css';
import Button from '@mui/material/Button';

const ButtonComponent = ({ text, deleteHandler, saveHandler, modalHandler, className, type = 'button', color, data = false}) => {
    return (
        <div className='button-container'>
            <Button variant="contained" color={color} type={type} className={className} onClick={text === 'Delete' ? deleteHandler :
                text === 'Open form' || text === 'Cancel' ? modalHandler : saveHandler} disabled={data}>
                {text}
            </Button>
        </div>
    );
};

export default ButtonComponent;