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
        <div className="about__container_title">
          <h2>À propos de moi</h2>
        </div>
        <div className="about__container_content">
          <div className="about__container_content_text">
            <p>
              Développeuse JavaScript Full Stack, passionnée par les interfaces claires, interactives et pensées pour l'utilisateur.
            </p>
            <ul>
              <li>
                Parcours : En 2024, découverte du développement web en autodidacte (SoloLearn), puis formation Front-End avec Julien Azambourg (<a href="https://fromscratch.podia.com/parcours-complet-mastering-front-end" target="_blank" rel="noopener noreferrer">From Scratch</a>) et formation <a href="https://openclassrooms.com/fr/paths/185-developpeur-web" target="_blank" rel="noopener noreferrer">Développeur Web</a> diplômante d'OpenClassrooms.
              </li>
              <li>
                Stacks : JavaScript, React, Sass, Node.js, MongoDB
              </li>
              <li>
                Projets : <a href="#project-kasa">Kasa</a> (React/Sass), <a href="#project-mon-vieux-grimoire">Mon Vieux Grimoire</a> (Node.js/MongoDB), <a href="https://github.com/ProjetsDevFanny/Galerie_dArt_Interactive" target="_blank" rel="noopener noreferrer">Galerie artistique interactive</a> (en cours)
              </li>
              <li>
                Approche : Agile, Scrum, Kanban (Notion, Trello), XP
              </li>
              <li>
                Recherche : Poste de développeuse Full Stack JavaScript junior, au sein d'une équipe Agile, bienveillante et orientée partage.
              </li>
            </ul>
          </div>
          <div className="about__container_content_picture">
            <img className="about__container_content_picture_photo" src="/src/assets/images/photo_profile.jpg" alt="About_photo_of_Fanny_Simon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
