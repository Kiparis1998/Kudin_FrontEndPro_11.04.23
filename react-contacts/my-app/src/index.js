import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import ContactsProvider from "./ContactsContext/ContactsContext";
import ModalContext from "./ModalContext/ModalContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ModalContext>
        <ContactsProvider>
            <App />
        </ContactsProvider>
    </ModalContext>
);