import '../User/User.css'
import './UserPhotos.css'
import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/UseFetch";
import PhotoComponent from "../../PhotoComponent/PhotoComponent";

const UserPhotos = () => {
    const { albumId } = useParams();
    const [user,,, userError] = useFetch(`https://jsonplaceholder.typicode.com/users/${albumId}`);
    const [, userAlbums,, albumError] = useFetch(`https://jsonplaceholder.typicode.com/albums`);
    const [,, userPhotos, photoError] = useFetch(`https://jsonplaceholder.typicode.com/photos`);
    return (
        <PhotoComponent userError={userError} albumError={albumError} userAlbums={userAlbums} photoError={photoError}
                        userPhotos={userPhotos} albumId={albumId} user={user} />
    );
}

export default UserPhotos;