import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './carousel.scss'; // Importa tus estilos CSS/SCSS

// const images = [
//   'https://via.placeholder.com/600x300?text=Image+1',
//   'https://via.placeholder.com/600x300?text=Image+2',
//   'https://via.placeholder.com/600x300?text=Image+3',
//   'https://via.placeholder.com/600x300?text=Image+4',
//   'https://via.placeholder.com/600x300?text=Image+5',
//   'https://via.placeholder.com/600x300?text=Image+6',
//   'https://via.placeholder.com/600x300?text=Image+7',
// ];

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevImage}>&#10094;</button>
      <div className="carousel-inner">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="carousel-image"
            onClick={openModal}
          />
        </AnimatePresence>
      </div>
      <button className="next" onClick={nextImage}>&#10095;</button>
      <div className="thumbnails">
        {images.map((image, index) => (
          <div
            key={index}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
          >■</div>
        ))}
      </div>
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
