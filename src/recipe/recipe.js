import React, { Component, Fragment } from 'react';
import Nav from '../nav/nav';
import CbCkContext from '../ckbkcontext';

const renderIngredientList = (ingredients) => {
    if (ingredients !== undefined) {
        return ingredients.map((el, i) =>
            <li key={i}>{el}</li>
        )
    } else {
        return ''
    }
}

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
            recipe: []
        }
    }
    componentDidMount() {
        const { recipeData } = this.context.user
        const { id } = this.props.match.params;

        this.setState({
            recipe: recipeData.find((el) => {
                return el.id === parseInt(id);
            })
        })
    }
    render() {
        const { recipe } = this.state
        console.log(recipe)
        return (
            <Fragment>
                <Nav />
                <h1>{recipe.recipeName}</h1>

                <p>Prep Time: <span>{recipe.prepTime}</span></p>

                <p>Cook Time: <span>{recipe.cookTime}</span></p>

                <p>Serving Size: <span>{recipe.servingSize}</span></p>

                <h3>Ingredients</h3>
                {renderIngredientList(recipe.ingredients)}

                <h3>Directions</h3>
                {renderDirections(recipe.directions)}

            </Fragment>
        )
    }
}

export default Recipe