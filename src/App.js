import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './App.css';

class App extends Component {
  state = {
    userName: 'Iabur rahman',
  };

  changeName = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };
  render() {
    return (
      <div className='App'>
        <UserInput changeName={this.changeName} />
        <UserOutput userName='iabur' />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
