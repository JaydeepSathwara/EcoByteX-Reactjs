import React, { useState } from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar.jsx';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import ImageSlider from '../../Components/ImageSlider/ImageSlider.jsx';
import ArticleList from '../../Components/ArticleList/ArticleList.jsx';
import { articles } from '../../articles.js';

const Home = () => {
  const [article, setArticle] = useState(articles);
  const [searchKey, setSearchKey] = useState('');
  const categoryList = [...new Set(articles.map(article => article.category))];

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const allArticles = articles;
    const filteredArticles = allArticles.filter((article) =>
      article.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setArticle(filteredArticles);
  };

  const handleSearchKey = (value) => {
    setSearchKey(value);
  };

  return (
    <div>
      <Navbar />
      <SearchBar
        CategoryList={categoryList}
        value={searchKey}
        formSubmit={handleSearchBar}
        handleSearchKey={handleSearchKey}
        />
      {!searchKey && <ImageSlider />}
      <ArticleList articles={article} />
    </div>

  );
};

export default Home;