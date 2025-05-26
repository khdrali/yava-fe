'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function CombinedSection() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Wrapper untuk Hero + Footer */}
      <div className="relative">
        {/* Hero Section */}
        <section
          className="bg-orange-500 text-white flex items-center justify-center px-6"
          style={{ height: 'calc(100vh - 70px - 120px)' }}
        >
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between h-full">
              {/* Kolom Kiri: Teks */}
              <div className="w-full md:w-1/2 text-left mb-10 md:mb-0 md:pr-10 flex flex-col justify-center items-start">
                <h1 className="text-4xl sm:text-5xl font-bold leading-none mb-2">WELCOME</h1>
                <p className="text-4xl sm:text-5xl font-bold leading-none mb-4">TO YAVA</p>
                <div className="text-base sm:text-lg mb-6 space-y-1 max-w-lg">
                  <p>Healthy CAN be delicious.</p>
                  <p>At YAVA, we celebrate food that</p>
                  <p>brings health, joy and freedom.</p>
                </div>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                  Learn More
                </button>
              </div>

              {/* Kolom Kanan: Gambar */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div 
                  className="relative"
                  style={{
                    width: '1200px',
                    height: '1000px',
                    maxWidth: '100%'
                  }}
                >
                  <Image
                    src="/heroimage/Product-Yava.png"
                    alt="YAVA Granola Chocolate Vanilla"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Store Footer Section */}
        <section
          className="bg-[#FDF5E6] text-gray-800 flex items-center justify-center px-6 py-9"
          style={{ height: 'auto' }} // Tinggi otomatis sesuai konten
        >
          <div className="flex items-center gap-20"> {/* Menambahkan jarak 12px antara elemen */}
            <p className="text-[22px] font-semibold leading-none whitespace-nowrap">
              Available in Your Favorite Stores
            </p>
            {/* Logo Toko */}
            <div className="flex gap-4 overflow-x-auto no-scrollbar gap-25">
              <Image src="/heroimage/Blibli.png" alt="Blibli" width={89} height={35} />
              <Image src="/heroimage/Lazada (1).png" alt="Lazada" width={124} height={35} />
              <Image src="/heroimage/Shopee.png" alt="Shopee" width={120} height={35} />
              <Image src="/heroimage/Tiktok (1).png" alt="TikTok Shop" width={153} height={35} />
              <Image src="/heroimage/Tokopedia (1).png" alt="Tokopedia" width={154} height={35} />
            </div>
          </div>
        </section>
      </div>

      {/* Lontar Sugar Section */}
      <section
        className="bg-[#FDF5E6] flex items-center px-6"
        style={{ height: '100vh' }}
      >
        <div className="container mx-auto relative" style={{ marginBottom: '250px' }}> {/* Geser ke atas sebesar 50px */}
          <div className="flex flex-col md:flex-row items-center justify-between h-full">
            {/* Left Side: Text Content */}
            <div className="w-full md:w-1/2 text-left mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-2">
                <span className="text-black">LONTAR</span> <span className="text-red-600">SUGAR</span>
              </h2>
              <p className="text-xl font-medium mb-4">
                Pure • Natural • Sustainable
              </p>
              <p>Lontar Sugar gives you more steady blood sugar and helps</p>
              <p className='text-base mb-6'>keep you more healthy (and taste great!).</p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                Learn More
              </button>
            </div>

            {/* Right Side: Images */}
            <div className="w-full md:w-1/2 relative flex items-center justify-center gap-10">
              {/* Gambar Besar */}
              <div
                className="relative w-[620px] h-[620px]"
                style={{
                  top: '4px',
                  left: '187px',
                  paddingInlineStart: '700px', // Sama dengan padding-left
                }}
              >
                <Image
                  src="/heroimage/Photo LG.png" // Ganti dengan path gambar besar
                  alt="Lontar Sugar Big Image"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Gambar Kecil */}
              <div
                className="relative w-[390px] h-[390px]"
                style={{
                  bottom: '-250px',
                  left: '-700px',
                  paddingInlineStart: '390px', // Sama dengan padding-left
                }}
              >
                <Image
                  src="/heroimage/Mascot Container.png" // Ganti dengan path gambar kecil
                  alt="Lontar Sugar Small Image"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Gambar Baru */}
          <div
            className="absolute"
            style={{
              width: '412px',
              height: '412px',
              top: '504px', // Perbarui posisi karena layout geser ke atas
              right: '-10px',
            }}
          >
            <Image
              src="/heroimage/Gula Ramah.png" // Ganti dengan path gambar baru
              alt="New Image"
              width={412}
              height={412}
              className="object-contain"
            />
          </div>

          {/* Gambar Baru Dengan Rotasi */}
          <div
            className="absolute"
            style={{
              width: '160px',
              height: '160px',
              top: '-60px', // Perbarui posisi karena layout geser ke atas
              right: '600px',
              transform: 'rotate(-25deg)', // Rotasi sebesar 13.71 derajat
            }}
          >
            <Image
              src="/heroimage/Lontar.png" // Ganti dengan path gambar baru
              alt="New Fruit Image"
              width={160}
              height={160}
              className="object-contain"
            />
          </div>

          {/* Gambar Baru Terbaru */}
          <div
            className="absolute"
            style={{
              width: '141.9999986460625px',
              height: '141.9999986460625px',
              top: '60px', // Perbarui posisi karena layout geser ke atas
              right: '50px',
              transform: 'rotate(30deg)', // Rotasi sebesar -31.8 derajat
            }}
          >
            <Image
              src="/heroimage/Sharp Red.png" // Ganti dengan path gambar baru
              alt="New Triangle Image"
              width={141.9999986460625}
              height={141.9999986460625}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Against Video Section */}
      <section
        className="bg-white text-gray-900 flex flex-col items-center justify-center px-6"
        style={{ height: '100vh' }}
      >
        <div className="container mx-auto">
          {/* Title - AGAINTS VIDEO di kiri atas, di luar preview */}
          <div className="flex justify-between items-center mb-4 max-w-[1320px] mx-auto w-full">
            <div className="flex gap-5">
              <span className="font-extrabold leading-tight text-black text-5xl">AGAINTS</span>
              <span className="font-extrabold leading-tight text-red-600 text-5xl">VIDEO</span>
            </div>
            {/* Tombol navigasi di sebelah kanan title */}
            <div className="flex space-x-2">
              <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L14 12z" />
                </svg>
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M8.59 16.59L10.5 18.5l6-6-6-6-1.41 1.41L10.5 12z" />
                </svg>
              </button>
            </div>
          </div>
          {/* Video Preview */}
          <div className="relative w-full max-w-[1320px] mb-8 mx-auto">
            <div className="overflow-hidden rounded-xl shadow-lg p-5">
              <Image
                src="/heroimage/Video Clip.png"
                alt="Against Video Preview"
                width={1420}
                height={798}
                className="w-full h-full object-cover rounded-xl"
              />
              {/* Overlay Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white bg-opacity-70 rounded-full p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path d="M10 16.5L16 12 10 7.5V16.5Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Yava Granola Section */}
      <section
        className="bg-white flex items-center px-6"
        style={{ height: '100vh' }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between h-full">
            {/* Left Side: Text Content */}
            <div className="md:w-1/2 text-left mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-2">
                <span className="text-black">WHY</span> <span className="text-red-600">YAVA GRANOLA?</span>
              </h2>
              <p className="text-xl font-medium mb-4">
                Delicious • Convenient • Healthy
              </p>
              <p>YAVA granola features the traditional rolled oats, combined</p>
              <p> with a Bali-centric combination of puffed red rice, cashews</p>
              <p> and various dried fruits (even chocolate!). Mixed and baked</p>
              <p className='text-base mb-6'> until perfectly crunchy.</p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                Learn More
              </button>
            </div>

            {/* Right Side: Images */}
            <div className="md:w-1/2 relative flex items-center justify-center">
              {/* Gambar Tengah: Piring Granola */}
              <Image
                src="/heroimage/Bowl Spin (1).png"
                alt="Yava Granola Bowl Image"
                width={676}
                height={672}
                className="w-[676px] h-[672px] object-cover rounded-full"
              />
              {/* Gambar Kiri - Bisa Diatur Manual */}
              <div 
                className="absolute z-10" 
                style={{
                  top: '60%',                     // Sesuaikan nilai ini untuk vertikal
                  left: '15px',                    // Sesuaikan nilai ini untuk horizontal
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <div 
                  className="bg-opacity-5 p-2.5" 
                  style={{
                    width: '197.51px',            // Sesuaikan lebar
                    height: '204.49px',           // Sesuaikan tinggi
                  }}
                >
                  <Image
                    src="/heroimage/Highlight (1).png"
                    alt="Breakfast Image"
                    width={197.51}
                    height={204.49}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Gambar Kanan - Bisa Diatur Manual */}
              <div 
                className="absolute z-10" 
                style={{
                  top: '270px',                     // Sesuaikan nilai ini untuk vertikal
                  right: '55px',                   // Sesuaikan nilai ini untuk horizontal
                  transform: 'translate(50%, -50%)',
                }}
              >
                <div 
                  className="bg-opacity-5 p-2.5"
                  style={{
                    width: '142px',               // Sesuaikan lebar
                    height: '185px',              // Sesuaikan tinggi
                  }}
                >
                  <Image
                    src="/heroimage/Highlight.png"
                    alt="Fuel Image"
                    width={142}
                    height={185}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Food Section */}
      <section className="bg-white text-gray-900 px-6">
        {/* Gambar di Kiri Atas + Judul */}
        <div className="w-[433px] h-[433px] relative">
          <Image
            src="/heroimage/IMG (11).png"
            alt="Left Top Image"
            fill
            className="object-cover"
          />
        </div>
        {/* Judul */}
        <div className="text-center mb-8">
          <h2 className="inline-flex items-center justify-center gap-5 bg-opacity-10 px-6 py-2 rounded-full"
              style={{
                width: '539px',
                height: '54px',
                maxWidth: '100%',
                boxSizing: 'border-box'
              }}>
            <span className="text-black text-4xl font-bold">OUR FOOD</span>
            <br />
            <span className="text-red-600 text-4xl font-bold">FIND YOUR FAVORITE!</span>
          </h2>
        </div>
        {/* Single Navigation Image */}
        <div className="flex justify-center mb-8">
          <div className="w-[1059px] h-[160px] flex items-center justify-center gap-[48px] rounded-lg">
            <Image
              src="/heroimage/Auto Layout Horizontal (1).png"
              alt="Product Categories Navigation"
              width={1059}
              height={160}
              className="object-contain"
            />
          </div>
        </div>
        {/* Grid Produk */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[1400px] mx-auto">
          {/* Kartu Produk Pertama */}
          <div className="w-[337px] rounded-[15px] overflow-hidden shadow-md">
            <div className="h-[300px] relative">
              <Image
                src="/heroimage/IMG.png"
                alt="Product 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-lg font-semibold uppercase">GO'NOLA</p>
              <p className="text-gray-600 mt-2">Chocolate Vanilla</p>
            </div>
          </div>
          {/* Kartu Produk Kedua */}
          <div className="w-[337px] rounded-[15px] overflow-hidden shadow-md">
            <div className="h-[300px] relative">
              <Image
                src="/heroimage/IMG (1).png"
                alt="Product 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-lg font-semibold uppercase">GRANOLA PUFFS</p>
              <p className="text-gray-600 mt-2">Chocolate Vanilla</p>
            </div>
          </div>
          {/* Kartu Produk Ketiga */}
          <div className="w-[337px] rounded-[15px] overflow-hidden shadow-md">
            <div className="h-[300px] relative">
              <Image
                src="/heroimage/IMG (2).png"
                alt="Product 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-lg font-semibold uppercase">GRANOLA BITES</p>
              <p className="text-gray-600 mt-2">Chocolate Vanilla</p>
            </div>
          </div>
          {/* Kartu Produk Keempat */}
          <div className="w-[337px] rounded-[15px] overflow-hidden shadow-md">
            <div className="h-[300px] relative">
              <Image
                src="/heroimage/IMG (3).png"
                alt="Product 4"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-lg font-semibold uppercase">GRANOLA</p>
              <p className="text-gray-600 mt-2">Chocolate Banana</p>
            </div>
          </div>
          {/* Kartu Produk Kelima */}
          <div className="w-[337px] rounded-[15px] overflow-hidden shadow-md">
            <div className="h-[300px] relative">
              <Image
                src="/heroimage/IMG (4).png"
                alt="Product 5"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-lg font-semibold uppercase">GRANOLA</p>
              <p className="text-gray-600 mt-2">Honey Almond</p>
            </div>
          </div>
          {/* Kartu Produk Keenam */}
          <div className="w-[337px] rounded-[15px] overflow-hidden shadow-md">
            <div className="h-[300px] relative">
              <Image
                src="/heroimage/IMG (5).png"
                alt="Product 6"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-lg font-semibold uppercase">GRANOLA</p>
              <p className="text-gray-600 mt-2">Rosella Cinnamon</p>
            </div>
          </div>
          {/* Kartu Produk Ketujuh */}
          <div className="w-[337px] rounded-[15px] overflow-hidden shadow-md">
            <div className="h-[300px] relative">
              <Image
                src="/heroimage/IMG (6).png"
                alt="Product 7"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-lg font-semibold uppercase">GRANOLA</p>
              <p className="text-gray-600 mt-2">Tropical Fruits</p>
            </div>
          </div>
          {/* Kartu Produk Kedelapan */}
          <div className="w-[337px] rounded-[15px] overflow-hidden shadow-md">
            <div className="h-[300px] relative">
              <Image
                src="/heroimage/IMG (7).png"
                alt="Product 8"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <p className="text-lg font-semibold uppercase">GRANOLA BITES</p>
              <p className="text-gray-600 mt-2">Chocolate Banana</p>
            </div>
          </div>
        </div>
        {/* Tombol "See More" */}
        <div className="flex justify-center mt-8 mb-40">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            See More
          </button>
        </div>
      </section>

      {/* Happy Food Notes Section */}
      <section className="bg-white text-gray-900 flex flex-col items-center justify-center px-6">
        {/* Judul */}
        <div className="text-center mb-8">
          <h1 className="inline-flex items-center justify-center gap-5 bg-opacity-10 px-6 py-2 rounded-full"
              style={{
                width: '539px',
                height: '54px',
                maxWidth: '100%',
                boxSizing: 'border-box'
              }}>
            <span className="text-black text-4xl font-bold">HAPPY</span>
            <span className="text-red-600 text-4xl font-bold">FOOD NOTES</span>
          </h1>
        </div>
        {/* Gambar Utama */}
        <div className="w-full max-w-[1420px] mx-auto overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/heroimage/IMG 1 (1).png"
            alt="Woman Eating Granola"
            layout="intrinsic"
            width={1420}
            height={850}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        {/* Konten Berbasis Gambar Horizontal (Tanpa Card) */}
        <div
          className="w-full max-w-[1420px] mx-auto mt-8 flex overflow-x-auto pb-4"
          style={{
            width: '1420px',
            gap: '24px',
          }}
        >
          {/* Gambar Pertama */}
          <div className="flex-shrink-0" style={{ width: '457.33px', minWidth: '392px', height: '184px' }}>
            <div className="w-full h-full rounded-[15px] overflow-hidden">
              <Image
                src="/heroimage/News Card 4 (2).png"
                alt="Positive Thinking for a Healthier Heart!"
                width={457.33}
                height={184}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Gambar Kedua */}
          <div className="flex-shrink-0" style={{ width: '457.33px', minWidth: '392px', height: '184px' }}>
            <div className="w-full h-full rounded-[15px] overflow-hidden">
              <Image
                src="/heroimage/News Card 3 (2).png"
                alt="Normal Blood Sugar: Why It Matters for Your Health"
                width={457.33}
                height={184}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Gambar Ketiga */}
          <div className="flex-shrink-0" style={{ width: '457.33px', minWidth: '392px', height: '184px' }}>
            <div className="w-full h-full rounded-[15px] overflow-hidden">
              <Image
                src="/heroimage/News Card 2 (2).png"
                alt="Healthy, Fiber-Rich Snacks to Support Digestive Health"
                width={457.33}
                height={184}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* Tombol "See More" */}
        <div className="mt-8">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 mb-30">
            See More
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="bg-[#FFF6EF] text-[#333333] font-medium text-lg"
        style={{ 
          fontFamily: "'Poppins', sans-serif",
          width: 'full', // Mengganti dari 1920px menjadi full
          margin: '0 auto',
          padding: '40px 40px 0'
        }}
      >
        {/* Container Utama */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-8">
          {/* Kolom Kiri: Logo, Informasi Kontak, Media Sosial */}
          <div 
            style={{
              width: '821.67px',
              height: '370px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            {/* Logo + Info Perusahaan */}
            <div>
              <Image
                src="/heroimage/Logo - Original.png"
                alt="YAVA"
                width={120}
                height={40}
                className="mb-4"
              />
              <p className="text-base font-semibold">PT EAST INDO FAIR TRADING</p>
              <p className="text-sm mt-1">
                Jl. Padang Galak No.20 A, Kesiman Petilan – Denpasar, 80237, Indonesia
              </p>
              <p className="text-sm mt-1">Phone: (+62) 0361-4721486</p>
              <p className="text-sm mt-1">Email: info@yavabali.com</p>
            </div>

            {/* Media Sosial di bawah */}
            <div className="flex gap-2 mt-4">
              <img src="/images/instagram.png" alt="Instagram" className="w-5 h-5" />
              <img src="/images/facebook.png" alt="Facebook" className="w-5 h-5" />
              <img src="/images/youtube.png" alt="YouTube" className="w-5 h-5" />
            </div>
          </div>

          {/* Kolom Tengah: Navigation */}
          <div
            style={{
              width: '213.33px',
              height: '304px',
              display: 'flex',
              flexDirection: 'column',
              gap: '40px'
            }}
          >
            <h3 className="text-base font-semibold">Navigation</h3>
            <ul className="space-y-1 text-sm flex flex-col">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Lontar Sugar</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Ingredients</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Company</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">YAVAKataMereka</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">News & Event</a></li>
            </ul>
          </div>

          {/* Kolom Kanan: Meet Us */}
          <div
            style={{
              width: '245px',
              height: '369px',
              display: 'flex',
              flexDirection: 'column',
              gap: '40px'
            }}
          >
            <h3 className="text-base font-semibold">Meet Us</h3>
            <div className="grid grid-cols-1 gap-4">
              {['Blibli', 'Lazada (1)', 'Shopee', 'Tokopedia (1)', 'Tiktok (1)'].map((store) => (
                <div key={store} className="flex items-center gap-2">
                  <img
                    src={`/heroimage/${store}.png`}
                    alt={store}
                    className="w-12 h-12 object-contain" // 👈 Ukuran gambar diperbesar
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Bar Bawah */}
        <div
          className="bg-orange-500 text-white text-center text-sm h-[50px] flex items-center justify-center mt-8"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          © 2025 Yava. All rights reserved
        </div>
      </footer>
    </div>
  );
}