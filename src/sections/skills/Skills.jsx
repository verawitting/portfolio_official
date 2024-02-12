import { MainHeading } from "../components/Typo/MainHeading.jsx"
import { SubHeading } from "../components/Typo/SubHeading.jsx"
import { SkillsList } from "../components/SkillsList.jsx"

import "./Skills.css"


export const Skills = () => {

    const CodeList = ["HTML5", "CSS3", "JavaScript ES6", "React", "React Hooks", "React Router", "Mongoose", "Tailwind", "Styled Components", "GitHub", "Node.js"]
    const ToolboxList = ["Mongo DB", "Mongo Atlas", "", "Postman", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Adobe XD", "Adobe After Effects", "Figma", "Slack", "Blender"]
    const UpcomingList = ["TypeScript", "Motion Graphics"]
    const MoreList = ["Branding", "Typography", "Graphic Design", "Agile Methodology"]

    return(
        <section className="skills-section">
            <div className="skills-wrapper">
                <MainHeading className={`light-h2`} text={`Skills`}/>
                <div className="all-lists-wrapper">
                    <div className="single-list-wrapper">
                        <SubHeading className={`sub-heading-skills`} text={`Code`} />
                        <SkillsList list={CodeList} />
                    </div>
                    <div className="single-list-wrapper">
                        <SubHeading className={`sub-heading-skills`} text={`Toolbox`} />
                        <SkillsList list={ToolboxList}/>
                    </div>
                    <div className="single-list-wrapper">
                        <SubHeading className={`sub-heading-skills`} text={`Upcoming`} />
                        <SkillsList list={UpcomingList}/>
                    </div>
                    <div className="single-list-wrapper">
                        <SubHeading className={`sub-heading-skills`} text={`More`} />
                        <SkillsList list={MoreList}/>
                    </div>
                </div>
            </div>
        </section>
    )
}