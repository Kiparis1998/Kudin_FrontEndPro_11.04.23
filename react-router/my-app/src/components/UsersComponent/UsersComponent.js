import '../pages/Users/Users.css';

const UsersComponent = ({ users, error, children }) => {

    return (
        <div className="users-block">
            <h3 className='text'>Users</h3>
            {error && <h2 className='text'>{error}</h2>}
            {users.map((user) => {
                return (
                    <div className='user-block' key={user.id}>
                        <h2 className='text'>{user.name}</h2>
                        {children}
                    </div>
                )
            })}
        </div>
    );
}

export default UsersComponent;