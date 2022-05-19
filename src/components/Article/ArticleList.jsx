import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../../api";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
    const [articles, setArticles] = useState([])
    const {topic} = useParams()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchArticles(topic).then((allArticles) => {
            setArticles(allArticles)
            setIsLoading(false)
        })
    }, [topic])

    if (isLoading) return <p>loading articles...</p>

    return (
        <section>
            {articles.map(article => {
               return (
                   <ArticleCard article={article} key={article.article_id} />
               )
               
            })}
        </section>
    )
}