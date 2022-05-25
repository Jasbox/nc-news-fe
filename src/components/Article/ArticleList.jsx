import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../../api";
import ArticleCard from "./ArticleCard";
import SortArticle from "./SortArticle";

export default function ArticleList() {
    const [articles, setArticles] = useState([])
    const {topic} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [sortType, setSortType] =useState("created_at")
    const [sortOrder, setSortOrder] = useState("desc")

    useEffect(() => {
        fetchArticles(topic, sortType, sortOrder).then((allArticles) => {
            setArticles(allArticles)
            setIsLoading(false)
        })
    }, [topic, sortType, sortOrder])

    if (isLoading) return <p>loading articles...</p>

    return (
        <section>
            <SortArticle 
                        sortType={sortType}
                        sortOrder={sortOrder}
                        setSortType={setSortType}
                        setSortOrder={setSortOrder}
                />
            {articles.map(article => {
               return (
                   <ArticleCard article={article} key={article.article_id} />
               )
               
            })}
        </section>
    )
}