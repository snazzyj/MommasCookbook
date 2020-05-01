import React from 'react';

const CkBkContext = React.createContext({
    user: {},
    setUserLogout: () => {},
    setUserLogin: () => {}
})

export default CkBkContext;