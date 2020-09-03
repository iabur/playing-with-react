import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className='App'>
      <h1>Hello, This is first react app</h1>
      <Person name='iabur' age='26' />
      <Person name='rohim' age='35'>
        I am a shopkeeper
      </Person>
    </div>
  );
}

export default App;
