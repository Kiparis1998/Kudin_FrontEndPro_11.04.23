import './Form.css';
import { useState } from "react";
import { useContactsDispatch } from "../ContactsContext/ContactsContext.js";
import ButtonComponent from "../Button/Button";
import uniqId from 'uniqid';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';

const Form = ({ modalHandler, isModalOpen }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');

    const dispatch = useContactsDispatch();

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

    const checkedData = () => {
        return !(name.length > 1 && surname.length > 1 && phone.length > 10);
    }

    return (
        <Dialog fullWidth maxWidth="md" onClose={closeModalHandler} open={isModalOpen}>
            <div className='form-modal-opened'>
                <form className='form-style'>
                    <div className='input-wrapper'>
                        <TextField color="secondary" type='text' label="Input your name" variant="outlined" value={name} onChange={(event) => setName(event.target.value)} />
                        <TextField color="secondary" type='text' label="Input your surname" variant="outlined" value={surname} onChange={(event) => setSurname(event.target.value)} />
                        <TextField color="secondary" type='number' label="Input your phone" variant="outlined" value={phone} onChange={(event) => setPhone(event.target.value)} />
                    </div>
                    <div className='button-wrapper'>
                        <ButtonComponent data={checkedData()} color='success' text='Save' type='submit' className='button-style button-form' saveHandler={saveHandler}/>
                        <ButtonComponent color='error' text='Cancel' className='button-style button-form' modalHandler={closeModalHandler}/>
                    </div>
                </form>
            </div>
        </Dialog>
    );
}

export default Form;