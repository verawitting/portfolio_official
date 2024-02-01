import { SubHeading } from "./Typo/SubHeading.jsx"
import { BodyText } from "./Typo/BodyText.jsx"
import { Tags } from "./Tags.jsx"
import { Button } from "./Button.jsx"

import repoImages from "../../repoImages.json"
import liveDemo from "/src/assets/button-icons/live-demo.svg"
import gitHub from "/src/assets/button-icons/github.svg"


export const ProjectCard = ({repos}) => {

    // console.log("the Repos:", repos)
    // console.log("repoImages:", repoImages)

    //creating a variable to store the repos with a matching name to the names from the repoImages array.
    const filteredRepos = repos.filter((repo) => {
        return repoImages.find((img) => img.repoName === repo.name)
    });
    // console.log("the filtered repos:",filteredRepos


    return (
        <div>
            <ul className="projects-list">
                {filteredRepos.map((repo) => {
                    const repoImage = repoImages.find((img) => img.repoName === repo.name)
                    return (
                        <li key={repo.id} className="projects-list-item">
                            <div className="project-img-wrapper">
                                <img className="project-img" src={repoImage?.imageUrl} alt={repoImage?.prettyName} />
                            </div>
                            <div className="projects-list-item-info">
                                <SubHeading text={repoImage?.prettyName} />
                                <BodyText text={repo.description} />
                                <Tags tags={repo.topics} />
                                <div className="btn-wrapper-projects">
                                    <Button className={`demo-button`} buttonName={`Live Demo`} link={repo.homepage} icon={liveDemo} iconAlt={`Web icon`} />
                                    <Button className={`code-button`} buttonName={`View the Code`}link={repo.html_url} icon={gitHub} iconAlt={`GitHub logo`} />
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}