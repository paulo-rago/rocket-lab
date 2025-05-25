import React, { useState, useEffect } from "react";

const images = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
];

const Gallery: React.FC = () => {

  const [active, setActive] = useState(1); // Start with second image as active (index 1)

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
    <div id="gallery" className="relative w-full" data-carousel="slide">
      {/* Carousel wrapper with smooth sliding */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${active * (100 / images.length)}%)`,
          }}
        >
          {images.map((src, idx) => (
            <div
              key={src}
              className="flex-shrink-0 w-full h-full flex items-center justify-center"
              style={{ width: `${100 / images.length}%` }}
              data-carousel-item={active === idx ? "active" : undefined}
            >
              <img
                src={src}
                className="block max-w-full h-auto mx-auto"
                alt={`Gallery image ${idx + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevImage}
        aria-label="Previous"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextImage}
        aria-label="Next"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Gallery;
