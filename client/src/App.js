import { useMutation, useQuery } from '@apollo/client';
import React from 'react';
import './app.css'
import { CREATE_USER } from './mutations/user';
import { GET_ALL_USERS } from './query/user';

function App() {
  const {data, loading, error, refetch} = useQuery(GET_ALL_USERS);
  const [newUser] = useMutation(CREATE_USER);
  const [users, setUsers] = React.useState([]);
  const [username, setUsername] = React.useState("");
  const [age, setAge] = React.useState(0);

  React.useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  const addUser = (e) => {
    e.preventDefault();
    newUser({
      variables: {
        input: {
          username, age
        }
      }
    }).then(({data}) => {
      setUsername('');
      setAge(0);
    })
  }

  const getAll = (e) => {
    e.preventDefault();
    refetch();
  }

  if (loading){
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <div>
      <form>
        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" />
        <input value={age} onChange={(e) => setAge(parseInt(e.target.value))} type="number" />
        <div className='btns'> 
          <button onClick={(e) => addUser(e)}>Add</button>
          <button onClick={(e) => getAll(e)}>Get</button>
        </div>
      </form>
      <div>
        {users.map(user => 
          <div key={user.id} className="user">{user.id}. {user.username}</div>
        )}
      </div>
    </div>
  );
}

export default App;
