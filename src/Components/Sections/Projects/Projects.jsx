/**
 * @file Projects.jsx
 * @description Section Projets présentant les projets de Simon Fanny
 * @author Simon Fanny
 * @date 22/12/2025
 * @project Portfolio - Projet8 - OpenClassrooms
 *
 * ===============================================================================
 */

import React, { useState } from 'react'
import projectsData from '../../../assets/data/projectsData.json'
import './projects.scss'

function Projects() {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (projectId) => {
    setImageErrors(prev => ({
      ...prev,
      [projectId]: true
    }));
  };

  return (
    <div className="projects">
      <div className="projects__container">
        <h2 className="projects__title">Projets</h2>
             
        <div className="projects__grid">
          {projectsData.map((project) => {
            // Créer un ID basé sur le titre du projet pour les liens internes
            const projectId = project.id === 1 ? 'project-kasa' : 
                             project.id === 2 ? 'project-mon-vieux-grimoire' : 
                             `project-${project.id}`;
            return (
            <div key={project.id} id={projectId} className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
              <div className="project-card__image">
                {!imageErrors[project.id] ? (
                  <img 
                    src={project.image} 
                    alt="" // Alt vide pour éviter le clignotement
                    onError={() => handleImageError(project.id)}
                    loading="lazy"
                  />
                ) : (
                  // Placeholder quand l'image ne charge pas
                  <div className="project-card__placeholder">
                    <div className="placeholder-icon">📁</div>
                    <p>Image à venir</p>
                  </div>
                )}
                {project.featured && <span className="project-card__badge">⭐ Projet vedette</span>}
              </div>
              
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                
                <div className="project-card__technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="technology-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-card__links">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link project-link--github"
                  >
                    <span>🔗</span> GitHub
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link project-link--live"
                    >
                      <span>🌐</span> Voir le site
                    </a>
                  )}
                </div>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Projects