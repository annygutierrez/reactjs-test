import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';

class Person extends Component {

  componentDidMount() {
    // This kind of ref only works in class based components, not in functional ones.
    this.inputElement.focus();
  }

  render() {
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={(inputEl) => {this.inputElement = inputEl}}
          type="text"
          onChange={this.props.changed}
          defaultValue={this.props.name}
        />
      </Aux>
    );
  }
};

// Git test 2

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
};

export default withClass(Person, classes.Person);