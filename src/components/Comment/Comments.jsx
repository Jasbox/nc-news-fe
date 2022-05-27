import { useContext, useEffect, useState } from "react";
import { fetchComments, deleteComment } from "../../api";
import { UserContext } from "../User/UserContext";

import PostComment from "./PostComment";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const { users } = useContext(UserContext);
  const [postedComment, SetPostedComment] = useState(false);

  useEffect(() => {
    fetchComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);

  function checkAuthor(author, comment_id) {
    if (author === users) {
      return (
        <button
          onClick={() => {
            deleteComment(comment_id);
            setComments((comments) => {
              return comments.filter((comment) => {
                return comment.comment_id !== comment_id;
              });
            });
            alert("comment deleted");
          }}
        >
          delete
        </button>
      );
    }
  }

  function showPostedComment() {
    if (users === undefined) {
      return <p>only logged in users can comment 😊 </p>;
    } else if (postedComment) {
      return <PostComment article_id={article_id} setComments={setComments} />;
    }
  }

  return (
    <div>
      <button
        className="comment-button"
        onClick={() => {
          SetPostedComment(!postedComment);
        }}
      >
        add comment ...
      </button>
      {showPostedComment()}

      {comments.map((comment) => {
        const date = new Date(comment.created_at);
        return (
          <div className="comments" key={comment.comment_id}>
            {`by ${
              comment.author
            } at ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
            <p>{comment.body}</p>
            {checkAuthor(comment.author, comment.comment_id)}
          </div>
        );
      })}
    </div>
  );
}
