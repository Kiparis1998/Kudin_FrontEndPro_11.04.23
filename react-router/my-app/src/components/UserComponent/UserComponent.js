import '../pages/User/User.css';

const UserComponent = ({ user, error, children, isLoading }) => {
    return (
        <div className='user-block'>
            <h3 className='text'>User</h3>
            {error && <h2 className='text'>{error}</h2>}
            {isLoading && <h2 className='text'>Loading content...</h2>}
            <h2 className='text'>{user.name}</h2>
            {children}
        </div>
    );
}

export default UserComponent;