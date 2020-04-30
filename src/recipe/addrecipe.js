import React, {Component} from 'react';
import RecipeService from './recipeservice';

class AddRecipe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            ingredients: [{
                name: '',
                qty: Number,
                measurement: '',
                specialInstructions: ''
            }],
            directions: [],
            prepTime: "",
            cookTime: "",
            servingSize: ""
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

    handleInputChange = (e, i) => {
        const { name, value } = e.target;
        let ingredients = [...this.state.ingredients];
        ingredients[i] = { ...ingredients[i], [name]: value };
        this.setState({
            ingredients
        });
    }

    handleDirections = (event) => {
        this.setState({
            directions: event.currentTarget.value.split(/\r?\n/)
        })    
    }

    render() {
        console.log(this.state)
        return (
            <section>
                <h1>New Recipe</h1>
                <form>
                    {this.createIngredientForm
                    }
                    <RecipeService.CreateIngredientForm
                    ingredients={this.state.ingredients}
                    handleInputChange={this.handleInputChange}/>
                    
                    <RecipeService.RecipeDetails setPrepTime={this.setPrepTime} setCookTime={this.setCookTime} setServingSize={this.setServingSize}/>
                    <textarea onChange={this.handleDirections} />
                </form>
            </section>
        )
    }
}

export default AddRecipe