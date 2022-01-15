import { useQuery } from '@apollo/client';
import React from 'react';
import './app.css'
import { GET_ALL_USERS } from './query/user';

function App() {
  const {data, loading, error} = useQuery(GET_ALL_USERS);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  if (loading){
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <div>
      <form>
        <input type="text" />
        <input type="number" />
        <div className='btns'> 
          <button>Add</button>
          <button>Get</button>
        </div>
      </form>
      <div>
        {users.map(user => 
          <div className="user">{user.id}. {user.username}</div>
        )}
      </div>
    </div>
  );
}

export default App;
