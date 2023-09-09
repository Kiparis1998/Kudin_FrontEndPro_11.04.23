import './Form.css';
import { forwardRef } from "react";

const Form = forwardRef(({ onSubmit }, ref) => {
    return (
        <div className='Form-container'>
            <form className='Form-style' onSubmit={onSubmit}>
                <input ref={ref} />
                <button className='Button-style'>Add this task</button>
            </form>
        </div>
    );
});

export default Form;