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
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__signature">
          <Link to="/">
            Fanny Simon
          </Link>
        </div>
        <nav className="header__nav">
          <Link to="/#hero" className="header__nav_link_accueil">Accueil</Link>      
          <Link to="/#about">À propos</Link>      
          <Link to="/#skills">Compétences</Link>
          <Link to="/#projects">Projets</Link>
          <Link to="/#history">Parcours</Link>
          <Link to="/CV_Fanny_Simon_portfolio.pdf" target="_blank" rel="noopener noreferrer" aria-label="Télécharger mon CV au format PDF">CV</Link>
          <Link to="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;