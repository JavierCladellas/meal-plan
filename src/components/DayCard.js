import { useState } from "react";
import React from 'react';
import DayCardMeal from "./DayCardMeal";

const DayCard = (props) => {
    const day_index = props.day_index;


    const [meals, setMeals] = useState(
            localStorage.getItem('dayCards') 
        && 
            JSON.parse(localStorage.getItem('dayCards'))["day_"+day_index] 
        ?
            JSON.parse(localStorage.getItem('dayCards'))["day_"+day_index]
        :
            null
    );
    

    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)
    
    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50 
    
    const onTouchStart = (e) => {
      setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
      setTouchStart(e.targetTouches[0].clientX)
    }
    
    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)
    
    const onTouchEnd = (e) => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        //const isRightSwipe = distance < -minSwipeDistance
        if (isLeftSwipe) 
            e.target.classList.add("swipe");

        let newDayCards = JSON.parse(localStorage.getItem('dayCards'));
        delete newDayCards["day_"+day_index];
        if (Object.keys(newDayCards).length ===0) {
            newDayCards = null;
        }
        localStorage.setItem('dayCards', JSON.stringify(newDayCards));
        setTimeout(() => window.location.reload(), 500);

    }

    const addMealHandler = () => {
        const newMeals = meals ? {...meals, ["meal_"+(parseInt(Object.keys(meals)[Object.keys(meals).length-1].split("_")[1])+1)]:null} : {"meal_0":null};
        let currentDayCards = JSON.parse(localStorage.getItem('dayCards'));
        currentDayCards["day_"+day_index] = newMeals;
        setMeals(newMeals);
        localStorage.setItem('dayCards', JSON.stringify(currentDayCards));
    }

    return ( 
        <div className="day-card" key="day" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={(e) => onTouchEnd(e)}>
            <div className="day-card-header">
                <h3>Day {day_index}</h3>
            </div>
            <div className="day-card-body">
                {
                    meals && Object.keys(meals).map((meal, index) => (
                        <DayCardMeal key={index} day_index={day_index} meal_index = {parseInt(meal.split("_")[1])} recipes = {props.recipes} meal_photos={props.meal_photos}/>
                    ))
                }
            </div>
            <button className="add-meal-btn" onClick={addMealHandler}>+ Add meal</button>
        </div>

     );
}
 
export default DayCard;