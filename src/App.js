import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Article from "./components/Article/Article";
import ArticleList from "./components/Article/ArticleList";
import ErrorPage from "./components/Error/ErrorPage";
import Header from "./components/Header/Header";

import { UserContext } from "./components/User/UserContext";

function App() {
  const [users, setUsers] = useState("happyamy2016");

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/topics" element={<ArticleList />} />
          <Route path="/topics/:topic" element={<ArticleList />} />
          <Route path="/articles/:article_id" element={<Article />} />
          <Route path="/articles/:article_id/comments" element={<Article />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
