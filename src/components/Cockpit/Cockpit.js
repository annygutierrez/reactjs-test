import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  
  // You can add as many use-effect you want
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request ...
    setTimeout(() => {
      alert('Saved data to cloud!')
    }, 1000);
  }, []);
  // }, [props.persons]);

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