import "./Button.css"

export const Button = ({ link, buttonName, icon, iconAlt, className }) => {


    return(
        <div className="button">
            <a href={link} className={className} target="_blank" rel="noreferrer noopener">
                <div className="button-content-wrapper">
                    <img src={icon} alt={iconAlt} />
                    {buttonName}
                </div>
            </a>
        </div>
    )
}