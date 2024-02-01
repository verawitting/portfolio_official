export const Tags = ({ tags }) => {

    console.log("tags", tags)

    return(
        <div className="tag">
            <ul>
                {tags.map((tag) => {
                    return (
                        <li className="tag" key={tag}> 
                            {tag}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}