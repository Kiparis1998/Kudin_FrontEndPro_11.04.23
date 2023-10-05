import './App.css';
import ButtonComponent from "../Button/Button.js";
import Form from "../Form/Form";
import ContactList from "../ContactList/ContactList";
import {useState} from "react";

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalHandler = () => {
        setIsModalOpen(prevState => !prevState);
    }

  return (
      <div className='wrapper'>
          <ContactList />
          <ButtonComponent text='Open form' className='button-style' modalHandler={modalHandler} />
          <Form modalHandler={modalHandler} isModalOpen={isModalOpen}/>
      </div>
  );
}

export default App;
