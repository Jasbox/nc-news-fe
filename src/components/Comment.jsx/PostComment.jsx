import { useState, useContext } from "react";
import { postComment } from "../../api";
import { UserContext } from "../User/UserContext";

export default function PostComment({ article_id, setComments }) {
  const [userComment, setUserComment] = useState();
  const { users } = useContext(UserContext);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setUserComment("");
        postComment(article_id, userComment, users).then(comment => {
            return setComments(currComments => {
                return [
                    comment,
                    ...currComments
                ]
            })
        });
        alert("comment posted!");
       
      }}
    >
      <label>
        Write comment:
        <input
          type="text"
          onChange={(event) => {
            setUserComment(event.target.value);
          }}
        />
      </label>
      <button>Post</button>
    </form>
  );
}