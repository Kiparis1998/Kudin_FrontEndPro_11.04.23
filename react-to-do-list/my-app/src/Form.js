import './Form.css';
import { forwardRef } from "react";

const Form = forwardRef((props, ref) => {
    return (
        <div className='Form-container'>
            <form className='Form-style' onSubmit={props.onSubmit}>
                <input ref={ref} />
                <button className='Button-style'>Add this task</button>
            </form>
        </div>
    );
});

export default Form;