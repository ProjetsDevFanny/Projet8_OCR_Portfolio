/**
 * @file SocialLinks.jsx
 * @description Composant SocialLink avec les liens vers GitHub et LinkedIn.
 * @author Simon Fanny
 * @date 17/02/2026
 * @project Portfolio - Projet8 - OpenClassrooms
 *
 * ===============================================================================
 */

import React from 'react'
import './socialLinks.scss'
import githubIcon from '../../assets/images/Icones/github.svg'
import linkedinIcon from '../../assets/images/Icones/linkedin.svg'

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://github.com/ProjetsDevFanny"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link social-link--github"
        aria-label="Visitez mon GitHub"
      >
        <img src={githubIcon} alt="GitHub" className="social-icon social-icon--github" />
      </a>

      <a
        href="https://www.linkedin.com/in/fannysimon-dev-web/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link social-link--linkedin"
        aria-label="Visitez mon LinkedIn"
      >
        <img src={linkedinIcon} alt="LinkedIn" className="social-icon social-icon--linkedin" />
      </a>
    </div>
  )
}

export default SocialLinks;
