'use client';

import React, { useState } from 'react';

interface Article {
  image: string;
  title: string;
  date: string;
}

const YouMayLike: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Data halaman 1
  const page1Articles: Article[] = [
    {
      image: '/news/you1.png',
      title: 'Normal Blood Sugar: Why It Matters for Your Health',
      date: 'Yava • 31 October 2024',
    },
    {
      image: '/news/you2.png',
      title: 'High-Fiber Healthy Snacks to Support Digestive Health',
      date: 'Yava • 31 October 2024',
    },
    {
      image: '/news/you3.png',
      title: 'How to Choose the Best Sweetener for Diabetic Patients',
      date: 'Yava • 31 October 2024',
    },
    {
      image: '/news/you4.png',
      title: 'The Rise of Plant-Based Sweeteners in Modern Cuisine',
      date: 'Yava • 29 October 2024',
    },
    {
      image: '/news/you5.png',
      title: 'Why Natural Sweeteners Are Gaining Popularity',
      date: 'Yava • 28 October 2024',
    },
    {
      image: '/news/you6.png',
      title: 'Understanding Glycemic Index and Its Impact on Diet',
      date: 'Yava • 27 October 2024',
    },
    {
      image: '/news/you7.png',
      title: 'Balanced Diet for Optimal Health',
      date: 'Yava • 26 October 2024',
    },
    {
      image: '/news/you8.png',
      title: 'The Benefits of Regular Exercise',
      date: 'Yava • 25 October 2024',
    },
  ];

  // Data halaman 2
  const page2Articles: Article[] = [
    {
      image: '/news/you9.png',
      title: 'Positive Thinking for a Healthier Heart!',
      date: 'Yava • 24 October 2024',
    },
    {
      image: '/news/you10.png',
      title: 'Low-Glycemic Diet: The Secret to a Healthy Weight',
      date: 'Yava • 23 October 2024',
    },
    {
      image: '/news/you11.png',
      title: 'From Plate to Podium: Boost Your Sports Performance with Low Glycemic Foods',
      date: 'Yava • 22 October 2024',
    },
    {
      image: '/news/you12.png',
      title: 'Often Overlooked: 5 Benefits of Eating Nuts Every Day!',
      date: 'Yava • 21 October 2024',
    },
    {
      image: '/news/you13.png',
      title: 'Take a Walk After Meals: A Simple Trick to Control Blood Sugar',
      date: 'Yava • 20 October 2024',
    },
    {
      image: '/news/you14.png',
      title: 'Smart Healthy Living for a Busy Lifestyle',
      date: 'Yava • 19 October 2024',
    },
    {
      image: '/news/you15.png',
      title: 'Smooth Fasting & Stable Blood Sugar: Follow This Eating Pattern for Suhoor & Iftar!',
      date: 'Yava • 18 October 2024',
    },
    {
      image: '/news/you16.png',
      title: 'Stable Blood Sugar for Health & Energy While Breastfeeding',
      date: 'Yava • 17 October 2024',
    },
  ];

  const articlesToShow = currentPage === 1 ? page1Articles : page2Articles;

  return (
    <div className="you-may-like-container">
      <div className="header-section">
        <h2>YOU MAY LIKE</h2>
      </div>

      <div className="articles-grid">
        {articlesToShow.map((article, index) => (
          <div key={index} className="article-card">
            <img src={article.image} alt={article.title} />
            <div className="article-content">
              <h3>{article.title}</h3>
              <p>{article.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage(1)}
          className={currentPage === 1 ? 'active' : ''}
        >
          1
        </button>
        <button
          onClick={() => setCurrentPage(2)}
          className={currentPage === 2 ? 'active' : ''}
        >
          2
        </button>
      </div>

      {/* CSS Inline dengan styled-jsx */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins :wght@500&display=swap');

        .you-may-like-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .header-section {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 20px;
        }

        .header-section h2 {
          font-size: 20px;
          font-weight: bold;
          color: #000;
          text-align: left;
          font-family: 'Poppins', sans-serif;
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          justify-items: center;
        }

        .article-card {
          width: 100%;
          background-color: transparent;
          border: none;
          position: relative;
          cursor: pointer;
          overflow: hidden;
          border-radius: 10px;
        }

        .article-card img {
          width: 100%;
          height: 120px;
          object-fit: cover;
          transition: transform 0.3s ease, filter 0.3s ease;
          backface-visibility: hidden;
          border-radius: 10px;
        }

        .article-card:hover img {
          transform: scale(1.1);
          filter: brightness(1.1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .article-content {
          padding: 12px;
          background-color: #fff;
          border-radius: 0 0 10px 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .article-content h3 {
          font-size: 14px;
          margin-bottom: 6px;
          font-weight: normal;
          color: #000;
          font-family: 'Poppins', sans-serif;
          white-space: normal;
          word-wrap: break-word;
        }

        .article-content p {
          color: #666;
          font-size: 12px;
          margin: 0;
          font-family: 'Poppins', sans-serif;
        }

        .pagination {
          margin-top: 30px;
          display: flex;
          justify-content: center;
        }

        .pagination button {
          background: none;
          border: none;
          font-size: 18px;
          margin: 0 10px;
          cursor: pointer;
          color: #999;
          font-family: 'Poppins', sans-serif;
        }

        .pagination button.active {
          color: #e74c3c;
          font-weight: bold;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .header-section h2 {
            font-size: 18px;
          }

          .article-card img {
            height: 100px;
          }

          .article-content h3 {
            font-size: 13px;
          }

          .article-content p {
            font-size: 11px;
          }
        }

        @media (max-width: 480px) {
          .header-section h2 {
            font-size: 16px;
          }

          .article-card img {
            height: 80px;
          }

          .article-content h3 {
            font-size: 12px;
          }

          .article-content p {
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default YouMayLike;