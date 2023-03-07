import React from "react";

import "./Contact.css"
import { Link } from "react-router-dom";
import twitter from "./images/twitter-6.svg"
import github from "./images/github-icon-1.svg"
const Contact = ()=> {
    return (
        <div id="contact" className="contact scrollContainer">
            <h2 className="headingSecondary">Get In Touch</h2>
            <hr className="line" />
            <p className="paragraph">
                <span>
                I'd love to hear from you!
                </span>
                <span>
                Get in touch with me today to learn more about my services and how I can help.
                </span>
             
            </p>
            <button className="headingButton">
                <Link   onClick={(e) => {
                    e.preventDefault()
                    window.location.href = "mailto:mbuthimungai34@gmail.com"
                }} to="#">Mail Me</Link>
            </button>
            <div className="socials">
                <a href="https://twitter.com/MungaiMbuthi" rel="noreferrer" target={"_blank"}><img src={twitter} alt="" /></a>
                <a href="https://github.com/mbuthi" rel="noreferrer"  target={"_blank"}><img src={github} alt="" /></a>
                
            </div>
        </div>
    )
}

export default Contact