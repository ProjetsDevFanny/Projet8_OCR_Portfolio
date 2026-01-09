/**
 * @file SkillItem.jsx
 * @description Composant pour afficher une compétence
 * @author Simon Fanny
 * @date 22/12/2025
 * @project Portfolio - Projet8 - OpenClassrooms
 */

import React from 'react'
import './skillItem.scss'

function SkillItem({ skill }) {
  return (
    <div className="skill-item">      
      <span className="skill-item__tag">{skill.name}</span>
    </div>
  );
}

export default SkillItem

