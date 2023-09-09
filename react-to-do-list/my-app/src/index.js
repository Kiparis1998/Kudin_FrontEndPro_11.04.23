import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import TasksProvider from "./components/TasksContext/TasksContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TasksProvider>
        <App />
    </TasksProvider>
);
