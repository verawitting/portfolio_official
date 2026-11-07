
import { SectionHeading } from "../components/Typo/SectionHeading.jsx"
import { SubHeading } from "../components/Typo/SubHeading.jsx"
import { BodyBold } from "../components/Typo/BodyBold.jsx"

import "./Tech.css"

export const Tech = () => {

    const TechTextOne = "HTML • CSS • Flexbox";
    const TechTextTwo = "Javascript ES6 • JSX"; 
    const TechTextThree = "React • React Hooks"
    const TechTextFour = "Node.js • Mongo DB";
    const TechTextFive = "Web Accessability • APIs"
    const TechTextSix = "mob-programming • Github";

    return (
        <section className="tech-section">
            <div className="tech-wrapper">
                <div className="headings-tech">
                    <SectionHeading text={`Tech`}/>
                </div>
                <div className="tech-skills">
                    <BodyBold  className={`tech-p`} text={`BACKEND`} />
                    <BodyBold className={`tech-p`} text={`Java • Spring Boot • REST APIs`} />
                </div>
                <div className="tech-skills">
                    <BodyBold className={`tech-p`} text={`FRONTEND`} />
                    <BodyBold className={`tech-p`} text={`React • JavaScript • TypeScript • HTML & CSS`} />
                </div>
                <div className="tech-skills">
                    <BodyBold className={`tech-p`} text={`DATA`} />
                    <BodyBold className={`tech-p`} text={`SQL • H2 • MongoDB`} />
                </div>      
            </div>
        </section>
    );
}; 