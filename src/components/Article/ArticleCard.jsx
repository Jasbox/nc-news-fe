export default function ArticleCard({ article }) {
  const date = new Date(article.created_at);
  return (
    <section>
      <div className="article-list" key={article.article_id}>
        <h3>{article.title}</h3>
        <h5>
          {`by ${
            article.author
          } at ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
        </h5>
        <p>💬 {article.comment_count} comments</p>
        <p>
          <b>{article.votes} votes</b>
        </p>
      </div>
    </section>
  );
}
