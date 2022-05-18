import axios from "axios";

const newsApi = axios.create( {
    baseURL:"https://nc-news-example-seminar-3-7.herokuapp.com/api"
})

export function fetchArticles () {
    return newsApi.get(`/articles`).then(({data})=> {
        return data.articles
    })
}