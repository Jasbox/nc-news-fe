
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Article from './components/Article/Article';
import ArticleList from './components/Article/ArticleList';
import Header from './components/Header/Header';
import ToggleUser from './components/User/ToggleUser';
import { UserContext } from './components/User/UserContext';

function App() {

  const [users, setUsers] = useState("happyamy2016")

  return (
    <UserContext.Provider value={{users, setUsers}}>

    <div className="App">
    <Header />
    <ToggleUser />

    <Routes>
      <Route path='/' element={<ArticleList />} />
      <Route path='/topics' element={<ArticleList />} />
      <Route path='/topics/:topic' element={<ArticleList />} />
      <Route path='/articles/:article_id' element={<Article />} />
      <Route path='/articles/:article_id/comments' element={<Article showComments={true} />}
          />
    </Routes>
    
    </div>
          </UserContext.Provider>
  );
}

export default App;
