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
    },

    RecipeDetailsOnEdit(props) {
        return (
            <Fragment>
                <label>
                    <input type="text" onChange={props.updatePrep} defaultValue={props.prep}/>
                </label>
    
                <label>
                    <input type="text" onChange={props.updateCook} defaultValue={props.cook}/>
                </label>
    
                <label>
                    <input type="text" onChange={props.updateServing} defaultValue={props.serving}/>
                </label>
            </Fragment>
        ) 
    }
}
export default RecipeService
