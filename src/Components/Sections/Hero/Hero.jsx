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
import SocialLinks from '../../SocialLinks/SocialLinks';

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
          <h1 className="hero__title" data-cy="hero-title">Fanny SIMON</h1>
          <h2 className="hero__subtitle">Développeuse Web Full Stack</h2>
          <p className="hero__description">
            Eh oui.., encore une développeuse web junior me dirai vous ! Mais pas n'importe laquelle... <br /> <br />Ingénieure en agriculture de formation, je sais travailler en équipe et dialoguer avec des interlocuteurs aux points de vue assez affirmés... mais tellement intéressants !
            <br />   
            En 2024, je me suis tournée vers le code, et depuis, impossible de m'arrêter ! <br />
            En ce moment, je donne de mon temps libre à une association informatique (Gnut06), dans laquelle je collabore avec plusieurs développeurs.
            <br /> 
            Aujourd'hui, Je recherche un poste salarié ou des missions en freelance. 
          </p>
          <div className="hero__important-note">
            <span className="hand">👉</span>
            <span className="text">Développeurs seniors freelance, n'hésitez pas à me solliciter: je peux vous dégager du temps sur certaines tâches.</span>
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
