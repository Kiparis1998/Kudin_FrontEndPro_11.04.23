import '../pages/User/User.css';
import '../pages/UserPhotos/UserPhotos.css';
import AlbumComponent from "../AlbumComponent/AlbumComponent";

const PhotoComponent = ({ userError, albumError, userAlbums, photoError, userPhotos, albumId, user, isLoading }) => {
    return (
       <AlbumComponent userError={userError} albumError={albumError} userAlbums={userAlbums} user={user} userId={albumId} isLoading={isLoading}>
           {photoError && <h2 className='text'>{photoError}</h2>}
           <div>
               <h3 className='text'>Photos</h3>
               {isLoading && <h2 className='text'>Loading content...</h2>}
               {userPhotos.map((photo) => {
                   {if (photo.albumId === +albumId) {
                       return (
                           <div key={photo.id}>
                               <img className='img-size' src={photo.thumbnailUrl}/>
                               <p className='text'>{photo.title}</p>
                           </div>
                       )
                   }}
               })}
           </div>
       </AlbumComponent>
    );
}

export default PhotoComponent;