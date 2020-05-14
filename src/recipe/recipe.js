import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../nav/nav';
import RecipeService from './recipeservice';
import CbCkContext from '../ckbkcontext';
import config from '../config';

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
            editing: false,
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
                if (res.ok) {
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

    toggleEditOn = () => {
        this.setState({
            editing: true
        })
    }

    toggleEditOff = () => {
        const {id} = this.props.match.params;
        const {creator_id, recipe_id, recipe_name, recipe_tags,
               ingredients, directions, preptime, cooktime, servingsize} = this.state.recipe
        const updatedRecipe = {creator_id, recipe_id, recipe_name, recipe_tags,
            ingredients, directions, preptime, cooktime, servingsize}
        const url = config.API_ENDPOINT + '/recipes/' + id;

        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedRecipe)
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            } else {
                this.setState({
                    error: 'Something went wrong'
                })
            }
        })
        .then(updatedRecipe => {
            this.setState({
                editing: false
            })
            this.context.updateRecipeData(updatedRecipe[0])
        })
    }

    updateRecipeName = (e) => {
        this.setState({
            recipe: {...this.state.recipe,
                    recipe_name: e.currentTarget.value
            }
        })
    }

    updateDirections = (e) => {
        this.setState({
            recipe: {...this.state.recipe,
                directions: e.currentTarget.value.split(/[,\r?\n]/)
            }
        })
    }

    updateIngredients = (e) => {
        this.setState({
            recipe: {...this.state.recipe,
                ingredients: e.currentTarget.value.split(/[,\r?\n]/)
            }
        })
    }

    updateTags = (e) => {
        this.setState({
            recipe: {...this.state.recipe,
                    recipe_tags: e.currentTarget.value
            }
        })
    }

    updatePrepTime = (e) => {
        this.setState({
            recipe: {...this.state.recipe,
                    preptime: e.currentTarget.value
            }
        })
    }

    updateCookTime = (e) => {
        this.setState({
            recipe: {...this.state.recipe,
                    cooktime: e.currentTarget.value
            }
        })
    }

    updateServingSize = (e) => {
        this.setState({
            recipe: {...this.state.recipe,
                    servingsize: e.currentTarget.value
            }
        })
    }

    render() {
        const { recipe, editing } = this.state
        const { isLoggedIn } = this.context.user
        return (
            <Fragment>
                {isLoggedIn
                    ? <Nav />
                    : <Link to="/"> Home </Link>
                }
                <section>
                    {!editing ?
                        <button onClick={this.toggleEditOn}>Edit</button>
                        : <button onClick={this.toggleEditOff}>Save</button>
                    }

                    {!editing ?
                        <Fragment>

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
                        </Fragment>

                        : 
                        <Fragment>
                            <label>
                                <input defaultValue={recipe.recipe_name} onChange={this.updateRecipeName} />
                            </label>

                            <RecipeService.RecipeDetailsOnEdit
                                prep={recipe.preptime}
                                cook={recipe.cooktime}
                                serving={recipe.servingsize}
                                updatePrep={this.updatePrepTime}
                                updateCook={this.updateCookTime}
                                updateServing={this.updateServingSize}
                            />

                            <textarea defaultValue={recipe.ingredients} onChange={this.updateIngredients} />
                            <textarea defaultValue={recipe.directions} onChange={this.updateDirections}/>
                            <textarea defaultValue={recipe.recipe_tags} onChange={this.updateTags} />
                        </Fragment>
                    }

                    <p>
                        {this.state.error}
                    </p>
                </section>

            </Fragment>
        )
    }
}

export default Recipe