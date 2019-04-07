import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import classes from './Person.css';

class Person extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={classes.Person}>
          <p onClick={this.props.click}>
            I'm {this.props.name} and I am {this.props.age} years old!
        </p>
          <p>{this.props.children}</p>
          <input
            type="text"
            onChange={this.props.changed}
            defaultValue={this.props.name}
          />
        </div>
      </React.Fragment>
    );
  }
};

export default Person;