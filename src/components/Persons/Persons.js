import React, { PureComponent } from 'react';
import Person from './Person/Person';
import AuthContext from '../../context/auth-context';

// When you use PureComponent to extend yours, it only rerenders the component when its props are updated, it compares all its props.
// Replace the neeed to use shouldComponent update to compare all the props changes
class Persons extends PureComponent {

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   // It compare this two values are the smae, values are aur pointers here
  //   if (
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  //   // return true
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  render() {
    console.log('[Persons.js] rendering...');
    return <AuthContext.Consumer>
      {
       (context) => this.props.persons.map((person, index) => {
          return (
            <Person
              key={person.id}
              click={() => { this.props.clicked(index) }}
              name={person.name}
              age={person.age}
              changed={(event) => { this.props.changed(event, person.id) }}
              isAuth={this.props.isAuthenticated}
            />
          )
        })
      }
    </AuthContext.Consumer>
  }
}



export default Persons;