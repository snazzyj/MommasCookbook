import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Homepage from './homepage/homepage';
import Profile from './profile/profile';
import Recipe from './recipe/recipe';
import AddRecipe from './recipe/addrecipe';
import CbBkContext from './ckbkcontext';
import './App.css';

const recipes = [
  {
    id: 1,
    recipeName: 'Stuffed Red Pepper Vegan Style',
    ingredients : ["2 Chicken breasts diced", "1 onion, diced", "1/4 cup of salt and pepper", "1 green pepper"],
    directions: ["Preheat oven to 350 degrees", "Add onions and green peppers into red pepper", "Put red peppers into oven for 30 minutes"],
    prepTime: '15 Minutes',
    cookTime: '30 Minutes',
    servingSize: '1-2'
  },
  {
    id: 2,
    recipeName: 'Leynas special',
    ingredients : ["2 Chicken breasts diced", "1 onion, diced", "1/4 cup of salt and pepper", "1 green pepper"],
    directions: ["Preheat oven to 350 degrees", "Place chicken in a pan with the onions and peppers", "Wait 5 minutes before serving"],
    prepTime: '10 minutes',
    cookTime: '20 minutes',
    servingSize: '3-4'
  },
  {
    id: 3,
    recipeName: 'Double Whoops',
    ingredients : ["2 Chicken breasts diced", "1 onion, diced", "1/4 cup of salt and pepper", "1 green pepper"],
    directions: ["Put olive into pan with the stove on high", "Mix your chicken in with the salt and pepper", "Put the onions and green peppers into the pan", "place chicken into pan with the veggies"],
    prepTime: '10 minutes',
    cookTime: '15 minutes',
    servingSize: '1-2'
  }
]

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user : {
        id: 0,
        firstName: 'Alex',
        isLoggedIn: true,
        recipeData: recipes
      }
    }
  }

  setUserLogout = () => {
    this.setState({
      user: {
        id: 0,
        firstName: '',
        isLoggedIn: false,
        recipeData: []
      }
    })
  }

  render() {
    const contextValue = {
      user: this.state.user,
      setUserLogout: this.setUserLogout
    }
    return (
      <div className="App">
        <BrowserRouter>
        <CbBkContext.Provider value={contextValue}>

          <main>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/profile/:id" component={Profile} />
              <Route path="/recipe/:id" component={Recipe} />
              <Route path="/addrecipe" component={AddRecipe} /> 
            </Switch>
          </main>

        </CbBkContext.Provider>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
