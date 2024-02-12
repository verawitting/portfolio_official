export const MainHeading = ({ text, className }) => {
    const formattedText = text.toUpperCase()
    return (
        <h2 className={`${className}`}>{formattedText}</h2>
    )
}