import '../UserPhotos/UserPhotos.css';
import useFetch from "../../Hooks/UseFetch";

const UsersPhotos = () => {
    const [users,,, usersError] = useFetch('https://jsonplaceholder.typicode.com/users');
    const [, usersAlbums,, albumsError] = useFetch('https://jsonplaceholder.typicode.com/albums');
    const [,, usersPhotos, photosError] = useFetch(`https://jsonplaceholder.typicode.com/photos`);

    return (
        <div className="users-block">
            <h3 className='text'>Users</h3>
            {usersError && <h2 className='text'>{usersError}</h2>}
            {users.map((user) => {
                return (
                    <div className='user-block' key={user.id}>
                        <h2 className='text'>{user.name}</h2>
                        <div>
                            <h3 className='text'>Albums</h3>
                            {albumsError && <h2 className='text'>{albumsError}</h2>}
                            {usersAlbums.map((album) => {
                                {if (album.userId === user.id) {
                                    return (
                                        <p className='text' key={album.id}>{album.title}</p>
                                    )
                                }}
                            })}
                        </div>
                        <h3 className='text'>Photos</h3>
                        {photosError && <h2 className='text'>{photosError}</h2>}
                        <div>
                            {usersPhotos.map((photo) => {
                                {if (photo.albumId === user.id) {
                                    return (
                                        <div key={photo.id}>
                                            <img className='img-size' src={photo.thumbnailUrl}/>
                                            <p className='text'>{photo.title}</p>
                                        </div>
                                    )
                                }}
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    );

}

export default UsersPhotos;