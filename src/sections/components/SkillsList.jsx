import { BodyText } from "./Typo/BodyText"

export const SkillsList = ({ list }) => {

    return (
        <div className="skills-list">
            {list.map((item) => {
                return(
                    <div key={item}>
                        <BodyText text={item} />
                    </div>
                )
            })}
        </div>
    )
}