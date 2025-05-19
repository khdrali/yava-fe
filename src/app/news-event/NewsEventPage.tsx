'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '../components3/Breadcrumb';
import { useRouter } from 'next/navigation'; 

type Article = {
  id: number;
  title: string;
  date: string;
  author: string;
  image: string;
  description: string;
  content: string;
};

const NewsEventPage = () => {
  const [activeCategory] = useState('All Products');
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter(); 

  const newsItems: Article[] = [
    {
      id: 1,
      title: 'Smooth Fasting & Stable Blood Sugar: Follow This Eating Pattern for Suhoor & Iftar!',
      date: '25 March 2025',
      author: 'Yava',
      image: '/news/news1.png',
      description: 'A detailed guide on maintaining stable blood sugar during Ramadan.',
      content: `Fasting during Ramadan offers many health benefits. However, without the right eating habits, it can also lead to various health issues. One of the most common problems is the drastic fluctuation of blood sugar levels due to poor meal choices. In fact, a well-balanced eating pattern during suhoor (pre-dawn meal) and iftar (breaking fast) can help maintain stable blood sugar, keeping your body energized and healthy throughout the day.`,
    },
    {
      id: 2,
      title: 'Stable Blood Sugar for Health & Energy While Breastfeeding',
      date: '17 January 2025',
      author: 'Yava',
      image: '/news/news2.png',
      description: 'Tips for breastfeeding mothers to maintain stable blood sugar.',
      content: `Breastfeeding mothers need to maintain stable blood sugar levels to ensure they have enough energy for their daily activities and to support their baby's growth. Here are some tips to help breastfeeding mothers maintain stable blood sugar:`,
    },
    {
      id: 3,
      title: 'The World’s Best Diet: Low Glycemic Index for Gut Health',
      date: '06 December 2024',
      author: 'Yava',
      image: '/news/news3.png',
      description: 'Discover the benefits of a low glycemic index diet for gut health.',
      content: `A low glycemic index (GI) diet can improve gut health by promoting a balanced microbiome. Here's how:`,
    },
    {
      id: 4,
      title: 'Positive Thinking for a Healthier Heart!',
      date: '12 November 2024',
      author: 'Yava',
      image: '/news/news4.png',
      description: 'How positive thinking can improve heart health.',
      content: `Positive thinking has been linked to better heart health. Here are some ways to cultivate positive thinking:`,
    },
  ];

  const articlesToShow = newsItems.slice(1); 
  const itemsPerPage = 4;
  const totalPages = Math.ceil(articlesToShow.length / itemsPerPage);
  const startIndex = carouselIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentArticles = articlesToShow.slice(startIndex, endIndex);

  return (
    <div style={{ fontFamily: `'Poppins', sans-serif`, padding: '2rem' }}>
      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Breadcrumb */}
        <Breadcrumb activeCategory={activeCategory} setActiveCategory={() => {}} />
        {/* Page Title */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '2rem',
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#4B1A1B',
            fontFamily: `'WildWords Lower Bold', cursive, sans-serif`,
          }}
        >
          NEWS & EVENT
          <br />
          <span
            style={{
              background: 'linear-gradient(to right, #FEB519, #FE8301, #F31212)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block',
              fontSize: '2rem',
              fontWeight: 'bold',
            }}
          >
            FIND YOUR INTEREST
          </span>
        </div>
        {/* Search Bar */}
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
        {/* Highlight Section */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontWeight: '600', color: '#333' }}>HIGHLIGHT</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '1rem',
              width: '100%',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {/* Large Article - news1 */}
            <div
              key={newsItems[0]?.id}
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              onClick={() => router.push(`/news?id=${newsItems[0].id}`)} // 🔥 Ini ditambahkan
            >
              <Image
                src={newsItems[0]?.image || '/placeholder-image.jpg'}
                alt={newsItems[0]?.title || 'Placeholder'}
                width={800}
                height={500}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  transition: 'transform 0.3s ease-in-out',
                  transform: 'scale(1)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <div style={{ padding: '0.8rem 0.5rem' }}>
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#000',
                    marginBottom: '0.3rem',
                  }}
                >
                  {newsItems[0]?.title || 'No Title'}
                </h3>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    color: '#666',
                  }}
                >
                  <span>{newsItems[0]?.author || 'Unknown Author'}</span>
                  <span>•</span>
                  <span style={{ color: '#000' }}>{newsItems[0]?.date || 'No Date'}</span>
                </div>
              </div>
            </div>
            {/* Small Articles - news2, news3, news4 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {newsItems.slice(1).map((item) => (
                <div
                  key={item.id}
                  style={{
                    borderRadius: '10px',
                    overflow: 'hidden',
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                  onClick={() => router.push(`/news?id=${item.id}`)} // 🔥 Juga ditambahkan ke artikel kecil
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
                        transform: 'scale(1)',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </div>
                  <div style={{ flex: 1, padding: '0.6rem 0.5rem' }}>
                    <h3
                      style={{
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        color: '#000',
                        marginBottom: '0.3rem',
                      }}
                    >
                      {item.title}
                    </h3>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.75rem',
                        color: '#666',
                      }}
                    >
                      <span>{item.author}</span>
                      <span>•</span>
                      <span style={{ color: '#000' }}>{item.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Pagination Carousel */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
          <button
            onClick={() => setCarouselIndex((prev) => Math.max(prev - 1, 0))}
            disabled={carouselIndex === 0}
            style={{
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              marginRight: '1rem',
            }}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCarouselIndex(page - 1)}
              style={{
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                margin: '0 0.5rem',
                fontWeight: carouselIndex === page - 1 ? 'bold' : 'normal',
              }}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCarouselIndex((prev) => Math.min(prev + 1, totalPages - 1))}
            disabled={carouselIndex === totalPages - 1}
            style={{
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
            }}
          >
            Next
          </button>
        </div>
      </div>
      {/* Internal CSS */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins :wght@600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Wild+Words+Lower+Bold&display=swap ');
        .news-image:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
};

export default NewsEventPage;