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
import Modal from '../../Modal/Modal'
import './projects.scss'

function Projects() {
  const [imageErrors, setImageErrors] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageError = (projectId) => {
    setImageErrors(prev => ({
      ...prev,
      [projectId]: true
    }));
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
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
            <div 
              key={project.id} 
              id={projectId} 
              className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
              onClick={() => handleProjectClick(project)}
            >
              <div className="project-card__image">
                {!imageErrors[project.id] ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
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
                
                <div className="project-card__links" onClick={(e) => e.stopPropagation()}>
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

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedProject && (
          <div className="project-modal">
            <div className="project-modal__image">
              {!imageErrors[selectedProject.id] ? (
                <img 
                  src={selectedProject.imageModal} 
                  alt={selectedProject.titleModal}
                  onError={() => handleImageError(selectedProject.id)}
                  className={selectedProject.id === 1 ? 'project-modal__image--large' : ''}
                />
              ) : (
                <div className="project-modal__placeholder">
                  <div className="placeholder-icon">📁</div>
                  <p>Image à venir</p>
                </div>
              )}
            </div>
            
            <div className="project-modal__content">
              <h2 className="project-modal__title">{selectedProject.titleModal}</h2>
              
              {selectedProject.projectSheet ? (
                <div className="project-modal__sheet">
                  <div className="project-modal__sheet-section">
                    <p>{selectedProject.projectSheet.context}</p>
                  </div>

                  <div className="project-modal__sheet-section">
                    <p>{selectedProject.projectSheet.objectives}</p>
                  </div>

                  <div className="project-modal__sheet-section">
                    <p>{selectedProject.projectSheet.stack}</p>
                  </div>

                  <div className="project-modal__sheet-section">
                    <p>{selectedProject.projectSheet.skills}</p>
                  </div>

                  <div className="project-modal__sheet-section">
                    <p>{selectedProject.projectSheet.results}</p>
                  </div>

                  <div className="project-modal__sheet-section">
                    <p>{selectedProject.projectSheet.improvements}</p>
                  </div>
                </div>
              ) : (
                <div className="project-modal__description">
                  <h3>Description</h3>
                  <p>{selectedProject.detailedDescription || selectedProject.description}</p>
                </div>
              )}

              <div className="project-modal__technologies">
                <h3>Technologies utilisées</h3>
                <div className="project-modal__tech-list">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="technology-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-modal__links">
                <a 
                  href={selectedProject.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link project-link--github"
                >
                  <span>🔗</span> Voir sur GitHub
                </a>
                {selectedProject.liveUrl && (
                  <a 
                    href={selectedProject.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link project-link--live"
                  >
                    <span>🌐</span> Voir le site en ligne
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default Projects
