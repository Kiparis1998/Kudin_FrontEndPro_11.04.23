import useFetch from "../../Hooks/UseFetch";

const UsersAlbums = () => {
    const [users,,, usersError] = useFetch('https://jsonplaceholder.typicode.com/users');
    const [, usersAlbums,, albumsError] = useFetch('https://jsonplaceholder.typicode.com/albums');

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
                    </div>
                )
            })}
        </div>
    );

}

export default UsersAlbums;