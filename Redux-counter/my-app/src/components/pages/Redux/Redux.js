import './Redux.css';
import { increment, decrement, reset } from "../../../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Redux = () => {
    const dispatch = useDispatch();
    const { value } = useSelector((store) => store.counter);

    const onIncrement = () => {
        dispatch(increment());
    }

    const onDecrement = () => {
        dispatch(decrement());
    }

    const onReset = () => {
        dispatch(reset());
    }

    return (
        <div className='redux-wrapper'>
            <h1>Counter: {value}</h1>
            <div className='button-container'>
                <button className='button-style' onClick={onIncrement}>Increment</button>
                <button className='button-style' onClick={onDecrement}>Decrement</button>
                <button className='button-style' onClick={onReset}>Reset</button>
            </div>
        </div>
    );
}

export default Redux;