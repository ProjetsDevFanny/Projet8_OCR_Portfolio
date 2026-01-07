/**
 * @file ScrollToTopButton.jsx
 * @description Composant ScrollToTopButton pour revenir en haut de la page
 * @author Simon Fanny
 * @date 06/01/2026
 * @project Portfolio - Projet8 - OpenClassrooms
 */

import React from 'react';
import { useEffect} from "react";
import './scrollToTopButton.scss';
import arrowUp from '/src/assets/images/Icones/fleche-haut.png';

function ScrollToTopButton() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 300) {
            document.body.classList.add('scrolled');
          } else {
            document.body.classList.remove('scrolled');
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className="scrollTopBtn"
      aria-label="Retour en haut"
    >
      <img src={arrowUp} alt="Retour en haut" />
    </button>
  );
}

export default ScrollToTopButton;