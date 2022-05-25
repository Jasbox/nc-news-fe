import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <section>
      <div>
        <h2>this page doesn't exit👀</h2>

        <Link to="/">back to home</Link>
      </div>
    </section>
  );
}
