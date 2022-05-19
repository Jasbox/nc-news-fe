
import { useEffect, useState } from "react";
import { fetchComments } from "../../api";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);

  return (
    <div>
      {comments.map((comment) => {
          const date = new Date(comment.created_at);
        return (
          <div className="comments" key={comment.comment_id}>
            {`by ${comment.author} at ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
            <p>{comment.body}</p>
          </div>
        );
      })}
    </div>
  );
}