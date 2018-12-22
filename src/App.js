import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, Im a React app</h1>
        <p>This is really working</p>
        <Person name="Max" age="28"/>
        <Person name="Manu" age="29">My hobbies: Racing</Person> 
        <Person name="Anny" age="20"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Im a React App!!!'));
  }
}

export default App;
