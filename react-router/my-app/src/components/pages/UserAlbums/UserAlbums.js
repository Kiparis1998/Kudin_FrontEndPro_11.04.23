import '../User/User.css'
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/UseFetch";
import AlbumComponent from "../../AlbumComponent/AlbumComponent";

const UserAlbums = () => {
    const { userId } = useParams();
    const [user,,, userError] = useFetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const [, userAlbums,, albumError] = useFetch(`https://jsonplaceholder.typicode.com/albums`);
    return (
        <AlbumComponent userError={userError} albumError={albumError} userAlbums={userAlbums} user={user} userId={userId} />
    );
}

export default UserAlbums;