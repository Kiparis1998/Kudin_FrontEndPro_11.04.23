import './App.css';
import Button from "../Button/Button.js";
import Form from "../Form/Form";
import ContactList from "../ContactList/ContactList";
import { useModalSwitcher } from "../ModalContext/ModalContext";

const App = () => {
   const modalHandler = useModalSwitcher();

  return (
      <div className='wrapper'>
          <ContactList />
          <Button text='Open form' className='button-style' modalHandler={modalHandler} />
          <Form modalHandler={modalHandler} />
      </div>
  );
}

export default App;
