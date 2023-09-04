import './Button.css'
const Button = ({ aim, deleteHandler, saveHandler, modalHandler }) => {

    if (aim === 'Delete') {
        return (
            <div className='button-container'>
                <button className='button-style' onClick={deleteHandler}>{aim}</button>
            </div>
        );
    }
    if (aim === 'Open form') {
        return (
            <div className='button-container'>
                <button className='button-style' onClick={modalHandler}>{aim}</button>
            </div>
        );
    }
    if (aim === 'Save') {
        return (
            <div className='button-container'>
                <button type='submit' className='button-style button-form' onClick={saveHandler}>{aim}</button>
            </div>
        );
    }
    if (aim === 'Cancel') {
        return (
            <div className='button-container'>
                <button type='button' className='button-style button-form' onClick={modalHandler}>{aim}</button>
            </div>
        );
    }
}

export default Button;