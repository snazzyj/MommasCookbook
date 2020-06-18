import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import CkBkContext from '../ckbkcontext';
import '../profile/profile.css'

class RecipeListMain extends Component {

    static contextType = CkBkContext;

    render() {
        const {recipeListData} = this.context;
        return (
            <Fragment>
                <ul className="recipeList">
                {recipeListData && recipeListData.map((item) => {
                    let url = '/recipe/' + item.recipe_id
                    return <li key={item.recipe_id}>
                        <Link to={url}>
                            {item.recipe_name}
                        </Link>
                    </li>
                })}
                </ul>
            </Fragment>
        )
    }
}

export default RecipeListMain;