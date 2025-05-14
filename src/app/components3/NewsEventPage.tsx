import React from 'react';
import Image from 'next/image';

const NewsEventPage = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Smooth Fasting & Stable Blood Sugar: Follow This Eating Pattern for Suhoor & Iftar!',
      date: '25 March 2025',
      author: 'Yava',
      image: '/news/news1.png',
      description: 'A detailed guide on maintaining stable blood sugar during Ramadan.',
    },
    {
      id: 2,
      title: 'Stable Blood Sugar for Health & Energy While Breastfeeding',
      date: '17 January 2025',
      author: 'Yava',
      image: '/news/news2.png',
      description: 'Tips for breastfeeding mothers to maintain stable blood sugar.',
    },
    {
      id: 3,
      title: 'The World’s Best Diet: Low Glycemic Index for Gut Health',
      date: '06 December 2024',
      author: 'Yava',
      image: '/news/news3.png',
      description: 'Discover the benefits of a low glycemic index diet for gut health.',
    },
    {
      id: 4,
      title: 'Positive Thinking for a Healthier Heart!',
      date: '12 November 2024',
      author: 'Yava',
      image: '/news/news4.png',
      description: 'How positive thinking can improve heart health.',
    },
  ];

  return (
    <div
      style={{
        width: '100%',
        margin: 0,
        padding: 0,
        backgroundColor: '#fff',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: `'Poppins', sans-serif`,
      }}
    >
      {/* Highlight Section */}
      <section
        style={{
          width: '100%',
          padding: '2rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Search Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '2rem', // Tambahkan jarak antara search bar dan konten utama
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '80%', // Perbesar lebar search bar
              maxWidth: '800px', // Lebar maksimum search bar
            }}
          >
            <input
              type="text"
              placeholder="Search news & events..."
              style={{
                width: '100%',
                height: '40px',
                padding: '0 40px 0 10px', // Add padding for the search icon
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
              <Image
                src="/icons/src.png" // Replace with your search icon path
                alt="Search"
                width={35}
                height={35}
                style={{ objectFit: 'contain' }}
              />
            </button>
          </div>
        </div>

        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          HIGHLIGHT
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr', // Kolom utama (2/3) dan kolom samping (1/3)
            gap: '2rem',
            width: '100%',
            maxWidth: '1200px', // Lebar maksimum konten
            boxSizing: 'border-box',
          }}
        >
          {/* Foto Besar (news1) */}
          <div
            key={newsItems[0].id}
            style={{
              borderRadius: '10px',
              overflow: 'hidden',
              transition: 'transform 0.3s ease-in-out',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <Image
              src={newsItems[0].image}
              alt={newsItems[0].title}
              width={800} // Ukuran lebar gambar besar
              height={500} // Ukuran tinggi gambar besar
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
            <div style={{ padding: '1rem 0.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                {newsItems[0].title}
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                <span>{newsItems[0].author}</span>
                <span>•</span>
                <span>{newsItems[0].date}</span>
              </div>
            </div>
          </div>

          {/* Grid Item List (news2, news3, news4) */}
          <div
            style={{
              display: 'grid',
              gridTemplateRows: 'repeat(2, 1fr)', // Membuat 2 baris untuk kolom samping
              gap: '2rem',
            }}
          >
            {newsItems.slice(1).map((item) => ( // Ambil semua item dari newsItems.slice(1)
              <div
                key={item.id}
                style={{
                  borderRadius: '10px',
                  overflow: 'hidden',
                  transition: 'transform 0.3s ease-in-out',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400} // Ukuran lebar gambar kecil
                  height={250} // Ukuran tinggi gambar kecil
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '10px',
                  }}
                />
                <div style={{ padding: '1rem 0.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    {item.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                    <span>{item.author}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsEventPage;