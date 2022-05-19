
import { useContext, useEffect, useState } from "react";
import { fetchComments } from "../../api";
import { UserContext } from "../User/UserContext";
import { deleteComment } from "../../api";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const {users} = useContext(UserContext)

  useEffect(() => {
    fetchComments(article_id).then((comments) => {
      setComments(comments);
    });
  }, [article_id]);

  function checkAuthor(author, comment_id) {
    if (author === users) {
        return(
            <button onClick={()=> {
                deleteComment(comment_id)
                alert("comment deleted")
            }}>Delete</button>
        )
    }
  }

  return (
    <div>
      {comments.map((comment) => {
          const date = new Date(comment.created_at);
        return (
          <div className="comments" key={comment.comment_id}>
            {`by ${comment.author} at ${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
            <p>{comment.body}</p>
            {checkAuthor(comment.author, comment.comment_id)}
          </div>
        );
      })}
    </div>
  );
}