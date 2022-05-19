
import { Route, Routes } from 'react-router-dom';
import './App.css';
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
    </Routes>
    
    </div>
  );
}

export default App;
