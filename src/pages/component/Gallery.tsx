import React, { useState, useEffect } from "react";
import img1 from "../../assets/Gemini_Generated_Image_dwria4dwria4dwri.png";
import img2 from "../../assets/Gemini_Generated_Image_q5mm5iq5mm5iq5mm.png";
import img3 from "../../assets/Gemini_Generated_Image_q5mm5jq5mm5jq5mm.png";
import img4 from "../../assets/Gemini_Generated_Image_q5mm5kq5mm5kq5mm.png";
import img5 from "../../assets/Gemini_Generated_Image_q5mm5lq5mm5lq5mm.png";

const images = [img1, img2, img3, img4, img5];

const Gallery: React.FC = () => {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevImage = () => {
    setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="gallery" className="relative w-full max-w-5xl mx-auto my-16" data-carousel="slide">
      <div className="relative h-80 md:h-[36rem] overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white bg-gradient-to-br from-[#e0e7ef] to-[#f8fafc]">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${active * (100 / images.length)}%)`,
          }}
        >
          {images.map((src, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full h-full flex items-center justify-center"
              style={{ width: `${100 / images.length}%` }}
              data-carousel-item={active === idx ? "active" : undefined}
            >
              <div className="relative w-full h-full flex items-center justify-center group">
                <img
                  src={src}
                  className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white transition-transform duration-500 group-hover:scale-110 group-hover:shadow-3xl"
                  alt={`Gallery image ${idx + 1}`}
                  style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.22)' }}
                />
                <span className="absolute bottom-4 right-6 bg-white/80 text-xs text-gray-700 px-3 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {`Imagem ${idx + 1} de ${images.length}`}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-40">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`w-5 h-5 rounded-full border-2 border-white transition-all duration-300 ${active === idx ? 'bg-[#00363d] scale-125 shadow-2xl' : 'bg-white/70'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      <button
        type="button"
        className="absolute top-1/2 left-6 -translate-y-1/2 z-30 flex items-center justify-center h-16 w-16 cursor-pointer group focus:outline-none bg-white/95 hover:bg-[#00363d] hover:text-white rounded-full shadow-2xl border-2 border-gray-200 transition"
        onClick={prevImage}
        aria-label="Previous"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        type="button"
        className="absolute top-1/2 right-6 -translate-y-1/2 z-30 flex items-center justify-center h-16 w-16 cursor-pointer group focus:outline-none bg-white/95 hover:bg-[#00363d] hover:text-white rounded-full shadow-2xl border-2 border-gray-200 transition"
        onClick={nextImage}
        aria-label="Next"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Gallery;
