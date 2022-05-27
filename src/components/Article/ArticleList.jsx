import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../../api";
import ErrorPage from "../Error/ErrorPage";
import ArticleCard from "./ArticleCard";
import SortArticle from "./SortArticle";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [sortType, setSortType] = useState("created_at");
  const [sortOrder, setSortOrder] = useState("desc");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticles(topic, sortType, sortOrder)
      .then((allArticles) => {
        setArticles(allArticles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError({ err });
        setIsLoading(false);
      });
  }, [topic, sortType, sortOrder]);

  if (isLoading) return <p>loading articles...</p>;
  if (error) return <ErrorPage />;

  return (
    <section>
      <div className="sorting">
        <SortArticle
          sortType={sortType}
          sortOrder={sortOrder}
          setSortType={setSortType}
          setSortOrder={setSortOrder}
        />
      </div>
      {articles.map((article) => {
        return <ArticleCard article={article} key={article.article_id} />;
      })}
    </section>
  );
}
