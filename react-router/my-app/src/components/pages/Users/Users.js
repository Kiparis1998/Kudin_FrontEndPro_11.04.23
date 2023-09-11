import './Users.css';
import useFetch from "../../Hooks/UseFetch";
import UsersComponent from "../../UsersComponent/UsersComponent";

const Users = () => {
    const [users,,, error] = useFetch('https://jsonplaceholder.typicode.com/users');

    return (
        <UsersComponent users={users} error={error} />
    );
}

export default Users;