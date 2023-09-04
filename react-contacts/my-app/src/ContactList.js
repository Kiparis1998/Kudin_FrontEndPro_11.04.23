import { useContacts, useContactsDispatch } from "./ContactsContext.js";
import Button from "./Button";

const PHONE = 0;
const NAME = 0;
const SURNAME = 1;

const Contact = ({ contact }) => {
    const dispatch = useContactsDispatch();

    if (typeof contact.id !== "string") {
        const filteredFullName = contact.name.split(' ').filter((word) => word !== 'Mrs.');
        return (
            <>
                <td>{filteredFullName[NAME]}</td>
                <td>{filteredFullName[SURNAME]}</td>
                <td>{contact.phone.split(' ')[PHONE].replace(/[^0-9]/g, '')}</td>
                <td><Button aim='Delete' deleteHandler={() => {
                    dispatch({
                        type: 'deleted',
                        id: contact.id,
                    });
                }}/>
                </td>
            </>
        );
    }
    if (typeof contact.id === "string") {
        return (
            <>
                <td>{contact.name}</td>
                <td>{contact.surname}</td>
                <td>{contact.phone}</td>
                <td><Button aim='Delete' deleteHandler={() => {
                    dispatch({
                        type: 'deleted',
                        id: contact.id,
                    });
                }}/>
                </td>
            </>
        );
    }
}

const ContactList = () => {
    const contacts = useContacts();
    return (
        <table className='table-style'>
            <thead>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Phone</th>
            </tr>
            </thead>
            <tbody>
            {contacts.map((contact) => {
                return (
                    <tr key={contact.id}>
                        <Contact contact={contact} />
                    </tr>
                );
            })}
            </tbody>
        </table>
    )
}

export default ContactList;