import './Button.css'
import { Link } from "react-router-dom";
import { abortHandler } from "../Hooks/UseFetch";

const Button = ({ option }) => {
    const albumsBtn = `users/${option.toLowerCase()}`;
    const photosBtn = `users/albums/${option.toLowerCase()}`;
    const checkOption = (path) => {
        return (
            <Link to={path}>
                <button className='button-style'>{option}</button>
            </Link>
        )
    }
    return (
        <>
            {option === 'Albums' ? checkOption(albumsBtn) : option === 'Photos' ? checkOption(photosBtn) : ''}
            {option === 'Cancel' && <button onClick={abortHandler} className='button-style'>{option}</button>}
        </>
    )
};

export default Button;