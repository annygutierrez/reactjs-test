import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: 'skjkjd73heh8h3', name: "Max", age: 28 },
      { id: 'edkjwhui3', name: "Manu", age: 29 },
      { id: 'oi83nd3yhdu', name: "Anny", age: 20 }
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <ErrorBoundary key={person.id}>
                <Person
                  click={() => { this.deletePersonHandler(index) }}
                  name={person.name}
                  age={person.age}
                  changed={(event) => { this.nameChangedHandler(event, person.id) }}
                /></ErrorBoundary>
            })
          }
        </div>
      );

      btnClass = classes.Red;
    }

    const assignClasses = [];

    if (this.state.persons.length <= 2) {
      assignClasses.push(classes.red); // classes = ['red'];
    }

    if (this.state.persons.length <= 1) {
      assignClasses.push(classes.bold); // classes = ['red', 'bold'];
    }

    return (
      <div className={classes.App}>
        <h1>Hi, Im a React app</h1>
        <p className={assignClasses.join(' ')}>This is really working</p>
        <button
          className={btnClass}
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

