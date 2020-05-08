import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import Nav from '../nav/nav';
import CbCkContext from '../ckbkcontext';

//renders each ingredient into its own li element
const renderIngredientList = (ingredients) => {
    if (ingredients !== undefined) {
        return ingredients.map((el, i) =>
            <li key={i}>{el}</li>
        )
    } else {
        return ''
    }
}

//renders each direction into its own p tag
const renderDirections = (directions) => {
    if (directions !== undefined) {
        return directions.map((el, i) =>
            <p key={i}>{el}</p>
        )
    } else {
        return ''
    }
}

class Recipe extends Component {

    static contextType = CbCkContext;

    constructor(props) {
        super(props);
        this.state = {
            recipe: [],
            error: ''
        }
    }

    //On mount, perform a fetch request based on the ID param
    //if the res is ok, set state of the zeroth index
    //else display an error
    componentDidMount() {
        const { id } = this.props.match.params;
        const searchUrl = 'http://localhost:8000/api/recipes/' + id
        fetch(searchUrl, {
            method: 'GET'
        })
        .then(res => {
            if(res.ok){
                return res.json()
            } else {
                this.setState({
                    error: 'Oops! Something went wrong fetching that recipe!'
                })
            }
        })
        .then(data => {
            this.setState({
                recipe: data[0]
            })
        })
    }
    render() {
        const { recipe } = this.state
        const {isLoggedIn} = this.context.user
        return (
            <Fragment>
                {isLoggedIn 
                ? <Nav />
                : <Link to="/"> Home </Link>
                }
                <section>
                    <h1>{recipe.recipe_name}</h1>

                    <p>Prep Time: <span>{recipe.preptime}</span></p>

                    <p>Cook Time: <span>{recipe.cooktime}</span></p>

                    <p>Serving Size: <span>{recipe.servingsize}</span></p>

                    <h3>Ingredients</h3>
                    <ul>
                        {renderIngredientList(recipe.ingredients)}
                    </ul>

                    <h3>Directions</h3>
                    {renderDirections(recipe.directions)}
                    
                    <p>
                        {this.state.error}
                    </p>
                </section>

            </Fragment>
        )
    }
}

export default Recipe