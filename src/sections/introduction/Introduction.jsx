import { MainHeading } from "../components/Typo/MainHeading.jsx"
import { SubHeading } from "../components/Typo/SubHeading.jsx"
import { BodyText } from "../components/Typo/BodyText.jsx"

import profile from "../../assets/extraaa/profile-pic.jpg"
import arrow from "../../assets/elements/arrow.svg"

import "./Introduction.css"


export const Introduction = () => {

    const BodyContent = `I love programming and embrace every opportunity to learn more. 
    With a background in Graphic Design, I create dynamic and visually appealing digital experiences. 
    I thrive in social environments, learning and being inspired by people around me.`

    return (
        <section className="introduction-section">
            <div className="introduction-wrapper">
                <div className="image-wrapper">
                    <div className="image-cropper">
                        <img src={profile} alt="A picture of Vera Witting" />
                    </div>
                </div>
                <div className="text-wrapper">
                    <MainHeading className={`dark-h2-introduction`} text={`Vera Witting`}/>
                    <div className="headings-introduction">
                    <SubHeading className={`dark-h3-introduction`} text={`Frontend Developer`}/>
                    <SubHeading className={`dark-h3-introduction`} text={`Graphic Designer`}/>
                    </div>
                    <BodyText text={BodyContent} />
                </div>
            </div>
            <div className="arrow">
                <img className="arrow" src={arrow} alt="Arrow jumping, pointing down to the rest of the page" />
            </div>
        </section>
    )
}