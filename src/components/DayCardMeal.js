import { useState } from "react";
import Select from 'react-select'
import React from 'react';
const DayCardMeal = (props) => {

    const meal_index = props.meal_index;
    const day_index = props.day_index;

    const [meal, setMeal] = useState(
            localStorage.getItem('dayCards')
        &&
            JSON.parse(localStorage.getItem('dayCards'))["day_"+day_index]
        &&
            JSON.parse(localStorage.getItem('dayCards'))["day_"+day_index]["meal_"+meal_index]
        ?
            JSON.parse(localStorage.getItem('dayCards'))["day_"+day_index]["meal_"+meal_index]
        :
            null
    );

    const mealNameChangeHandler = (e) => {
        const newMeal = e.value;
        let currentDayCards = JSON.parse(localStorage.getItem('dayCards'));
        currentDayCards["day_"+day_index]["meal_"+meal_index] = newMeal;
        setMeal(newMeal);
        localStorage.setItem('dayCards', JSON.stringify(currentDayCards));
    }

    const removeMealHandler = () => {
        let currentDayCards = JSON.parse(localStorage.getItem('dayCards'));
        delete currentDayCards["day_"+day_index]["meal_"+meal_index];
        setMeal(null);
        if (Object.keys(currentDayCards["day_"+day_index]).length ===0) {
            currentDayCards["day_"+day_index] = null;
        }
        localStorage.setItem('dayCards', JSON.stringify(currentDayCards));
        window.location.reload();
    }

    const meals = Object.keys(props.recipes).map((recipe) => ({value:recipe, label:recipe}));
    const meal_photo = props.meal_photos[meal];
    return ( 
        <div className="day-card-meal" key={day_index + "_"+meal_index}>
            <div className="meal-photo-wrapper">
                <img src={meal_photo?"./photos/"+meal_photo:"./photos/meal_default.png"} alt="meal" />
            </div>
            <div className="meal-name-wrapper">
                <Select options={meals} placeholder="Select a meal" onChange={(e) => {mealNameChangeHandler(e)}}  defaultInputValue={meal??""} />
            </div>
            <div className="meal-remove-wrapper">
                <button className="remove-meal-btn" onClick={removeMealHandler}>&times;</button>
            </div>
        </div>
     );
}
 
export default DayCardMeal;