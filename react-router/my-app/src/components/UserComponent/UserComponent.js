import '../pages/User/User.css';

const UserComponent = ({ user, error, children }) => {
    return (
        <div className='user-block'>
            <h3 className='text'>User</h3>
            {error && <h2 className='text'>{error}</h2>}
            <h2 className='text'>{user.name}</h2>
            {children}
        </div>
    );
}

export default UserComponent;