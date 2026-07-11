import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "./ai.js";


export default function Main() {
    const [ingredients, setIngredients]=React.useState([])

    const[recipe, setRecipe] = React.useState("")
    const recipeShown = React.useRef("")
    React.useEffect(() => {
        if(recipe !== "" && recipeShown.current !== null)
            recipeShown.current.scrollIntoView({behavior: "smooth"})
    }, [recipe])


   async function getRecipe(){
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }
    function addIngredient(formData){
        const newIngredient = formData.get("ingredient");
        setIngredients(prevIngredients => ([...prevIngredients, newIngredient]))
    }
    return (
        <main className="main">
            <form action={addIngredient} className="form">
                <input 
                   type = "text"
                   placeholder = "eg: oregano"
                   aria-label="Add ingredients"
                   name="ingredient"
                />
                <button>Add ingredients</button>
            </form>
            {ingredients.length > 0 && 
            <IngredientsList 
                  ingredients={ingredients}  
                  getRecipe={getRecipe}
                  ref={recipeShown}
                  />
            }
            { recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}