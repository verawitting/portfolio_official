import "./SocialMedia.css"

import linkedinLight from "/src/assets/social/linkedinlight.svg"
import gitHubLight from "/src/assets/social/githublight.svg"
import instaLight from "/src/assets/social/instagramlight.svg"

export const SocialMedia = () => {


    return (
        <div className="social-media-wrapper">
            <a  href="https://www.linkedin.com/in/vera-witting-ba51b1b6"
                target="_blank"
                rel="noreferrer noopener">
                <img className="linkedin-icon" src={linkedinLight} alt="Linked in icon." />
            </a>
            <a  href="https://github.com/verawitting"
                target="_blank"
                rel="noreferrer noopener">
                <img className="github-icon" src={gitHubLight} alt="Git Hub icon." />
            </a>
            <a  href="https://www.instagram.com/verawitting/"
                target="_blank"
                rel="noreferrer noopener">
                <img className="instagram-icon" src={instaLight} alt="Instagram icon" />
            </a>
        </div>
    )
}