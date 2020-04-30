import React, {Fragment} from 'react'

const RecipeService = {
    
    RecipeDetails(props) {
        return (
            <Fragment>
                <label>
                    <input type="text" onInput={props.setPrepTime} />
                </label>
    
                <label>
                    <input type="text" onInput={props.setCookTime}/>
                </label>
    
                <label>
                    <input type="text" onInput={props.setServingSize} />
                </label>
            </Fragment>
        )
    },
    
    CreateIngredientForm(props) {
        return props.ingredients.map((_, i) => (
            i += 1, //eslint-disable-line
        <div key={i}>
    
          <label>
            <input type="text" name="name" onInput={e => props.handleInputChange(e, i)} placeholder="Name"/>
          </label>
    
          <label>
            <input type="number" name="qty" onInput={e => props.handleInputChange(e, i)} placeholder="Qty"/>
          </label>
    
          <select name="measurement" onChange={e => props.handleInputChange(e, i)}>
            <option value="NA">No Specific Amount</option>
            <option value="Ounces">Ounces</option>
            <option value="Pounds">Pounds</option>
            <option value="Cup">Cup</option>
            <option value="Teaspoon">Teaspoon</option>
            <option value="Tablespoon">Tablespoon</option>
          </select>
    
          <label>
            <input type="text" name="specialInstructions" onInput={e => props.handleInputChange(e, i)} placeholder="Special Instructions" />
          </label>
      </div>
        ))
    }
}
export default RecipeService
