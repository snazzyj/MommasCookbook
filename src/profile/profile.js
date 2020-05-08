import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import CkBkContext from '../ckbkcontext';

class Profile extends Component {

    static contextType = CkBkContext;

    render() {
        const {recipeData} = this.context.user;
        return (
            <Fragment>
                <h1>Welcome {this.context.user.firstName}</h1>
                <Link to="/addrecipe">
                    Add Recipe
                </Link>

                {recipeData.map((recipe) => {
                    let url = `/recipe/${recipe.recipe_id}`
                    return <li key={recipe.recipe_id}>
                                <Link to={url}>{recipe.recipe_name}</Link>
                           </li>
                })}
            </Fragment>
        )
    }
}

export default Profile;