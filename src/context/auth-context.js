import React from 'react';


// This initialize our context
const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});

export default authContext;