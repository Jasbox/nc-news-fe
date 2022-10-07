import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopics } from "../../api";

export default function Topic() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then((allTopics) => {
      setTopics(allTopics);
    });
  }, []);

  return (
    <section>
      <ul className="section__topic">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <li>news</li>
        </Link>

        {topics.map((topic) => {
          return (
            <div key={topic.slug}>
              <Link
                to={`/topics/${topic.slug}`}
                style={{ textDecoration: "none" }}
              >
                <li>{topic.slug}</li>
              </Link>
            </div>
          );
        })}
      </ul>
    </section>
  );
}
