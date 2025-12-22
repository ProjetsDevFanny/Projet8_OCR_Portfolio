/**
 * @file Hero.jsx
 * @description Composant Hero affiché sur la page d'accueil du portfolio
 * @author Simon Fanny
 * @date 22/12/2025
 * @project Portfolio - Projet8 - OpenClassrooms
 *
 * ===============================================================================
 */

import React from 'react'
import './hero.scss'  

function Hero() {
  return (
   <div className="hero">
    <div className="hero__container">
      <div className="hero__content">
        <h1 className="hero__title">Simon Fanny</h1>
        <h2 className="hero__subtitle">Développeuse Web Full Stack</h2>
        <p className="hero__description">
          Passionnée par la création d'expériences web modernes et intuitives.
          Spécialisée en Javascript, React, Node.js, Express, MongoDB.
        </p>
        <div className="hero__actions">
          <a href="#about" className="hero__button hero__button--primary">À propos</a>
          <a href="#projects" className="hero__button hero__button--secondary">Projets</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero
