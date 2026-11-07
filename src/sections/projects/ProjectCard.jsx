import { SubHeading } from "../components/Typo/SubHeading.jsx"
import { BodyText } from "../components/Typo/BodyText.jsx"
import { Tags } from "../components/Tags.jsx"
import { Button } from "../components/Button.jsx"

import repoImages from "../../repoImages.json"
import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";




export const ProjectCards = ({repos}) => {

    console.log("the Repos:", repos)
    // console.log("repoImages:", repoImages)

    //creating a variable to store the repos with a matching name to the names from the repoImages array.
    const filteredRepos = repos.filter((repo) => {
        return repoImages.find((img) => img.repoName === repo.name)
    });
    console.log("the filtered repos:",filteredRepos)


    return (
            <ul className="projects-list">
                {filteredRepos.map((repo) => {
                    const repoImage = repoImages.find((img) => img.repoName === repo.name)
                    return (
                        <li key={repo.id} className="projects-list-item">
                            <article>
                                <div className="project-img-wrapper">
                                    <img className="project-img" src={repoImage?.imageUrl} alt={repoImage?.prettyName} />
                                </div>
                                <div className="projects-list-item-info">
                                    <SubHeading text={repoImage?.prettyName} />
                                    <BodyText text={repo.description} />
                                    <Tags tags={repo.topics} />                                    
                                    <div className="btn-wrapper-projects">
                                        {repo.homepage && (
                                            <Button
                                                className="demo-button"
                                                buttonName="Live Demo"
                                                link={repo.homepage}
                                                icon={BsGlobe2}
                                            />
                                        )}

                                        <Button
                                            className="code-button"
                                            buttonName="View the Code"
                                            link={repo.html_url}
                                            icon={FaGithub}
                                        />
                                    </div>
                                </div>
                            </article>
                        </li>
                    );
                })}
            </ul>
    )
}