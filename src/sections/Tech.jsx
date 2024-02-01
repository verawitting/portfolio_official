
import { MainHeading } from "./components/Typo/MainHeading.jsx"
import { BodyBold } from "./components/Typo/BodyBold.jsx"

import "./Tech.css"

export const Tech = () => {

    const TechText = `HTML, CSS, Flexbox, Javascript, ES6, JSX, React, React Hooks, Node.js, Mongo DB, Web Accessability, APIs, mob-programming, pair-programming, GitHub.`    

    return (
        <section className="tech-section">
            <div className="tech-wrapper">
                <div className="headings-tech">
                    <MainHeading className={`light-h2`} text={`Tech`}/>
                </div>
                <BodyBold className={`tech-p`} text={TechText}/>
            </div>
        </section>
    )
}  