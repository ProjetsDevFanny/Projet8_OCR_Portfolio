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
            Eh oui.., encore une développeuse web junior me dirai vous ! Mais pas n'importe laquelle... <br /> <br />Ingénieure en agriculture de formation, je sais travailler en équipe et dialoguer avec des interlocuteurs aux points de vue assez affirmés... mais tellement intéressants !
            <br />   <br />
            En 2024, je me suis tournée vers le code et les algorithmes: résoudre des bugs, comprendre les concepts et créer des projets m'ont tout de suite passionnée, impossible de décrocher parfois ! <br />
            Pendant mon temps libre, je travaille pour une association (Gnut06) au sein d'une équipe de développeurs. Je refactorise le CSS interne et inline des fichiers Twig (projet sous Docker, PHP, Symfony).
            <br /> <br />
            Aujourd'hui, Je recherche un poste salarié ou des missions en freelance. <br />Développeurs seniors freelance, n'hésitez pas à me solliciter: je peux vous dégager du temps sur certaines tâches.
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
