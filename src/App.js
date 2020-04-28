import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Homepage from './homepage/homepage';
import Profile from './profile/profile';
import Recipe from './recipe/recipe';
import AddRecipe from './recipe/addrecipe';
import CbBkContext from './ckbkcontext';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user : {
        id: 0,
        isLoggedIn: true
      }
    }
  }

  render() {
    const contextValue = {
      user: this.state.user
    }
    return (
      <div>
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
