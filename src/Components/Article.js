import React, { useState } from 'react';
import CFS1 from '../Assets/CFS_bg1.png';
import CFS2 from '../Assets/CFS_bg2.png';
import CFS3 from '../Assets/CFS_bg3.png';
import CFS4 from '../Assets/CFS_bg4.png';
import CFS5 from '../Assets/GNW_R.mp4';
import './ArticleStyle.scss';

const articlesPerPage = 4; // Number of articles per page

const Article = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Array of articles
  const articles = [
    {
      type: 'video',
      content: (
        <div className="div1">
          <video controls style={{ height: "64%" }}>
            <source src={CFS5} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h3>By Anthony Afriyie</h3>
          <h5>The need to support us</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aliquid?</p>
        </div>
      ),
    },
    {
      type: 'image',
      content: (
        <div className="div2">
          <img src={CFS2} alt="" />
          <h3>By Anthony Afriyie</h3>
          <h5>Lorem ipsum dolor sit amet.</h5>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, assumenda.</p>
        </div>
      ),
    },
    {
      type: 'image',
      content: (
        <div className="div3">
          <img src={CFS3} alt="" />
          <h3>By Anthony Afriyie</h3>
          <h5>The need to support us</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aliquid?</p>
        </div>
      ),
    },
    {
      type: 'image',
      content: (
        <div className="div4">
          <img src={CFS4} alt="" />
          <h3>By Anthony Afriyie</h3>
          <h5>The need to support us</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aliquid?</p>
        </div>
      ),
    },
    {
      type: 'image',
      content: (
        <div className="div5">
          <img src={CFS1} alt="" />
          <h3>By Anthony Afriyie</h3>
          <h5>The need to support us</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aliquid?</p>
        </div>
      ),
    },
  ];

  // Calculate the total number of pages
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // Get the articles for the current page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="article">
      <h1>News and Events</h1>
      <div className="container2">
        {/* Render the current articles */}
        {currentArticles.map((article, index) => (
          <div key={index}>{article.content}</div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={index + 1 === currentPage ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Article;
