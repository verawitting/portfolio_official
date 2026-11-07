import { SectionHeading } from "./components/Typo/SectionHeading.jsx"
import { SubHeading } from "./components/Typo/SubHeading.jsx"
import { SocialMedia } from "./components/SocialMedia.jsx"
import { BodyBold } from "./components/Typo/BodyBold.jsx"
import { ProfileImg } from "./components/ProfileImg.jsx"
import { FaPaperPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BodyText } from "./components/Typo/BodyText.jsx"
import profile from "../assets/extraaa/vera.jpg"


export const LetsTalk = () => {

    const contactInfoName = "Vera Witting"
    const contactInfoPhone = "+46(0) 705 13 35 32"
    const contactInfoMail = "verawitting@gmail.com"

    return (
        <section className="letstalk-section" id="contact">
            <div className="info-wrapper">
                <SectionHeading text={`Let's Talk!`}/>
                <div className="contact-info"> 
                            <div className="talk-image-cropper">
                                <img src={profile} className="talk-profile-image" alt="A portrait of Vera Witting" />
                            </div>
                    <div className="contact-links">
                        <a href="mailto:verawitting@gmail.com">
                            <FaPaperPlane />
                            <BodyBold text="Email"/>
                        </a>
                        <a  href="https://www.linkedin.com/in/vera-witting-ba51b1b6"
                            target="_blank"
                            rel="noreferrer noopener">
                                <FaLinkedin className="linkedin-icon" />
                                <BodyBold text="LinkedIn"/>
                        </a>
                        <a  href="https://github.com/verawitting"
                            target="_blank"
                            rel="noreferrer noopener">
                            <FaGithub className="github-icon" />
                            <BodyBold text="GitHub"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}