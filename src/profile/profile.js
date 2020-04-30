import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Recipe from '../recipe/recipe';

class Profile extends Component {
    render() {
        return (
            <Fragment>
                <h1>Hello from dashboard</h1>
                <Link to="/addrecipe">
                    Add Recipe
                </Link>
                <Recipe />
            </Fragment>
        )
    }
}

export default Profile;