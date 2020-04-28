import React, {Component, Fragment} from 'react';
import Recipe from '../recipe/recipe';
import AddRecipe from '../recipe/addrecipe';

class Profile extends Component {
    render() {
        return (
            <Fragment>
                <h1>Hello from dashboard</h1>
                <AddRecipe />
                <Recipe />
            </Fragment>
        )
    }
}

export default Profile;