import './App.css';
import { useState, createContext, useContext } from "react";
import Button from "./Button.js";
import Form from "./Form";
import ContactsProvider from "./ContactsContext";
import ContactList from "./ContactList";

const ModalContext = createContext(null);

export const useModal = () => {
    return useContext(ModalContext);
}

const App = () => {
    const [condition, setCondition] = useState('closed');

    const modalHandler = () => {
        setCondition(condition === 'closed' ? 'opened' : 'closed');
    }

  return (
      <ContactsProvider>
          <div className='wrapper'>
              <ContactList />
              <ModalContext.Provider value={condition}>
                  <Button aim='Open form' modalHandler={modalHandler} />
                  <Form modalHandler={modalHandler} />
              </ModalContext.Provider>
          </div>
      </ContactsProvider>
  );
}

export default App;
