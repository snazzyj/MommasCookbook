import React, {Fragment} from 'react'

const RecipeService = {
    RecipeDetails(props) {
        return (
            <Fragment>
                <label>
                    <input type="text" onInput={props.setPrepTime} placeholder="Prep Time"/>
                </label>
    
                <label>
                    <input type="text" onInput={props.setCookTime} placeholder="Cook Time"/>
                </label>
    
                <label>
                    <input type="text" onInput={props.setServingSize} placeholder="Serving Size"/>
                </label>
            </Fragment>
        )
    }
}
export default RecipeService
