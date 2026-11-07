import { useState, useEffect } from "react"

import { SectionHeading } from "../components/Typo/SectionHeading.jsx"
import { ProjectCards } from "./ProjectCard.jsx"

import "./FeaturedProjects.css"

export const FeaturedProjects = () => {

    const [repos, setRepos] = useState([])

    const REPOSAPI = "https://api.github.com/users/verawitting/repos?per_page=100&sort=updated"

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
        <section className="featuredprojects-section" id="projects">
            <div className="featuredprojects-wrapper">
                <div className="headings-featured-projects">
                    <SectionHeading className={`dark-h2`} text={`Featured Projects`}/>
                </div>
                <ProjectCards repos={repos}/>
            </div>
        </section>
    )
}