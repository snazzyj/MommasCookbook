import React, { Component } from 'react';
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
                <section>
                    <h1>New Recipe</h1>
                    <form className="addRecipe">

                        <div className="mainContainer">
                            <div className="top">

                            <label className="recipeName">
                                <input className="recipeNameInput" onChange={this.setRecipeName} required placeholder="Recipe Title" />
                            </label>

                            </div>
                            <div className="leftInputs">

                            <RecipeService.RecipeDetails setPrepTime={this.setPrepTime} setCookTime={this.setCookTime} setServingSize={this.setServingSize} />
                            </div>

                            <div className="rightInputs">

                            <label className="ingredientsLabel">Ingredients
                                <textarea onChange={this.handleIngredients} placeholder="Put each ingredient on its own line" required />
                            </label>

                            <label className="directionsLabel">Directions
                                <textarea onChange={this.handleDirections} placeholder="Put each step on its own line" required />
                            </label>

                            <label className="recipeTagsLabel">Recipe tags
                                <textarea onChange={this.handleTags} placeholder="Add Tags to recipe..Seperated by a comma" required />
                            </label>

                            </div>
                            <button type="submit" onClick={(e) => { this.handleClick(); this.handleSubmit(e) }}>
                                {this.state.disabled ? 'Cooking your recipe up!' : 'Save It'}
                            </button>

                        </div>
                    </form>
                </section>
        )
    }
}

export default AddRecipe