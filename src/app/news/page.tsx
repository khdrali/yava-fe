"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

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
  const articleId = parseInt(searchParams.get("id") || "0", 10);

  const newsItems: Article[] = [
    {
      id: 1,
      title: "Smooth Fasting & Stable Blood Sugar: Follow This Eating Pattern for Suhoor & Iftar!",
      date: "25 March 2025",
      author: "Yava",
      image: "/news/news1.png",
      description: "Fasting during Ramadan offers many health benefits. However, without the right eating habits, it can also lead to various health issues.",
      content: `During Sahur
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
      title: "Stable Blood Sugar for Health & Energy While Breastfeeding",
      date: "17 January 2025",
      author: "Yava",
      image: "/news/news4.png",
      description: "Tips for breastfeeding mothers to maintain stable blood sugar.",
      content: "...",
    },
    {
      id: 3,
      title: "The World’s Best Diet: Low Glycemic Index for Gut Health",
      date: "06 December 2024",
      author: "Yava",
      image: "/news/you1.png",
      description: "Discover the benefits of a low glycemic index diet for gut health.",
      content: "...",
    },
    {
      id: 4,
      title: "Positive Thinking for a Healthier Heart!",
      date: "12 November 2024",
      author: "Yava",
      image: "/news/you2.png",
      description: "How positive thinking can improve heart health.",
      content: "...",
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
    <section style={{ minHeight: "100vh", overflowX: "hidden" }}>
      <div
        style={{
          fontFamily: `'Poppins', sans-serif`,
          padding: "2rem",
          backgroundColor: "#FBFCF7",
          paddingTop: "8rem",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column - Scrollable */}
            <div className="lg:w-2/3 overflow-y-auto max-h-[80vh] pr-4 scrollbar-hide">
              {/* Breadcrumb */}
              <nav className="text-sm text-gray-500 mb-4 flex items-center gap-2">
                <span onClick={() => router.push("/")} className="cursor-pointer font-normal">Home</span>
                <span>/</span>
                <span className="cursor-pointer font-normal">News & Event</span>
              </nav>

              {/* Title */}
              <h1 className="text-2xl font-bold text-black mb-4">{selectedArticle.title}</h1>

              {/* Author + Date */}
              <p className="text-base text-gray-500 mb-4">
                {`${selectedArticle.author} • ${selectedArticle.date}`}
              </p>

              {/* Image (tidak bisa diklik atau dihover) */}
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg"
                  unoptimized
                />
              </div>

              {/* Description */}
              <p className="text-base font-medium text-black mb-6">{selectedArticle.description}</p>

              {/* Content */}
              <div className="mt-6 whitespace-pre-line text-base leading-relaxed text-black">
                <p>{selectedArticle.content}</p>
              </div>

              {/* Share Buttons */}
              <div className="mt-8 flex items-center gap-4 flex-wrap">
                <span className="font-bold text-lg text-black">Share:</span>
                {currentUrl && (
                  <>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u= ${encodeURIComponent(currentUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Facebook"
                      className="flex items-center"
                    >
                      <img src="/icons/share-facebook.png" alt="Facebook" width={20} height={20} />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url= ${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(selectedArticle.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Twitter"
                      className="flex items-center"
                    >
                      <img src="/icons/share-twitter.png" alt="Twitter" width={20} height={20} />
                    </a>
                    <a
                      href={`https://api.whatsapp.com/send?text= ${encodeURIComponent(`${selectedArticle.title} - ${currentUrl}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on WhatsApp"
                      className="flex items-center"
                    >
                      <img src="/icons/gmail.png" alt="WhatsApp" width={20} height={20} />
                    </a>
                  </>
                )}
              </div>
            </div>

            {/* Right Column - YOU MAY LIKE */}
            <div className="lg:w-1/3">
              <h2 className="font-semibold text-xl text-black mb-4">YOU MAY LIKE</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {newsItems
                  .filter((article) => article.id !== selectedArticle.id)
                  .slice(0, 3)
                  .map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3 cursor-pointer"
                      onClick={() => router.push(`/news?id=${item.id}`)}
                    >
                      {/* Card Image */}
                      <div className="w-24 md:w-32 lg:w-36 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={150}
                          height={100}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                      {/* Text Content */}
                      <div className="flex flex-col gap-1">
                        <h3 className="text-sm md:text-base font-semibold text-black">{item.title}</h3>
                        <span className="text-xs text-gray-500">{item.author} • {item.date}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prevent horizontal scroll on mobile */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        body {
          overflow-x: hidden;
        }
      `}</style>
    </section>
  );
};

export default DetailNewsPage;