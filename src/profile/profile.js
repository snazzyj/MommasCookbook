import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CkBkContext from '../ckbkcontext';
import './profile.css'

class Profile extends Component {

    static contextType = CkBkContext;

    render() {
        const {recipeData} = this.context.user;
        return (
            <section>
                <h1 className="title">Welcome {this.context.user.firstName}</h1>
                
                <ul className="recipeList">
                {recipeData && recipeData.map((recipe) => {
                    let url = `/recipe/${recipe.recipe_id}`
                    return <li key={recipe.recipe_id}>
                                <Link to={url}>{recipe.recipe_name}</Link>
                           </li>
                })}
                </ul>
            </section>
        )
    }
}

export default Profile;