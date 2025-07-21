'use client';

import { useState, useEffect } from 'react';

const ToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`to-top ${isVisible ? 'active' : ''}`}
      onClick={scrollToTop}
    >
      <i className="fa-solid fa-circle-arrow-up fa-2x"></i>
    </button>
  );
};

export default ToTopButton;
