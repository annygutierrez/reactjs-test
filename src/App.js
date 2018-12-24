import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'skjkjd73heh8h3', name: "Max", age: 28 },
      { id: 'edkjwhui3', name: "Manu", age: 29 },
      { id: 'oi83nd3yhdu',name: "Anny", age: 20 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Anny", age: 21 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key={person.id}
                click={() => {this.deletePersonHandler(index)}}
                name={person.name}
                age={person.age}
              />
            })
          }
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, Im a React app</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}
        >Toggle Persons</button>
        {
          persons
        }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Im a React App!!!'));
  }
}

export default App;
