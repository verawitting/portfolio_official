import { MainHeading } from "./components/Typo/MainHeading.jsx"
import { SubHeading } from "./components/Typo/SubHeading.jsx"
import { SocialMedia } from "./components/SocialMedia.jsx"

import profile  from "../assets/extraaa/profile-pic.jpg"
import { BodyBold } from "./components/Typo/BodyBold.jsx"

export const LetsTalk = () => {

    const contactInfoName = "Vera Witting"
    const contactInfoPhone = "+46(0) 705 13 35 32"
    const contactInfoMail = "verawitting@gmail.com"

    return (
        <section className="letstalk-section">
            <MainHeading className={`dark-h2`} text={`Let's Talk!`}/>
            <div className="image-wrapper">
                <div className="image-cropper">
                    <img src={profile} alt="A picture of Vera Witting" />
                </div>
            </div>
            <div className="info-wrapper">
            <MainHeading className={`dark-h2-introduction`} text={`Vera Witting`}/>
                <BodyBold text={contactInfoPhone}/>
                <BodyBold text={contactInfoMail}/>
            </div>
            <SocialMedia />
        </section>
    )
}