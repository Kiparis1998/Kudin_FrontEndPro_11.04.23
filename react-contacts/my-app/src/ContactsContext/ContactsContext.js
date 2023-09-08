import { useContext, useReducer, createContext} from "react";
import { data } from "../data";

const ContactsContext = createContext(null);
const ContactsDispatchContext = createContext(null);

const initialContacts = data;

export const useContacts = () => {
    return useContext(ContactsContext);
}

export const useContactsDispatch = () => {
    return useContext(ContactsDispatchContext);
}

const contactsReducer = (contacts, action) => {
    switch (action.type) {
        case 'added': {
            return [...contacts, {
               id: action.id,
               name: action.name,
               surname: action.surname,
               phone: action.phone,
            }];
        }
        case 'deleted': {
            return contacts.filter(contact => contact.id !== action.id);
        }
        default: {
            throw Error(`Unknown action: ${action.type}`);
        }
    }
}

const ContactsProvider = ({ children }) => {
    const [contacts, dispatch] = useReducer(
        contactsReducer,
        initialContacts,
    );

    return (
        <ContactsContext.Provider value={contacts}>
            <ContactsDispatchContext.Provider value={dispatch}>
                {children}
            </ContactsDispatchContext.Provider>
        </ContactsContext.Provider>
    );
}

export default ContactsProvider;