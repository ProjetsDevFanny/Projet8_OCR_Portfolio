/**
 * @file About.jsx
 * @description Section À propos présentant Simon Fanny et ses compétences
 * @author Simon Fanny
 * @date 22/12/2025
 * @project Portfolio - Projet8 - OpenClassrooms
 *
 * ===============================================================================
 */

import React from 'react'
import './about.scss'

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <h2 className="about__title">À propos de moi</h2>

        <div className="about__content">
          <div className="about__text">
            <p>
              Développeuse web passionnée avec une solide expérience en développement full-stack.
              Je crée des applications web modernes, performantes et accessibles.
            </p>
            <p>
              Spécialisée en Javascript, React, Node.js, Express, MongoDB, je m'efforce toujours de produire
              un code de qualité et des expériences utilisateur exceptionnelles.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
