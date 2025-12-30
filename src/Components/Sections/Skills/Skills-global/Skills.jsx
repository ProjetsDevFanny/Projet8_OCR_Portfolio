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
import SkillItem from '../Skills-items/SkillItem'
import skillsData from '../../../../assets/data/skillsData.json'

function Skills() {
  return (
    <div className="skills">
      <div className="skills__container">
        <h2 className="skills__title">Compétences</h2>        
        <div className="skills__content">
          <div className="skills__skills-grid">
            {skillsData.map((skill) => (
              <SkillItem 
                key={skill.id} 
                skill={skill}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;