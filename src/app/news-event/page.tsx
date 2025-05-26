"use client";
import React, { useState } from "react";
import Image from "next/image";
import Breadcrumb from "../components1/Breadcrumb"; 
import { useRouter } from "next/navigation";

type Article = {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  content: string;
};

const NewsEventPage = () => {
  const router = useRouter();
  const [activeCategory] = useState("All Products");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [youMayLikePage, setYouMayLikePage] = useState(1);

  const newsItems: Article[] = [
    {
      id: 1,
      title: "Smooth Fasting & Stable Blood Sugar: Follow This Eating Pattern for Suhoor & Iftar!",
      date: "Yava • 25 March 2025",
      image: "/news/news1.png",
      description: "A detailed guide on maintaining stable blood sugar during Ramadan.",
      content: `Fasting during Ramadan offers many health benefits...`,
    },
    {
      id: 2,
      title: "Stable Blood Sugar for Health & Energy While Breastfeeding",
      date: "Yava • 17 January 2025",
      image: "/news/news2.png",
      description: "Tips for breastfeeding mothers to maintain stable blood sugar.",
      content: `Breastfeeding mothers need to maintain stable blood sugar levels...`,
    },
    {
      id: 3,
      title: "The World’s Best Diet: Low Glycemic Index for Gut Health",
      date: "Yava • 06 December 2024",
      image: "/news/news3.png",
      description: "Discover the benefits of a low glycemic index diet for gut health.",
      content: `A low glycemic index (GI) diet can improve gut health...`,
    },
    {
      id: 4,
      title: "Positive Thinking for a Healthier Heart!",
      date: "Yava • 12 November 2024",
      image: "/news/news4.png",
      description: "How positive thinking can improve heart health.",
      content: `Positive thinking has been linked to better heart health...`,
    },
  ];

  const itemsPerPage = 4;
  const articlesToShow = newsItems.slice(1); 
  const totalPages = Math.ceil(articlesToShow.length / itemsPerPage);
  const startIndex = carouselIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = articlesToShow.slice(startIndex, endIndex);

  // You May Like Articles
  const page1Articles = [
    { image: "/news/you1.png", title: "Normal Blood Sugar: Why It Matters for Your Health", date: "Yava • 31 October 2024" },
    { image: "/news/you2.png", title: "High-Fiber Healthy Snacks to Support Digestive Health", date: "Yava • 31 October 2024" },
    { image: "/news/you3.png", title: "How to Choose the Best Sweetener for Diabetic Patients", date: "Yava • 31 October 2024" },
    { image: "/news/you4.png", title: "The Rise of Plant-Based Sweeteners in Modern Cuisine", date: "Yava • 29 October 2024" },
    { image: "/news/you5.png", title: "Why Natural Sweeteners Are Gaining Popularity", date: "Yava • 28 October 2024" },
    { image: "/news/you6.png", title: "Understanding Glycemic Index and Its Impact on Diet", date: "Yava • 27 October 2024" },
    { image: "/news/you7.png", title: "Balanced Diet for Optimal Health", date: "Yava • 26 October 2024" },
    { image: "/news/you8.png", title: "The Benefits of Regular Exercise", date: "Yava • 25 October 2024" },
  ];
  const page2Articles = [
    { image: "/news/you9.png", title: "Positive Thinking for a Healthier Heart!", date: "Yava • 24 October 2024" },
    { image: "/news/you10.png", title: "Low-Glycemic Diet: The Secret to a Healthy Weight", date: "Yava • 23 October 2024" },
    { image: "/news/you11.png", title: "From Plate to Podium: Boost Your Sports Performance with Low Glycemic Foods", date: "Yava • 22 October 2024" },
    { image: "/news/you12.png", title: "Often Overlooked: 5 Benefits of Eating Nuts Every Day!", date: "Yava • 21 October 2024" },
    { image: "/news/you13.png", title: "Take a Walk After Meals: A Simple Trick to Control Blood Sugar", date: "Yava • 20 October 2024" },
    { image: "/news/you14.png", title: "Smart Healthy Living for a Busy Lifestyle", date: "Yava • 19 October 2024" },
    { image: "/news/you15.png", title: "Smooth Fasting & Stable Blood Sugar: Follow This Eating Pattern for Suhoor & Iftar!", date: "Yava • 18 October 2024" },
    { image: "/news/you16.png", title: "Stable Blood Sugar for Health & Energy While Breastfeeding", date: "Yava • 17 October 2024" },
  ];
  const youMayLikeArticles = youMayLikePage === 1 ? page1Articles : page2Articles;

  return (
    <div
      style={{
        fontFamily: `'Poppins', sans-serif`,
        padding: '2rem',
        backgroundColor: '#fff',
        marginTop: '80px',
        minHeight: '100vh',
      }}
    >
      {/* Content Container */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Breadcrumb */}
        <Breadcrumb />
        {/* Title */}
        <div style={{
          textAlign: 'center',
          marginBottom: '2rem',
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#4B1A1B',
          fontFamily: `'WildWords Lower Bold', cursive, sans-serif`,
        }}>
          NEWS & EVENT
          <br />
          <span style={{
            background: 'linear-gradient(to right, #FEB519, #FE8301, #F31212)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
            fontSize: '2rem',
            fontWeight: 'bold',
          }}>FIND YOUR INTEREST</span>
        </div>
        {/* --- Search Bar --- */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
          <div style={{ position: 'relative', width: '80%', maxWidth: '600px' }}>
            <input
              type="text"
              placeholder="Find your perfect crunch..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                height: '40px',
                padding: '0 40px 0 10px',
                border: '1px solid #000',
                borderRadius: '20px',
                outline: 'none',
                fontSize: '1rem',
                fontFamily: `'Poppins', sans-serif`,
                color: '#000',
              }}
            />
            <button
              type="button"
              style={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <Image src="/icons/src.png" alt="Search" width={35} height={35} style={{ objectFit: 'contain' }} />
            </button>
          </div>
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontWeight: '600', color: '#333' }}>HIGHLIGHT</h2>
          <div className="highlight-container">
            {/* Ukuran news1 - dikurangi ukuran gambar */}
            <div
              key={newsItems[0]?.id}
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                cursor: 'pointer',
                flex: '1', // diubah dari 1.5 ke 1
              }}
              onClick={() => router.push(`/news?id=${newsItems[0].id}`)}
            >
              <Image
                src={newsItems[0]?.image || '/placeholder-image.jpg'}
                alt={newsItems[0]?.title || 'Placeholder'}
                width={600}
                height={400}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  transition: 'transform 0.3s ease-in-out',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{ padding: '0.8rem 0.5rem' }}>
                <h3 style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#333',
                  marginBottom: '0.3rem',
                  fontFamily: `'Poppins', sans-serif`,
                }}>{newsItems[0]?.title || 'No Title'}</h3>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#B0B0B0',
                  fontFamily: `'Poppins', sans-serif`,
                }}>
                  <span>{newsItems[0]?.date || 'No Date'}</span>
                </div>
              </div>
            </div>
            {/* Ukuran news2, news3, news4 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: '1' }}>
              {newsItems.slice(1).map((item) => (
                <div
                  key={item.id}
                  style={{
                    borderRadius: '10px',
                    overflow: 'hidden',
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center',
                  }}
                >
                  <div style={{ flex: '0 0 100px', height: '70px', overflow: 'hidden', borderRadius: '10px' }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={70}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '10px',
                        transition: 'transform 0.3s ease-in-out',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </div>
                  <div style={{ flex: 1, padding: '0.6rem 0.5rem' }}>
                    <h3 style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: '#333',
                      marginBottom: '0.3rem',
                      fontFamily: `'Poppins', sans-serif`,
                    }}>{item.title}</h3>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#B0B0B0',
                      fontFamily: `'Poppins', sans-serif`,
                    }}>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* --- You May Like Section --- */}
        <div className="you-may-like-section" style={{ minHeight: '100vh', overflowX: 'hidden' }}>
          <div className="header-section">
            <h2>YOU MAY LIKE</h2>
          </div>
          <div className="articles-grid">
            {youMayLikeArticles.map((article, index) => (
              <div key={index} className="article-card">
                <div className="card-container">
                  <img src={article.image} alt={article.title} />
                </div>
                <div className="article-content">
                  <h3>{article.title}</h3>
                  <p>{article.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button
              onClick={() => setYouMayLikePage(1)}
              style={{
                border: 'none',
                background: youMayLikePage === 1 ? 'rgba(255, 0, 0, 0.2)' : 'transparent',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                color: youMayLikePage === 1 ? 'red' : '#666',
                marginRight: '10px',
                cursor: 'pointer',
              }}
            >
              1
            </button>
            <button
              onClick={() => setYouMayLikePage(2)}
              style={{
                border: 'none',
                background: youMayLikePage === 2 ? 'rgba(255, 0, 0, 0.2)' : 'transparent',
                borderRadius: '50%',
                width: '30px',
                height: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                color: youMayLikePage === 2 ? 'red' : '#666',
                marginLeft: '10px',
                cursor: 'pointer',
              }}
            >
              2
            </button>
          </div>
        </div>
      </div>
      {/* --- Internal CSS --- */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins :wght@500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Wild+Words+Lower+Bold&display=swap ');

        /* General Styles */
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }

        /* Highlight Section */
        .highlight-container {
          display: grid;
          grid-template-columns: 1.2fr 1fr; /* Adjusted for desktop */
          gap: 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .highlight-container {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }
        }

        /* Card untuk Artikel */
        .you-may-like-section {
          max-width: 1200px;
          margin: 40px auto;
          padding: 40px 20px;
          min-height: 100vh;
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
          grid-template-columns: repeat(4, 1fr); /* Desktop layout */
          gap: 20px;
        }

        @media (max-width: 1024px) {
          .articles-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .articles-grid {
            display: grid; /* Changed from flex to grid for vertical scrolling */
            grid-template-columns: 1fr; /* Single column for mobile */
            gap: 20px;
            overflow-y: auto; /* Enable vertical scrolling */
            overflow-x: hidden; /* Prevent horizontal scrolling */
            max-height: calc(100vh - 200px); /* Limit height to fit screen */
            scrollbar-width: none; /* Hide scrollbar */
            -ms-overflow-style: none; /* IE and Edge */
          }

          .articles-grid::-webkit-scrollbar {
            display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
          }
        }

        .article-card {
          background-color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card-container {
          position: relative;
          overflow: hidden;
          height: 150px;
          border-radius: 10px;
        }

        .card-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .article-card:hover .card-container img {
          transform: scale(1.1);
          filter: brightness(1.1);
        }

        .article-content {
          padding: 10px;
        }

        .article-content h3 {
          font-size: 14px;
          margin-bottom: 6px;
          font-weight: 500;
          color: #333;
          font-family: 'Poppins', sans-serif;
        }

        .article-content p {
          color: #B0B0B0;
          font-size: 14px;
          margin: 0;
          font-weight: 500;
          font-family: 'Poppins', sans-serif;
        }

        /* Additional Responsive Adjustments */
        @media (max-width: 320px) {
          .highlight-container {
            grid-template-columns: 1fr;
          }
          .articles-grid {
            grid-template-columns: 1fr;
          }
          .article-card {
            min-width: 100%;
            flex-shrink: 1;
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

export default NewsEventPage;