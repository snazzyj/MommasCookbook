import React, { Component, Fragment } from 'react';
import Nav from '../nav/nav';
import RecipeService from './recipeservice';
import CbCkContext from '../ckbkcontext';
import config from '../config';
import './recipe.css'

class AddRecipe extends Component {

    static contextType = CbCkContext;

    constructor(props) {
        super(props);
        this.state = {
            recipeName: "",
            ingredients: [],
            directions: [],
            prepTime: "",
            cookTime: "",
            servingSize: "",
            tags: "",
            disabled: false,
            error: ''
        }
    }

    componentWillUnmount() {
        this.setState({
            recipeName: "",
            ingredients: [],
            directions: [],
            prepTime: "",
            cookTime: "",
            servingSize: "",
            tags: "",
            disabled: false,
            error: ''
        })
    }

    setRecipeName = (e) => {
        this.setState({
            recipeName: e.currentTarget.value
        })
    }

    //sets prep time
    setPrepTime = (e) => {
        this.setState({
            prepTime: e.currentTarget.value
        })
    }

    //sets cook time
    setCookTime = (e) => {
        this.setState({
            cookTime: e.currentTarget.value
        })
    }

    //sets serving size
    setServingSize = (e) => {
        this.setState({
            servingSize: e.currentTarget.value
        })
    }

    //sets the ingredient list into an array of
    //strings, splitting on each return
    handleIngredients = (e) => {
        this.setState({
            ingredients: e.currentTarget.value.split(/\r?\n/)
        })
    }

    //sets directions list into an array of
    //strings, splitting on each return
    handleDirections = (event) => {
        this.setState({
            directions: event.currentTarget.value.split(/\r?\n/)
        })
    }

    //sets state recipe tags by string value
    //seperated by a comma
    handleTags = (event) => {
        this.setState({
            tags: event.currentTarget.value
        })
    }

    //disables the submit button
    handleClick = () => {
        this.setState({
            disabled: true
        })
    }

    //will send a post request to API
    //returns new recipe with ID
    //TODO: add new recipe to recipeData array
    handleSubmit = (e) => {
        e.preventDefault();

        let { id } = this.context.user
        let url = config.API_ENDPOINT + '/recipes'
        let { recipeName, ingredients, directions, prepTime, cookTime, servingSize, tags } = this.state
        let recipe = {
            recipeName,
            ingredients,
            directions,
            prepTime,
            cookTime,
            servingSize,
            recipe_tags: tags,
            creator_id: id
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(recipe)
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    this.setState({
                        error: 'Something went wrong'
                    })
                }
            })
            .then(data => {
                this.context.addNewRecipe(data)
                this.props.history.push('/')
            })
    }

    render() {
        return (
            <Fragment>
                <Nav />
                <section>
                    <h1>New Recipe</h1>
                    <form className="addRecipeForm">

                        <div className="top">
                            <RecipeService.RecipeDetails setPrepTime={this.setPrepTime} setCookTime={this.setCookTime} setServingSize={this.setServingSize} />
                        </div>

                        <ul className="bottom">
                            <li>
                                <label> Recipe Title
                                </label>
                                <input className="recipeNameInput" onChange={this.setRecipeName} required placeholder="" />
                            </li>
                            <li>
                                <textarea onChange={this.handleIngredients} placeholder="Ingredients go here...Put each ingredient on its own line" required />
                            </li>
                            <li>
                                <textarea onChange={this.handleDirections} placeholder="Directions go here...Put each step on its own line" required />
                            </li>
                            <li>
                                <textarea onChange={this.handleTags} placeholder="Add Tags to recipe..Seperated by a comma" required />
                            </li>
                        </ul>

                        <button type="submit" onClick={(e) => { this.handleClick(); this.handleSubmit(e) }}>
                            {this.state.disabled ? 'Cooking your recipe up!' : 'Save It'}
                        </button>
                    </form>
                </section>
            </Fragment>
        )
    }
}

export default AddRecipe