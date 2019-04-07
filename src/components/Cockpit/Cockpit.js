import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  // useState()
  // You can add as many use-effect you want
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request ...
    setTimeout(() => {
      alert('Saved data to cloud!')
    }, 1000);
    // This return is like  componentDidUnmount
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);
  // The array parameter is for the rerender: Every time the parameters rerender, if its empty, it never  does it again.
  // }, [props.persons]);
  
  // Runs in every cycle with no argumrnts(An array that list all the data that useEffect should watch)
  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  const assignClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignClasses.push(classes.red); // classes = ['red'];
  }

  if (props.persons.length <= 1) {
    assignClasses.push(classes.bold); // classes = ['red', 'bold'];
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, Im a React app</h1>
      <p className={assignClasses.join(' ')}>This is really working</p>
      <button
        className={btnClass}
        onClick={props.clicked}
      >Toggle Persons</button>
    </div>
  );
};

export default cockpit;