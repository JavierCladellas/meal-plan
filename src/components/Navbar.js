import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import React from 'react';
import '../styles/navbar.css';


const Navbar = () => {
    const [currentPage, setCurretPage] = useState("Meal Plan");

    const handleClick = (e) => {
        setCurretPage(e.target.innerText);
    }


    return ( 
        <nav>
            <Link to="/meal-plan" className={currentPage==="Meal Plan" ? "active":""} onClick={(e) => handleClick(e)}>
                <i className="fa fa-calendar" aria-hidden="true"></i>
                <span>Meal Plan</span>
            </Link>
            <Link to="/recipes" className={currentPage==="Recipes" ? "active":""} onClick={(e) => handleClick(e)}>
                <i className="fa fa-book" aria-hidden="true"></i>
                <span>Recipes</span>
            </Link>
            <Link to="/groceries" className={currentPage==="Groceries" ? "active":""} onClick={(e) => handleClick(e)}>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                <span>Groceries</span>
            </Link>
            <Link to="/stock" className={currentPage==="Stock" ? "active":""} onClick={(e) => handleClick(e)}>
                <i className="fa fa-archive" aria-hidden="true"></i>
                <span>Stock</span>
            </Link>
        </nav>
     );
}
 
export default Navbar;