import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  // Null is its initial value
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  // useState()
  // You can add as many use-effect you want
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request ...
    // setTimeout(() => {
    //   alert('Saved data to cloud!')
    // }, 1000);
    toggleBtnRef.current.click();
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

  if (props.personsLength <= 2) {
    assignClasses.push(classes.red); // classes = ['red'];
  }

  if (props.personsLength <= 1) {
    assignClasses.push(classes.bold); // classes = ['red', 'bold'];
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignClasses.join(' ')}>This is really working</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};


// Is a technique: React memorazi or store a snapshoot of this component
// Only if its imports are updated it will re-render the entire component
export default React.memo(cockpit);