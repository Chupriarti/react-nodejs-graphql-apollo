import React from 'react';
import './app.css'

function App() {
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
    </div>
  );
}

export default App;
