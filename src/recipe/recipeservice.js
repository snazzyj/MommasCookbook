import React, {Fragment} from 'react'

const RecipeService = {
    RecipeDetails(props) {
        return (
            <Fragment>
                <label> Prep Time
                    <input className="recipePrep" type="text" onInput={props.setPrepTime} placeholder="Prep Time"/>
                </label>
    
                <label> Cook Time
                    <input className="recipeCook" type="text" onInput={props.setCookTime} placeholder="Cook Time"/>
                </label>
    
                <label> Serving Size
                    <input className="recipeServing" type="text" onInput={props.setServingSize} placeholder="Serving Size"/>
                </label>
            </Fragment>
        )
    },

    RecipeDetailsOnEdit(props) {
        return (
            <Fragment>
                <label> Prep Time
                    <input className="recipePrep"  type="text" onChange={props.updatePrep} defaultValue={props.prep}/>
                </label>
    
                <label> Cook Time
                    <input className="recipeCook" type="text" onChange={props.updateCook} defaultValue={props.cook}/>
                </label>
    
                <label> Serving Size
                    <input className="recipeServing" type="text" onChange={props.updateServing} defaultValue={props.serving}/>
                </label>
            </Fragment>
        ) 
    }
}
export default RecipeService
