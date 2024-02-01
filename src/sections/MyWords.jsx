import { MainHeading } from "./components/Typo/MainHeading.jsx"
import { ArticleCard } from "./components/ArticleCard.jsx"

import wavyLine from "/src/assets/elements/wavyline-divider.svg"

import "./MyWords.css"

export const MyWords = () => {
    return (
        <section className="mywords-section">
            <div className="wavy-line-wrapper">
                <img className="wavy-line" src={wavyLine} alt="a wavy line" />
            </div>
            <div className="mywords-section-content">
                <div className="mywords-wrapper">
                    <MainHeading className={`mywords-h2`} text={`My Words`}/>
                    <ArticleCard />
                </div>
            </div>
        </section>
    )
}