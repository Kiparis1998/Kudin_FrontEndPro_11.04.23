import './User.css';
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/UseFetch";
import UserComponent from "../../UserComponent/UserComponent";

const User = () => {
    const { id } = useParams();
    const [user,,, error, isLoading] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return (
        <UserComponent user={user} error={error} isLoading={isLoading} />
    );
}

export default User;