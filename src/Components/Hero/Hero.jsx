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
import frequencyWave from '/src/assets/images/frequency-wave.webp'  // Préchargement de l'image
import SocialLinks from '../SocialLinks/SocialLinks';

function Hero() {
  return (
    <div className="hero">
      <div className="hero__container">
        {/* Préchargement invisible pour LCP */}
        <img
          src={frequencyWave}
          alt="Frequency Wave"
          style={{ display: 'none' }}
          fetchPriority="high"
        />

        <div className="hero__content">
          <h1 className="hero__title">Fanny SIMON</h1>
          <h2 className="hero__subtitle">Développeuse Web Full Stack</h2>
          <p className="hero__description">
            Passionnée par la création d'expériences web modernes et intuitives. <br />
            Spécialisée en Javascript, React, Node.js, Express, MongoDB. <br />
          </p>
          <div className="hero__actions">
            <a href="#projects" className="hero__button hero__button--primary">Projets</a>
            <a href="#history" className="hero__button hero__button--secondary">Parcours</a>
          </div>
          <div className="hero__social-links">
            <SocialLinks />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
