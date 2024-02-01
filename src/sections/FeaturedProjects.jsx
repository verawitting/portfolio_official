import { useState, useEffect } from "react"

import { MainHeading } from "./components/Typo/MainHeading.jsx"
import { ProjectCard } from "./components/ProjectCard.jsx"

import "./FeaturedProjects.css"

export const FeaturedProjects = () => {

    const [repos, setRepos] = useState([])

    const REPOSAPI = "https://api.github.com/users/verawitting/repos"

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(REPOSAPI)
                if (!response.ok) {
                    throw new Error("Network response was not ok" + response.statusText)
                }
                const data = await response.json()
                setRepos(data);
            } catch (error) {
                console.error(
                    "There has been a problem with your fetch operation:", error
                )
            }
        }
        fetchRepos()
    }, [])



    return (
        <section className="featuredprojects-section">
            <div className="featuredprojects-wrapper">
                <div className="headings-featured-projects">
                    <MainHeading className={`dark-h2`} text={`Featured Projects`}/>
                </div>
                <ProjectCard repos={repos}/>
            </div>
        </section>
    )
}