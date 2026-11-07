import { MainHeading } from "../components/Typo/MainHeading.jsx"
import { SectionHeading } from "../components/Typo/SectionHeading.jsx"
import { SubHeading } from "../components/Typo/SubHeading.jsx"
import { BodyText } from "../components/Typo/BodyText.jsx"
import { FaArrowDown } from "react-icons/fa";
import { TiStarburstOutline } from "react-icons/ti";
import { BsEmojiSunglasses } from "react-icons/bs";



import "./Introduction.css"
import { ProfileImg } from "../components/ProfileImg.jsx"
import { BodyBold } from "../components/Typo/BodyBold.jsx"


export const Introduction = () => {

    const BodyContent = `Hello world! I'm a software developer with a background in fullstack 
    development and graphic design. I've worked on projects using Java, Spring Boot, REST APIs, 
    databases and React, with hands-on experience in testing and CI/CD workflows. 
    I enjoy solving technical problems, learning how systems fit together and collaborating 
    with others to build useful software.`

    return (
        <section className="introduction-section">
            <div className="introduction-wrapper">
                    <ProfileImg />
                <div className="intro-text-wrapper">
                    <MainHeading className={`intro portrait-name`} text={`Vera Witting`}/>
                    <SubHeading className={`intro intro-subheading`} text={`Software Developer`}/>
                    <BodyBold className={`intro intro-bold`} text={`Java | Spring Boot | React`}/>    
                    <BodyText className={`intro`} text={BodyContent} />
                </div>
            </div>
            <div className="arrow">
                <FaArrowDown />
            </div>
        </section>
    )
}