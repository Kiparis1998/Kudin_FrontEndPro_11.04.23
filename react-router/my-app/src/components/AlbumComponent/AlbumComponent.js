import '../pages/User/User.css'
import UserComponent from "../UserComponent/UserComponent";

const AlbumComponent = ({ userError, albumError, userAlbums, user, userId, children }) => {

    return (
        <UserComponent user={user} error={userError}>
            <div>
                <h3 className='text'>Albums</h3>
                {albumError && <h2 className='text'>{albumError}</h2>}
                {userAlbums.map((album) => {
                    {if (album.userId === +userId) {
                        return (
                            <p className='text' key={album.id}>{album.title}</p>
                        )
                    }}
                })}
            </div>
            {children}
        </UserComponent>
    );
}

export default AlbumComponent;