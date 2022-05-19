import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle } from "../../api";

export default function Article() {
    const {article_id} = useParams()
    const [article ,setArticle] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        fetchArticle(article_id).then(articles => {
            setArticle(articles)
            setIsLoading(false)
        })
    }, [article_id])

    if (isLoading) return <p>loading article...</p>
    const date = new Date(article.created_at)

    return (
        <div className="article-page-body">
            <h2>{article.title}</h2>
            <div>
                <b>by: </b>{article.author} | <b>in: </b>{article.topic} | <b>at: </b>{`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`} 
            </div>
            <p>{article.body}</p>
            <div>
                <b>{article.votes} votes</b> | <b>💬{article.comment_count} comments</b>
            </div>

        </div>
    )
}