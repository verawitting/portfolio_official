import "./Button.css"

export const Button = ({ link, buttonName, icon: Icon, className }) => {
    return (
        <div className="button">
            <a
                href={link}
                className={className}
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="button-content-wrapper">
                    {Icon && <Icon className="button-icon" aria-hidden="true" />}
                    <span>{buttonName}</span>
                </span>
            </a>
        </div>
    )
}
