
import { MainHeading } from "../components/Typo/MainHeading.jsx"
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
                    <MainHeading className={`light-h2`} text={`Tech`}/>
                </div>
                <div className="tech-skills">
                    <BodyBold className={`tech-p`} text={TechTextOne} />
                    <BodyBold className={`tech-p`} text={TechTextTwo} />
                    <BodyBold className={`tech-p`} text={TechTextThree} />
                    <BodyBold className={`tech-p`} text={TechTextFour} />
                    <BodyBold className={`tech-p`} text={TechTextFive} /> 
                </div>               
            </div>
        </section>
    );
}; 