export const SubHeading = ({ text, className }) => {
    const formattedText = text.toUpperCase()
    
    return (
        <h3 className={className}>{formattedText}</h3>
    )
}