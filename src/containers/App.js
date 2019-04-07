import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// Now we return WithClass with lower case because this is not a component anymore, is a normal function that return something
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';

class App extends Component {
  state = {
    persons: [
      { id: 'skjkjd73heh8h3', name: "Max", age: 28 },
      { id: 'edkjwhui3', name: "Manu", age: 29 },
      { id: 'oi83nd3yhdu', name: "Anny", age: 20 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponetUpdate');
    // Return true means that react always re-render the entire component
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] cmponentDidUpdate');
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

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />;
    }

    return (
      <Aux>
        <button onClick={() => { this.setState({ showCockpit: false }) }}>Remove Cockpit</button>
        {
          this.state.showCockpit ? <Cockpit
            title={'Hi I am a React App'}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          /> : null
        }
        {
          persons
        }
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Im a React App!!!'));
  }
}

// Semantical thing up to you:
// High order components that change the logic of a component maybe should be use this way
export default withClass(App, classes.App);

