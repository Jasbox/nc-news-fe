import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle, updateVote } from "../../api";
import Comments from "../Comment/Comments";
import { Link } from "react-router-dom";

export default function Article({ showComments }) {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  if (showComments === undefined) {
    showComments = false;
  }

  const [isCommentVisible, setIsCommentVisible] = useState(true);

  function getShowComments() {
    if (isCommentVisible === true) {
      return <Comments article_id={article_id} />;
    }
  }

  useEffect(() => {
    fetchArticle(article_id).then((userVote) => {
      setArticle(userVote);
      setIsLoading(false);
    });
  }, [article_id, article]);

  if (isLoading) return <p>loading article...</p>;
  const date = new Date(article.created_at);

  return (
    <div className="article-page-body">
      <h2>{article.title}</h2>
      <div>
        <b>by: </b>
        {article.author} | <b>in: </b>
        {article.topic} | <b>at: </b>
        {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
      </div>
      <p>{article.body}</p>
      <div>
        <button
          onClick={() => {
            updateVote(article.article_id, 1);
          }}
        >
          👍🏼
        </button>{" "}
        <button
          onClick={() => {
            updateVote(article.article_id, -1);
          }}
        >
          👎🏼
        </button>
        <b>{article.votes} votes</b> | <b>💬{article.comment_count} comments</b>
      </div>

      <button
        onClick={() => {
          setIsCommentVisible(!isCommentVisible);
        }}
      >
        Comments...
        <Link to={`/articles/${article.article_id}/comments`}></Link>
      </button>
      {getShowComments()}
    </div>
  );
}
