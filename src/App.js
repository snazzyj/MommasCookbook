import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Homepage from './homepage/homepage';
import Profile from './profile/profile';
import Recipe from './recipe/recipe';
import AddRecipe from './recipe/addrecipe';
import RecipeListMain from './recipelistmain/recipelistmain';
import CbBkContext from './ckbkcontext';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user : {
        id: 0,
        firstName: '',
        isLoggedIn: false,
        recipeData: []
      },
      recipeSearchResults: []
    }
  }

  //sets initial login state
  //stores the user data into local storage
  setUserLogin = (user) => {
    this.setState({
      user: {
        id: user.id,
        firstName: user.firstName,
        isLoggedIn: true,
        recipeData: user.recipeData
      }
    })

    localStorage.setItem('user', JSON.stringify(this.state.user))
  }

  //resets state
  //removes users obj from local storage
  setUserLogout = () => {
    this.setState({
      user: {
        id: 0,
        firstName: '',
        isLoggedIn: false,
        recipeData: []
      }
    })

    localStorage.removeItem('user')
  }

  fillRecipeList = (recipeList) => {
    console.log(recipeList)
    this.setState({
      recipeSearchResults: recipeList
    })
  }

  render() {
    const contextValue = {
      user: this.state.user,
      recipeListData: this.state.recipeSearchResults,
      setUserLogout: this.setUserLogout,
      setUserLogin: this.setUserLogin,
      fillRecipeList: this.fillRecipeList
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
              <Route path="/searchresults" component={RecipeListMain} />
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
