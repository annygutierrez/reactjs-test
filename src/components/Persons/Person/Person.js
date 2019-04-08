import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {
  render() {
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          defaultValue={this.props.name}
        />
      </Aux>
    );
  }
};

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
};

export default withClass(Person, classes.Person);