import React from "react";
import "./About.css"
const About = () => {
    return (
        <div id="about" className="about scrollContainer">
            <h2 className="headingSecondary">About Me</h2>
            <hr className="line"/>
            <p className="paragraph">
                <span>
                    Here you'll get to know me, and find 
                </span>
                <span>
                    my latest skills
                </span>
            </p>
            <div className="row aboutContainer">
                <div className="skills skillsDesc">
                    <h3 className="headingTertiary">Get to know me!</h3>
                    <p className="skillsParagrapgh">
                        <span>
                            A Backend Developer proficient in Flask, FastAPI, Pydantic, SQLAlchemy and REST API is equipped with the necessary tools to create high-performance web applications. 
                        </span>
                        <span>
                            With expertise in designing and implementing server-side logic, they ensure the smooth functioning of data processing and user management. 
                        </span>
                    </p>
                </div>
                <div className="skills skillsList">
                    <h3 className="headingTertiary">My Skills</h3>
                    <div className="skillsDiv">
                        <div>                            
                            <p className="anime">flask</p>
                        </div>
                        <div>
                            <p className="anime">fast api</p>
                        </div>
                        <div>
                            <p className="anime">Pydantic</p>
                        </div>
                        <div>
                            <p className="anime">SQLAlchemy</p>
                        </div>
                        <div>
                            <p className="anime">rest api</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About