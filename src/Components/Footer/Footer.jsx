/**
 * @file Footer.jsx
 * @description Composant Footer affiché en bas de toutes les pages avec les informations de contact et copyright.
 * @author Simon Fanny
 * @date 22/12/2025
 * @project Portfolio - Projet8 - OpenClassrooms
 *
 * ===============================================================================
 */

import React from 'react'
import './footer.scss'
import githubIcon from '../../assets/images/Icones/github.svg'
import linkedinIcon from '../../assets/images/Icones/linkedin.svg'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__social-links">
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
        <div className="footer__container__legacy">
          <p>&copy; 2026 Simon Fanny. Tous droits réservés.</p>
          <p>
            <Link to="/mentions">Mentions légales</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer