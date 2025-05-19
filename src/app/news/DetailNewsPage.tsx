"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

type Article = {
  id: number;
  title: string;
  date: string;
  author: string;
  image: string;
  description: string;
  content: string;
};

const DetailNewsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const articleId = parseInt(searchParams.get('id') || '0', 10);

  const newsItems: Article[] = [
    {
      id: 1,
      title: 'Smooth Fasting & Stable Blood Sugar: Follow This Eating Pattern for Suhoor & Iftar!',
      date: '25 March 2025',
      author: 'Yava',
      image: '/news/news1.png',
      description: 'A detailed guide on maintaining stable blood sugar during Ramadan.',
      content: `Fasting during Ramadan offers many health benefits. However, without the right eating habits, it can also lead to various health issues. One of the most common problems is the drastic fluctuation of blood sugar levels due to poor meal choices. In fact, a well-balanced eating pattern during suhoor (pre-dawn meal) and iftar (breaking fast) can help maintain stable blood sugar, keeping your body energized and healthy throughout the day.
      
      During Sahur
      Sahur provides your main source of energy while fasting. Eating the right foods at sahur can help stabilize blood sugar levels, preventing extreme hunger, fatigue, or dizziness caused by low blood sugar during the day. Recommended foods for sahur include:
      
      1. Complex Carbohydrates & High-Fiber Foods
      These are digested more slowly, releasing energy gradually throughout the day. Good options include brown rice, oatmeal, potatoes, sweet potatoes, granola, and fiber-rich vegetables like spinach, carrots, and broccoli.
      
      2. Protein-Rich Foods
      Protein helps you feel fuller for longer and takes more time to digest, supporting blood sugar stability. Recommended sources include boiled eggs, chicken breast, fish, Greek yogurt, tofu, and tempeh. A combination of yogurt and granola is also ideal for a balanced meal containing protein, healthy fats, and complex carbs.
      
      During Iftar
      Iftar meals should be balanced, nutritious, and not excessive. The goal is not only to replenish nutrients lost during the day but also to avoid sudden blood sugar spikes. Here are some useful tips:
      
      1. Start with 1-3 Dates
      Dates provide fiber and essential minerals, helping to stabilize blood sugar after fasting.
      
      2. Eat a balanced meal with carbs, protein, and healthy fats
      This combination helps meet your daily nutritional needs and supports stable energy levels.
      
      3. Include Fruits and Vegetables
      They provide essential vitamins, minerals, and fiber that help prevent blood sugar spikes.
      
      4. Avoid Overeating
      Overeating, especially sugary foods, can lead to unhealthy weight gain and increase the risk of insulin resistance, which may lead to diabetes over time.
      
      Between iftar and sahur, it's important to choose your snacks wisely. Opt for low glycemic index (GI) snacks that are nutrient-dense, such as fresh fruit, yogurt, nuts, and granola.
      
      Make fasting easier with YAVA’s nutritious granola. Made from the finest whole grains and naturally sweetened with low-GI Gula Lontar, it's packed with fiber and protein to keep you full longer at sahur and satisfied during snack time—without the blood sugar spike!
      
      Make this Ramadan your healthiest one yet with YAVA! Find your favorite YAVA varieties in stores or online today.`,
    },
    {
      id: 2,
      title: 'Stable Blood Sugar for Health & Energy While Breastfeeding',
      date: '17 January 2025',
      author: 'Yava',
      image: '/news/news4.png',
      description: 'Tips for breastfeeding mothers to maintain stable blood sugar.',
      content: `...`, 
    },
    {
      id: 3,
      title: 'The World’s Best Diet: Low Glycemic Index for Gut Health',
      date: '06 December 2024',
      author: 'Yava',
      image: '/news/you1.png',
      description: 'Discover the benefits of a low glycemic index diet for gut health.',
      content: `...`, 
    },
    {
      id: 4,
      title: 'Positive Thinking for a Healthier Heart!',
      date: '12 November 2024',
      author: 'Yava',
      image: '/news/you2.png',
      description: 'How positive thinking can improve heart health.',
      content: `...`, 
    },
  ];

  const selectedArticle = newsItems.find((article) => article.id === articleId);
  if (!selectedArticle) {
    return <div>Artikel tidak ditemukan</div>;
  }

  const [currentUrl, setCurrentUrl] = useState<string | null>(null);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <div
      style={{
        fontFamily: `'Poppins', sans-serif`,
        padding: '2rem',
        backgroundColor: '#FBFCF7', 
      }}
    >
      {/* Main Content */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          gap: '2rem',
        }}
      >
        {/* Kolom Kiri - Scrollable */}
        <div
          style={{
            flex: '2',
            maxHeight: '80vh',
            overflowY: 'auto',
            paddingRight: '1rem',
            backgroundColor: '#fff',
            scrollbarWidth: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {/* Breadcrumb */}
          <nav
            style={{
              fontSize: '0.9rem',
              color: '#666',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span
              onClick={() => router.push('/')}
              style={{ cursor: 'pointer', fontWeight: 'normal' }}
            >
              Home
            </span>
            <span>/</span>
            <span style={{ fontWeight: 'bold', color: '#000' }}>News & Event</span>
          </nav>

          {/* Judul Artikel */}
          <h1
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: '#000',
              marginBottom: '1rem',
            }}
          >
            {selectedArticle.title}
          </h1>

          {/* Informasi Penulis dan Tanggal */}
          <p
            style={{
              fontSize: '1rem',
              color: '#666',
              marginBottom: '1rem',
            }}
          >
            {selectedArticle.author} •{' '}
            <span style={{ color: '#000' }}>{selectedArticle.date}</span>
          </p>

          {/* Gambar Artikel dengan Efek Zoom saat Hover */}
          <div
            style={{
              marginTop: '1rem',
              overflow: 'hidden',
              borderRadius: '10px',
              transition: 'transform 0.3s ease',
              marginBottom: '1.5rem', 
            }}
          >
            <Image
              src={selectedArticle.image}
              alt={selectedArticle.title}
              width={800}
              height={400}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '10px',
                transition: 'transform 0.3s ease',
                display: 'block',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>

          <p
            style={{
              fontSize: '1rem',
              fontWeight: '500',
              color: '#000',
              marginBottom: '1.5rem',
            }}
          >
            {selectedArticle.description}
          </p>

          {/* Konten Artikel */}
          <div
            style={{
              marginTop: '1.5rem',
              whiteSpace: 'pre-line',
              color: '#000',
              fontSize: '1rem',
              lineHeight: '1.6', 
              fontWeight: '400',
              padding: '0 1rem',
            }}
          >
            <p>{selectedArticle.content}</p>
          </div>

          {/* Social Media Sharing Buttons */}
          <div
            style={{
              marginTop: '2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '1rem',
                color: 'black',
              }}
            >
              Share:
            </span>
            {/* Facebook */}
            {currentUrl && (
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u= ${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#000' }}
              >
                <img
                  src="/icons/share-facebook.png"
                  alt="Facebook"
                  width={20}
                  height={20}
                  style={{ marginRight: '5px' }}
                />
              </a>
            )}
            {/* twitter */}
            {currentUrl && (
              <a
                href={`https://www.instagram.com/?url= ${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Instagram"
                style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#000' }}
              >
                <img
                  src="/icons/share-twitter.png"
                  alt="Instagram"
                  width={20}
                  height={20}
                  style={{ marginRight: '5px' }}
                />
              </a>
            )}
            {/* gmail */}
            {currentUrl && (
              <a
                href={`https://api.whatsapp.com/send?text= ${encodeURIComponent(`${selectedArticle.title} - ${currentUrl}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on WhatsApp"
                style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#000' }}
              >
                <img
                  src="/icons/gmail.png"
                  alt="WhatsApp"
                  width={20}
                  height={20}
                  style={{ marginRight: '5px' }}
                />
              </a>
            )}
          </div>
        </div>

        {/* Kolom Kanan - YOU MAY LIKE */}
        <div
          style={{
            flex: '1',
            position: 'sticky',
            top: '2rem',
            backgroundColor: '#f9f9f9',
            borderRadius: '10px',
            padding: '1rem',
          }}
        >
          <h2 style={{ fontWeight: '600', color: '#000', marginBottom: '1rem' }}>YOU MAY LIKE</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            {newsItems
              .filter((article) => article.id !== selectedArticle.id)
              .slice(0, 3)
              .map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    cursor: 'pointer',
                  }}
                  onClick={() => router.push(`/news?id=${item.id}`)}
                >
                  {/* Card Image */}
                  <div
                    style={{
                      flex: '0 0 150px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={150}
                      height={100}
                      style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                        borderRadius: '10px',
                        transition: 'transform 0.3s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                  </div>
                  {/* Text Content */}
                  <div
                    style={{
                      flex: '1',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.3rem',
                      fontSize: '0.7rem',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        color: '#000',
                        marginBottom: '0.2rem',
                      }}
                    >
                      {item.title}
                    </h3>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        fontSize: '0.6rem',
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
    </div>
  );
};

export default DetailNewsPage;