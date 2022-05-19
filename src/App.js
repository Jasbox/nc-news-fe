
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Article from './components/Article/Article';
import ArticleList from './components/Article/ArticleList';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path='/' element={<ArticleList />} />
      <Route path='/topics' element={<ArticleList />} />
      <Route path='/topics/:topic' element={<ArticleList />} />
      <Route path='/articles/:article_id' element={<Article />} />
    </Routes>
    
    </div>
  );
}

export default App;
