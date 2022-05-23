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
        if (userComment === "") {
          return "need comment";
        } else {
          setUserComment("");
          postComment(article_id, userComment, users).then((comment) => {
            return setComments((currComments) => {
              return [comment, ...currComments];
            });
          });
        }
      }}
    >
      <label>
        have your say here:
        <input
          type="text"
          onChange={(event) => {
            setUserComment(event.target.value);
          }}
        />
      </label>
      <button>post</button>
    </form>
  );
}
