import {createContext, useContext, useState} from "react";

const ModalContext = createContext(null);
const ModalSwitcherContext = createContext(null);

export const useModal = () => {
    return useContext(ModalContext);
}

export const useModalSwitcher = () => {
    return useContext(ModalSwitcherContext);
}

const ModalProvider = ({ children }) => {
    const [condition, setCondition] = useState('closed');

    const modalHandler = () => {
        setCondition(condition === 'closed' ? 'opened' : 'closed');
    }

    return (
        <ModalContext.Provider value={condition}>
            <ModalSwitcherContext.Provider value={modalHandler}>
                {children}
            </ModalSwitcherContext.Provider>
        </ModalContext.Provider>
    )
}

export default ModalProvider;