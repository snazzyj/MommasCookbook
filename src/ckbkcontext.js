import React from 'react';

const CkBkContext = React.createContext({
    user: {},
    recipeList: {},
    setUserLogout: () => {},
    setUserLogin: () => {},
    fillRecipeList: () => {}
})

export default CkBkContext;