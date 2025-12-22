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
          <a href="#home">
            Fanny Simon
          </a>
        </div>
        <nav className="header__nav">
          <a href="#home">Accueil</a>
          <a href="#about">À propos</a>      
          <a href="#projects">Projets</a>
          <a href="#history">Parcours</a>
          <a href="#references">References</a>
          <a href="/cv-simon-fanny.pdf" target="_blank" rel="noopener noreferrer">CV</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;