import "../introduction/Introduction.css"

import profile from "../../assets/extraaa/vera.jpg"

export const ProfileImg = () => {

    return(
        <div className="image-cropper flower">
            <img src={profile} className="profile-image" alt="A portrait of Vera Witting" />
        </div>
    )
}