import React from 'react';
import './app.css'

function App() {
  const [users, setUsers] = React.useState([]);

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
