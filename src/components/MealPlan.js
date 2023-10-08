import '../styles/mealPlan.css'

import { useState } from 'react';

import DayCard from './DayCard';


const MeaPlan = (props) => {

    const photos = props.photos;

    const [dayCards, setDayCards] = useState(
            localStorage.getItem('dayCards') 
        ? 
            JSON.parse(localStorage.getItem('dayCards')) 
        : 
            null
    );

    const addDayCardHandler = () => {
        const newDayCards = 
            dayCards 
        ? 
            {...dayCards, 
                [
                    "day_"+
                    (parseInt(
                        Object.keys(dayCards)[Object.keys(dayCards).length-1].split("_")[1]
                    )+1)
                ]:null} 
        : 
            {"day_0":null};
        setDayCards(newDayCards);
        localStorage.setItem('dayCards', JSON.stringify(newDayCards));
    }

    return ( 
        <div className="meal-plan main-page">
            <div className="meal-day-card">
                {
                    dayCards && Object.keys(dayCards).map((day, index) => (
                        <DayCard key={index} day_index={day.split("_")[1]} recipes={props.recipes} meal_photos = {photos}/>
                    ))
                }
            </div>
            <button className="add-day-btn" onClick={addDayCardHandler}>+ Add day</button>
        </div>
    );
}
 
export default MeaPlan;