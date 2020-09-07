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
    show: true,
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

  onChangeHandler = (event) => {
    this.setState({
      Person: [
        { name: 'iabur', age: '26' },
        { name: event.target.value, age: 30 },
        { name: 'korim', age: 33 },
      ],
    });
  };

  switchPersonName = () => {
    const showPerson = this.state.show;
    this.setState({
      show: !showPerson,
    });
  };

  render() {
    const style = {
      backgroundColor: 'while',
      font: 'inherit',
      padding: '1px solid gray',
      border: '2px',
      cursor: 'pointer',
    };

    let persons = null;
    if (this.state.show) {
      persons = (
        <div>
          {this.state.Person.map((person) => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
      );
    }
    return (
      <div className='App'>
        <h1>Hello, This is first react app</h1>
        <button style={style} onClick={this.switchPersonName}>
          click me
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
