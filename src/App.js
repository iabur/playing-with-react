import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    Person: [
      { name: 'iabur', age: '26' },
      { name: 'rohim', age: 30 },
      { name: 'korim', age: 33 },
    ],
  };

  switchNameHandler = (newName) => {
    this.setState({
      Person: [
        { name: newName, age: '26' },
        { name: 'rohim', age: 30 },
        { name: 'korim', age: 33 },
      ],
    });
  };
  render() {
    return (
      <div className='App'>
        <h1>Hello, This is first react app</h1>
        <button onClick={() => this.switchNameHandler('iabur rahman')}>
          click me
        </button>
        <Person
          name={this.state.Person[0].name}
          age={this.state.Person[0].age}
        />
        <Person
          click={() => this.switchNameHandler('iabur')}
          name={this.state.Person[1].name}
          age={this.state.Person[1].age}
        >
          I am a shopkeeper
        </Person>
      </div>
    );
  }
}

export default App;
