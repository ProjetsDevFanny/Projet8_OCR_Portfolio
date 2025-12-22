/**
 * @file Skills.jsx
 * @description Composant Skills affiché sur toutes les pages avec les compétences.
 * @author Simon Fanny
 * @date 22/12/2025
 * @project Portfolio - Projet8 - OpenClassrooms
 *
 * ===============================================================================
 */
import React from 'react'
import './skills.scss'

function Skills() {
  return (
    <div className="skills">
      <div className="skills__container">
        <h2 className="skills__title">Compétences</h2>        
        <div className="skills__content">
          <div className="skills__skills-grid">
              <span className="skill-tag">HTML/CSS</span>
              <span className="skill-tag">Sass</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express</span>
              <span className="skill-tag">MongoDB</span>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Skills;