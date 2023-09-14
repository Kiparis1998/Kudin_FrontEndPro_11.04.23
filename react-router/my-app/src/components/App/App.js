import './App.css';
import { Routes, Route } from "react-router-dom";
import Users from "../pages/Users/Users";
import UsersAlbums from "../pages/UsersAlbums/UsersAlbums";
import User from "../pages/User/User";
import UserAlbums from "../pages/UserAlbums/UserAlbums";
import UserPhotos from "../pages/UserPhotos/UserPhotos";
import UsersPhotos from "../pages/UsersPhotos/UsersPhotos";
import Button from "../Button/Button";

const App = () => {

  return (
    <div className="wrapper">
      <Routes>
          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<User />} />
          <Route path='/users/albums' element={<UsersAlbums />} />
          <Route path='/users/albums/:userId' element={<UserAlbums />} />
          <Route path='/users/albums/photos' element={<UsersPhotos />} />
          <Route path='/users/albums/photos/:albumId' element={<UserPhotos />} />
      </Routes>
        <div className='button-container'>
            <Button option='Albums' />
            <Button option='Photos' />
            <Button option='Cancel' />
        </div>
    </div>
  );
}

export default App;
