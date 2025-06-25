import React,{useState, useEffect} from 'react';

export default function Slideshow({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      if (images.length <= 1) return;
  
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000); // 3 seconds
  
      return () => clearInterval(interval);
    }, [images]);
  
    return (
      <div className="relative h-[400px] w-full md:w-[400px] overflow-hidden rounded-md">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    );
  }