/**
 * @file ScrollToTopButton.jsx
 * @description Composant ScrollToTopButton pour revenir en haut de la page
 * @author Simon Fanny
 * @date 06/01/2026
 * @project Portfolio - Projet8 - OpenClassrooms
 */


import { useEffect, useState } from "react";
import './scrollToTopButton.scss';
import arrowUp from '../../assets/images/Icones/fleche-haut.png';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scrollTopBtn ${isVisible ? "show" : ""}`}
      aria-label="Retour en haut"
    >
      <img src={arrowUp} alt="Retour en haut" className="scrollTopBtn__icon" />
    </button>
  );
}

export default ScrollToTopButton;