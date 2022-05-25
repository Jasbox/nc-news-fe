import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  const date = new Date(article.created_at);
  return (
    <section>
      <div className="article-list" key={article.article_id}>
          <Link to={`/articles/${article.article_id}`} style={{textDecoration: "none"}}>
        <h3>{article.title}</h3>
          </Link>
        <h5>
          {`by ${
            article.author
          } at ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
        </h5>
        <p>
          <b>{article.votes} votes</b>
        </p>
        <p>💬 <b>{article.comment_count}</b> comments</p>
      </div>
    </section>
  );
}
