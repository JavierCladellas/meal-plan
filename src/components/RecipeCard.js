const RecipeCard = (props) => {

    const ingredients = props.ingredients
    const meal_photo = props.meal_photo
    
    return ( 
        <div className="recipe-card">
            <div className="recipe-card-header">
                <div className="recipe-photo-wrapper">
                    <img src={"./photos/"+meal_photo} alt="recipe" />
                </div>
                <h3>{props.name}</h3>
            </div>
            <div className="recipe-card-body">
                <ul>
                    {
                        Object.keys(ingredients).map((key, index) => {
                            return <li key={index}><span>{key}</span> <p>({ingredients[key].quantity} {ingredients[key].unit})</p></li>
                        })
                    }
                </ul>
            </div>
        </div>
     );
}
 
export default RecipeCard;