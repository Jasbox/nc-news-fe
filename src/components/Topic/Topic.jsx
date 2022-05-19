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
      <div>
        {topics.map((topic) => {
          return (
            <div key={topic.slug}>
              <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}