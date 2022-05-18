import { useEffect, useState } from "react";
import { fetchArticles } from "../../api";

export default function ArticleList() {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetchArticles().then((allArticles) => {
            setArticles(allArticles)
        })
    }, [])

    

    return (
        <section>
            {articles.map(article => {
                 const date = new Date(article.created_at)
                return <div className="article-list" key={article.article_id}>
                   <h3>{article.title}</h3>
                   <h5>{`by ${article.author} at ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`} </h5>
            <p>💬 {article.comment_count} comments</p>
            <p><b>{article.votes} votes</b></p> 
                </div>
            })}
        </section>
    )
}