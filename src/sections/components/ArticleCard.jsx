import { SubHeading } from "./Typo/SubHeading.jsx"
import { BodyText } from "./Typo/BodyText.jsx"
import { Button } from "./Button.jsx"
import articles from "./Data/articles.json"

import doc from "/src/assets/button-icons/doc.svg"

export const ArticleCard = ( ) => {

    console.log("These are the articles:",articles)
    console.log("TESTING ARRAY:",articles[0].name)

    return (
        <div className="article-cards">
                {articles.map((article) => {
                 return (
                    <div className="single-article" key={article.id}>
                        <img className="article-img" src={article.image} alt={article.imageAlt} />
                        <p className="article-date">{article.date}</p>
                        <SubHeading className={`dark-h3`} text={article.name}/>
                        <BodyText text={article.text}/>
                        <Button className={`article-button`} buttonName={`Read Article`} link={article.link} icon={doc} iconAlt={`A document icon`}/>
                    </div>
                    )
                })}
        </div>
    )
}
