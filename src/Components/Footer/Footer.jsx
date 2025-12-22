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

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p>&copy; 2025 Simon Fanny. Tous droits réservés.</p>
        <div className="footer__links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:contact@simonfanny.dev">Email</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
