/**
 * @file Header.jsx
 * @description Composant Header affiché sur toutes les pages avec le logo et la navigation principale.
 *              Gère le menu de navigation avec liens actifs vers Accueil et À propos.
 * @author Simon Fanny
 * @date 22/12/2025
 * @project Portfolio - Projet8 - OpenClassrooms
 * 
 * ===============================================================================
 */

import React from 'react'
import './header.scss'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__signature">
          <a href="#hero">
            Fanny Simon
          </a>
        </div>
        <nav className="header__nav">
          <a href="#about">À propos</a>      
          <a href="#skills">Compétences</a>
          <a href="#projects">Projets</a>
          <a href="#history">Parcours</a>
          <a href="/CV_Fanny_Simon_portfolio.pdf" target="_blank" rel="noopener noreferrer" aria-label="Télécharger mon CV au format PDF">CV</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;