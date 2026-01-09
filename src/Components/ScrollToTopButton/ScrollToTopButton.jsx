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
  
  // Effet pour ajouter la classe scrolled au body lors du scroll
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;  // bloque les autres scroll events pendant la frame (augmente la performance)
        window.requestAnimationFrame(() => {
          if (window.scrollY > 300) {
            document.body.classList.add('scrolled');
          } else {
            document.body.classList.remove('scrolled');
          }
          ticking = false; // après la mise à jour, prêt pour la prochaine frame
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Nettoyage de l'écouteur d'événement pour éviter les fuites de mémoire
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Fonction pour scroll en haut de la page avec animation fluide
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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