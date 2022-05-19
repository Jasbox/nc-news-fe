import { useState, useContext } from "react";
import { UserContext } from "./UserContext";

export default function ToggleUser() {
  const { users, setUsers } = useContext(UserContext);
  
  const [user, setUser] = useState("");

  if (users === undefined || users === "") {
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setUsers(user);
          setUser("");
        }}
      >
        <label>
          Log in:
          <input
            onChange={(event) => {
              
              setUser(event.target.value);
            }}
          />
          <button type="submit"> Submit </button>
        </label>
      </form>
    );
  } else {
    return (
      <div>
        Logged in as: <b>{users}</b>
        <button
          onClick={() => {
            setUsers();
          }}
        >
          Log out
        </button>
      </div>
    );
  }
}