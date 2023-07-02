import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { articles } from '../../articles';
import { useParams } from 'react-router-dom';

const ArticlePage = () => {
  const { id } = useParams();
const article = articles.find(article => article.id === parseInt(id));
  console.log(article);
  return (
    <div>
      <Navbar />
      <img src={`/assets/images/${article.coverimg}`} alt="cover Image" className='article-author-img' />
      {article.title}

    </div>
  )
}

export default ArticlePage