import './Button.css'
import { Link } from "react-router-dom";

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
            {option === 'Albums' ? checkOption(albumsBtn) : checkOption(photosBtn)}
        </>
    )
};

export default Button;