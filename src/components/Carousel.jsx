import { useEffect, useState } from "react";
import img1 from "../assets/slide1.jpg";
import img2 from "../assets/slide2.jpg";
import img3 from "../assets/slide3.jpg";
import '../styles/carousel.css';

const images = [img1, img2, img3];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 2000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="carousel-container">
      <img src={images[current]} alt={`slide${current}`} className="carousel-image" />
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 px-2 py-1 bg-white/80 rounded shadow hover:bg-blue-200"
        onClick={prevSlide}
      >◀</button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 px-2 py-1 bg-white/80 rounded shadow hover:bg-blue-200"
        onClick={nextSlide}
      >▶</button>
    </div>
  );
}
