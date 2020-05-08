import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import CkBkContext from '../ckbkcontext';

class RecipeListMain extends Component {

    static contextType = CkBkContext;

    render() {
        const {recipeListData} = this.context;
        return (
            <Fragment>
                <ul>
                {recipeListData.map((item) => {
                    let url = '/recipe/' + item.recipe_id
                    return <li key={item.recipe_id}>
                        <Link to={url}>
                            <h3>{item.recipe_name}</h3>
                        </Link>
                    </li>
                })}
                </ul>
            </Fragment>
        )
    }
}

export default RecipeListMain;