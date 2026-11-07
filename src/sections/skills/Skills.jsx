import { SectionHeading } from "../components/Typo/SectionHeading.jsx"
import { SubHeading } from "../components/Typo/SubHeading.jsx"
import { SkillsList } from "../components/SkillsList.jsx"

import "./Skills.css"


export const Skills = () => {

    const CodeList = [
        "Java",
        "Spring Boot",
        "JavaScript ES6+",
        "TypeScript",
        "React",
        "React Hooks",
        "React Router",
        "Node.js",
        "REST APIs",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Styled Components"
    ]

    const ToolboxList = [
        "Git",
        "GitHub",
        "Maven",
        "IntelliJ IDEA",
        "VS Code",
        "Postman",
        "Swagger / OpenAPI",
        "SQL",
        "MongoDB",
        "MongoDB Atlas",
        "H2",
        "JUnit",
        "Mockito",
        "Figma",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe InDesign",
        "Adobe XD",
        "Adobe After Effects",
        "Blender",
        "Slack"
    ]

    const MoreList = [
        "REST API Development",
        "Object-Oriented Programming",
        "Debugging & Testing",
        "Agile Methodology",
        "UI/UX Design",
        "Responsive Design",
        "Accessibility",
        "Graphic Design",
        "Branding",
        "Typography",
        "Motion Graphics"
    ]

    return(
        <section className="skills-section" id="skills">
            <div className="skills-wrapper">
                <SectionHeading text={`Skills`}/>
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
                        <SubHeading className={`sub-heading-skills`} text={`More`} />
                        <SkillsList list={MoreList}/>
                    </div>
                </div>
            </div>
        </section>
    )
}