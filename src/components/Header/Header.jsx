import { Link } from "react-router-dom";

import ToggleUser from "../User/ToggleUser";
import Topic from "../Topic/Topic";

export default function Header() {
  return (
    <header className="Header">
      <div className="ToggleUser">
        <ToggleUser />
      </div>
      <img src={"/logo192.png"} alt="react logo" width="100px" />

      <Link to="/" style={{ textDecoration: "none" }}>
        <h1>NC NEWS</h1>
      </Link>
      <Topic />
    </header>
  );
}
