import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import CbCkContext from '../ckbkcontext';

class Profile extends Component {

    static contextType = CbCkContext;

    render() {
        const {recipeData} = this.context.user;
        return (
            <Fragment>
                <h1>Welcome {this.context.user.firstName}</h1>
                <Link to="/addrecipe">
                    Add Recipe
                </Link>

                {recipeData.map((recipe) => {
                    let url = `/recipe/${recipe.id}`
                    return <li key={recipe.id}>
                                <Link to={url}>{recipe.recipeName}</Link>
                           </li>
                })}
            </Fragment>
        )
    }
}

export default Profile;