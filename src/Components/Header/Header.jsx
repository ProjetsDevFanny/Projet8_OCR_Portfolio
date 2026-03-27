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

import React, { useState } from 'react'
import './header.scss'
import { Link } from 'react-router-dom';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__signature">
          <Link to="/">
            Fanny Simon
          </Link>
        </div>

        {/* Sidebar */}
        <div className={`header__sidebar ${isSidebarOpen ? 'header__sidebar--deployed' : ''}`} id="sidebar">
          <div className={`header__toggle-btn ${isSidebarOpen ? 'open' : ''}`} id="btn" onClick={toggleSidebar}>
            <span  className={`bar ${isSidebarOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isSidebarOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isSidebarOpen ? 'open' : ''}`}></span>
          </div>
          <nav className="header__nav">
            <Link to="/#hero" className="header__nav_link_accueil">Accueil</Link>      
            <Link to="/#about">À propos</Link>      
            <Link to="/#skills">Compétences</Link>
            <Link to="/#projects">Projets</Link>
            <Link to="/#history">Parcours</Link>
            <Link to="/CV__Fanny_SIMON.pdf" target="_blank" rel="noopener noreferrer" aria-label="Télécharger mon CV au format PDF">CV</Link>
            <Link to="/#contact">Contact</Link>
          </nav>
        </div>

      </div>
    </header>
  );
}

export default Header;