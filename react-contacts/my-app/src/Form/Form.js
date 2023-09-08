import './Form.css';
import { useState } from "react";
import { useContactsDispatch } from "../ContactsContext/ContactsContext.js";
import { useModal } from "../ModalContext/ModalContext";
import Button from "../Button/Button";
import uniqId from 'uniqid';

const Form = ({ modalHandler }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');

    const dispatch = useContactsDispatch();
    const condition = useModal();

    const className = `form-modal-${condition}`;

    const closeModalHandler = () => {
        setName('');
        setSurname('');
        setPhone('');
        modalHandler();
    }

    const saveHandler = (event) => {
        event.preventDefault();
        if (name.length > 1 && surname.length > 1 && phone.length > 10) {
            dispatch({
                type: 'added',
                id: uniqId(),
                name: name,
                surname: surname,
                phone: phone,
            });
            closeModalHandler();
        }
    }


    return (
        <div className={className}>
            <form className='form-style'>
                <div className='input-wrapper'>
                    <input type='text' placeholder='Input your name' value={name} onChange={(event) => setName(event.target.value)} />
                    <input type='text' placeholder='Input your surname' value={surname} onChange={(event) => setSurname(event.target.value)} />
                    <input type='number' placeholder='Input your phone' value={phone} onChange={(event) => setPhone(event.target.value)} />
                </div>
                <div className='button-wrapper'>
                    <Button text='Save' type='submit' className='button-style button-form' saveHandler={saveHandler}/>
                    <Button text='Cancel' className='button-style button-form' modalHandler={closeModalHandler}/>
                </div>
            </form>
        </div>
    );
}

export default Form;