import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Anny", age: 20 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked')
    // DON'T DO THIS this.state.persons[0].name = "Maximillian";
    this.setState({ 
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Anny", age: 21 }
      ] 
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, Im a React app</h1>
        <p>This is really working</p>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
        />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
        >My hobbies: Racing</Person> 
        <Person 
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Im a React App!!!'));
  }
}

export default App;
