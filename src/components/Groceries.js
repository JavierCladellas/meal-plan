import '../styles/groceries.css';
import React from 'react';
const Groceries = (props) => {
    const recipes = props.recipes;
    
    const meal_plan = JSON.parse(localStorage.getItem('dayCards'));

    let meal_list = [];

    Object.keys(meal_plan).map((day) => {
        if (meal_plan[day] !== null)
            Object.keys(meal_plan[day]).map((meal) => {
                if (meal_plan[day][meal] !== null)
                    meal_list.push(meal_plan[day][meal]);
                return null;
            });
        return null;
    });
    
    let groceries = {};
    for (let i = 0; i < meal_list.length; i++) {
        Object.keys(recipes[meal_list[i]]).map((key) => {
            if (groceries[key] === undefined)
                groceries[key] = {"quantity":recipes[meal_list[i]][key].quantity,"unit":recipes[meal_list[i]][key].unit};
            else
                groceries[key].quantity += recipes[meal_list[i]][key].quantity;
            return null;
        });
    }
    
    if (localStorage.getItem('checkboxes') === null)
        localStorage.setItem('checkboxes', JSON.stringify(
            Object.keys(groceries).map((key) => {
                return {"name":key,"checked":false};
            })
        ));

    const saveCheckbox = (e) => {
        let checkboxes = JSON.parse(localStorage.getItem('checkboxes'));
        checkboxes.map((checkbox) => {
            if (checkbox.name === e.target.id.split("_")[0]) {
                checkbox.checked = !checkbox.checked;
            }
            return null;
        });
        localStorage.setItem('checkboxes', JSON.stringify(checkboxes));
        window.location.reload();
    }
    

    return ( 
        <div className="groceries main-page">
            <h2>Groceries</h2>
            {
                Object.keys(groceries).map((key) => (
                    <div className="grocery-item" key={key}>
                        <input id={key+"_checkbox"} type="checkbox" className="grocery-checkbox" onChange={saveCheckbox} checked={
                                localStorage.getItem("checkboxes") === null 
                            ? 
                                false 
                            : 
                                JSON.parse(localStorage.getItem("checkboxes")).filter((checkbox) => checkbox.name === key)[0].checked
                        }/>
                        <p className="grocery-name">{key}</p>
                        <p className="grocery-quantity">{groceries[key].quantity} {groceries[key].unit}</p>
                    </div>
                ))
            }
        </div>
     );
}

export default Groceries;