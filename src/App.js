import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import './App.css';
class App extends Component {
  state = {
    userInput: '',
  };
  inputChangeHandler = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };
  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updateText = text.join('');
    this.setState({
      userInput: updateText,
    });
  };
  render() {
    const charHandler = this.state.userInput.split('').map((ch, index) => {
      return (
        <Char
          inputChar={ch}
          key={index}
          deleteUser={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className='App'>
        <input
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
        />
        <Validation inputLength={this.state.userInput.length} />
        <p>{this.state.userInput}</p>
        {charHandler}
      </div>
    );
  }
}

export default App;
