import { Link } from "react-router-dom";
import {FaRegCommentDots} from 'react-icons/fa'

export default function ArticleCard({ article }) {
  const date = new Date(article.created_at);
  return (
    <section>
      <div className="article_card" key={article.article_id}>
        <Link
          to={`/articles/${article.article_id}`}
          style={{ textDecoration: "none" }}
        >
          <h3>{article.title}</h3>
        </Link>
        <h5>
          {`by ${
            article.author
          } at ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
        </h5>
        <p className="article_card_vote">
          <b>{article.votes}</b> votes <FaRegCommentDots/> <b>{article.comment_count}</b>{" "}
          comments
        </p>
      </div>
    </section>
  );
}
