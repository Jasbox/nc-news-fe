import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-example-seminar-3-7.herokuapp.com/api",
});

export function fetchArticles(topic) {
  return newsApi
    .get(`/articles`, { params: { topic: topic } })
    .then(({ data }) => {
      return data.articles;
    });
}

export function fetchTopics() {
  return newsApi.get(`/topics`).then(({ data }) => {
    return data.topics;
  });
}

export function fetchArticle(article_id) {
  return newsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
}


export function fetchComments(article_id) {
    return newsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
      return data.comments;
    });
  }

export function deleteComment(comment_id) {
    return newsApi.delete(`/comments/${comment_id}`).then(()=> {})
}

export function postComment(article_id, body, username) {
    return newsApi.post(`/articles/${article_id}/comments`, {
        body: body,
        username: username,
    }).then(({data}) => {
        return data.comment
    })
}