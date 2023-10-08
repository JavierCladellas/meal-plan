import '../styles/recipes.css'
import RecipeCard from './RecipeCard';
import React from 'react';

const Recipes = (props) => {

    const recipes = props.recipes
    const photos = props.photos
    return ( 
        <div className="recipes main-page">
            {
                Object.keys(recipes).map((key, index) => {
                    return <RecipeCard key={index} name={key} ingredients={recipes[key]} meal_photo={photos[key]}/>
                }
            )}                
        </div>
     );
}
 
export default Recipes;