import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import ContactsProvider from "./ContactsContext/ContactsContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContactsProvider>
        <App />
    </ContactsProvider>
);