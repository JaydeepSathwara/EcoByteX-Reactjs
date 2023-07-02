import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import ArticleList from '../../Components/ArticleList/ArticleList';
import SearchBar from '../../Components/SearchBar/SearchBar.jsx';
import ImageSlider from '../../Components/ImageSlider/ImageSlider.jsx';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {articles} from '../../articles.js';

const Home = () => {

  const [article, setArticle] = useState([]);
  const [searchKey, setSearchKey] = useState('');

 

  return (
    <div>
      <Navbar />
      {/* search component */}
      <SearchBar />
      {/* category */}
      <ImageSlider />
      <ArticleList articles={articles} />
    </div>
  )
}

export default Home