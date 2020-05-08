import React, { Component, Fragment } from 'react';
import Nav from '../nav/nav';
import RecipeService from './recipeservice';

class AddRecipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            ingredients: [],
            directions: [],
            prepTime: "",
            cookTime: "",
            servingSize: "",
            tags: "",
            disabled: false
        }
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
    handleSubmit = () => {
        alert('Submitted your recipe!')
    }

    render() {
        return (
            <Fragment>
                <Nav />
                <section>
                    <h1>New Recipe</h1>
                    <form>
                        {this.createIngredientForm}

                        <RecipeService.RecipeDetails setPrepTime={this.setPrepTime} setCookTime={this.setCookTime} setServingSize={this.setServingSize} />

                        <textarea onChange={this.handleIngredients} placeholder="Ingredients go here...Put each ingredient on its own line" required />
                        <textarea onChange={this.handleDirections} placeholder="Directions go here...Put each step on its own line" required />
                        <textarea onChange={this.handleTags} placeholder="Add Tags to recipe..Seperated by a comma" required />

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