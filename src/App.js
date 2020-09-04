import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
  const [personState, setPersonState] = useState({
    Person: [
      { name: 'iabur', age: '26' },
      { name: 'rohim', age: 30 },
      { name: 'korim', age: 33 },
    ],
  });

  const [otherState, setOtherState] = useState({
    otherState: 'I am otherState',
  });

  console.log(personState, otherState);
  const switchNameHandler = () => {
    setPersonState({
      Person: [
        { name: 'iabur rahman', age: '26' },
        { name: 'rohim', age: 30 },
        { name: 'korim', age: 33 },
      ],
    });
  };

  return (
    <div className='App'>
      <h1>Hello, This is first react app</h1>
      <button onClick={switchNameHandler}>click me</button>
      <Person
        name={personState.Person[0].name}
        age={personState.Person[0].age}
      />
      <Person name={personState.Person[1].name} age={personState.Person[1].age}>
        I am a shopkeeper
      </Person>
    </div>
  );
};

export default App;
