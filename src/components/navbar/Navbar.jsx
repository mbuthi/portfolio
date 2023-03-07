import React from "react"
import "./Navbar.css"
import profile from "./profile.jpg"
import { Link } from "react-router-dom"
const Navbar = () => {
    const handleClick = () => {
        let  element = document.getElementById("navUl")                        
        element.classList.toggle("show")
    }
    return (
        <div>
            <nav className="nav">
                <ul className="navItemsLeft">
                    <li className="navItemLeft">
                        <Link className="navLink">
                        <img className="logo" src={profile} alt="profile" />                                
                        </Link>          
                        
                    
                    </li>
                    
                    <li className="navItemLeft">
                        <Link  className="navLink caption">Mbuthi Mungai</Link>
                    </li>            
                </ul>                                                
                <ul className="navItems" id="navUl">
                    <li className="navItem">
                        <a onClick={handleClick} className="navLink nav1" href="/">Home</a>
                    </li>
                    <li className="navItem">
                        <a onClick={handleClick} className="navLink nav1" href="#about">About</a>
                    </li>
                    <li className="navItem">
                        <a onClick={handleClick}  className="navLink nav1" href="#projects">Projects</a>
                    </li>
                    <li className="navItem">
                        <a onClick={handleClick} className="navLink nav1" href="#contact">Contact</a>
                    </li>
                </ul>
                <label htmlFor="icon" className="icon">
                    <i onClick={() => {
                        let  element = document.getElementById("navUl")                        
                        element.classList.toggle("show")
                    }} class="fa-solid fa-bars"></i>
                </label>
            </nav>
        </div>
    )
}

export default Navbar