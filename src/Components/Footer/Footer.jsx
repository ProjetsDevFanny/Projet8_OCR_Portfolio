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
import { Link } from 'react-router-dom';
import SocialLinks from '../SocialLinks/SocialLinks';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
      
        <div className="footer__container__legacy">
          <p>&copy; 2026 Simon Fanny. Tous droits réservés.</p>
          <p>
            <Link to="/mentions">Mentions légales</Link>
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  )
}

export default Footer