import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
const Header = () => {
    

    return (
        <div>
            <div id="Header" className="header scrollContainer">
                <div className="padding">
                <h1 className="headingPrimary">
                    Hello 👋, I'M Mbuthi Mungai 
                </h1>
                <p className="headingParagraph">
                    <span >
                        A passionate backend developer building robust and scalable
                    </span>
                    <span>
                        infrastructure that can handle traffic and data.
                    </span>
                </p>
                </div>
                

                <button className="headingBtn headingButton">
                    <a href="#projects">Projects</a>       
                </button>
            </div>
        </div>
    )
}

export default Header