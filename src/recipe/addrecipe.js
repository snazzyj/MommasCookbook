import React, {Component} from 'react';
import RecipeService from './recipeservice';

class AddRecipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ingredients: [],
            directions: [],
            prepTime: "",
            cookTime: "",
            servingSize: "",
            disabled: false
        }
    }

    setPrepTime = (e) => {
        this.setState({
            prepTime: e.currentTarget.value
        })
    }

    setCookTime = (e) => {
        this.setState({
            cookTime: e.currentTarget.value
        })
    }

    setServingSize = (e) => {
        this.setState({
            servingSize: e.currentTarget.value
        })
    }

    handleIngredients = (e) => {
        this.setState({
            ingredients: e.currentTarget.value.split(/\r?\n/)
        })
    }

    handleDirections = (event) => {
        this.setState({
            directions: event.currentTarget.value.split(/\r?\n/)
        })    
    }

    handleClick = () => {
        this.setState({
            disabled: true
        })
    }

    handleSubmit = () => {
        alert('Submitted your recipe!')
    }

    render() {
        console.log(this.state)
        return (
            <section>
                <h1>New Recipe</h1>
                <form>
                    {this.createIngredientForm
                    }

                    
                    <RecipeService.RecipeDetails setPrepTime={this.setPrepTime} setCookTime={this.setCookTime} setServingSize={this.setServingSize}/>

                    <textarea onChange={this.handleIngredients} placeholder="Ingredients go here...Put each ingredient on its own line" />
                    <textarea onChange={this.handleDirections} placeholder="Directions go here...Put each step on its own line"/>

                    <button type="submit" onClick={(e) => {this.handleClick(); this.handleSubmit(e)}}>
                        {this.state.disabled ? 'Cooking your recipe up!' : 'Save It'}
                    </button>
                </form>
            </section>
        )
    }
}

export default AddRecipe