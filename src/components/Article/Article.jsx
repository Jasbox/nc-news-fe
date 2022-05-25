import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticle, updateVote } from "../../api";
import Comments from "../Comment/Comments";
import { Link } from "react-router-dom";
import ErrorPage from "../Error/ErrorPage";

export default function Article({ showComments }) {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [vote, setVote] = useState(0) //
  const [disable, setDisable] = useState(false);
  const [error, setError] = useState(null);


 


  if (showComments === undefined) {
    showComments = false;
  }

  const [isCommentVisible, setIsCommentVisible] = useState(true);

  function getShowComments() {
    if (isCommentVisible === true) {
      return <Comments article_id={article_id} />;
    }
  }

  function updateVoteLocally(voteCrement) {
            setVote(voteCrement + vote)
  }

  useEffect(() => {
    fetchArticle(article_id).then((userVote) => {
      setArticle(userVote);
      setIsLoading(false);
      setVote(userVote.votes)
    }).catch(err => {
      setError(err)
      setIsLoading(false);
    });
    ;
  }, [article_id]);

  if (isLoading) return <p>loading article...</p>;
  if (error) return <ErrorPage />

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
        <button disabled={disable}
          onClick={() => {
            updateVote(article.article_id, 1);
            updateVoteLocally(1)
            setDisable(true)
        
          }}
        >
          👍🏼
        </button>{" "}
        <button disabled={disable}
          onClick={() => {
            updateVote(article.article_id, -1);
            updateVoteLocally(-1)
            setDisable(true)
            
          }}
        >
          👎🏼
        </button>
        <b>{vote} votes</b> | <b>💬{article.comment_count} comments</b>
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
