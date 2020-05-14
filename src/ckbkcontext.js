import React from 'react';

const CkBkContext = React.createContext({
    user: {},
    recipeList: {},
    setUserLogout: () => {},
    setUserLogin: () => {},
    fillRecipeList: () => {},
    addNewRecipe: () => {},
    updateRecipeData: () => {}
})

export default CkBkContext;