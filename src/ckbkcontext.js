import React from 'react';

const CkBkContext = React.createContext({
    user: {},
    recipeList: {},
    setUserLogout: () => {},
    setUserLogin: () => {},
    fillRecipeList: () => {},
    addNewRecipe: () => {}
})

export default CkBkContext;