export const MainHeading = ({ text, className }) => {
    const formattedText = text.toUpperCase()
    return (
        <h1 className={className}>{formattedText}</h1>
    )
}