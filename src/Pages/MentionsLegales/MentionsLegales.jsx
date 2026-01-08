/**
 * @file MentionsLegales.jsx
 * @description Page de mentions légales.
 * @author Simon Fanny
 * @date 08/01/2026
 * @project Portfolio - Projet8 - OpenClassrooms
 * 
 * ===============================================================================
 */


import React from 'react'
import './mentionsLegales.scss'

function MentionsLegales() {
  return (
    <div className="mentionsLegales">


      <div className="mentionsLegales__container">
        <div className="mentionsLegales__container__miseAJour">
          <span>Dernière mise à jour le 08/01/2026</span>
        </div>
        <h1>Mentions légales</h1>

        <h2>Editeur du site</h2>
        <p>Fanny Simon</p>
        <p>Email : <a href="mailto:contact.fanny.simon@gmail.com">contact.fanny.simon@gmail.com</a></p>

        <h2>Hébergement</h2>
        <p>Netlify, Inc.</p>
        <p>Adresse : 2325 3rd Street, Suite 296, San Francisco, CA 94107, États-Unis</p>
        <p>Email : <a href="mailto:support@netlify.com">support@netlify.com</a></p>
        <p>Site : <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">https://www.netlify.com/</a></p>

        <h2>Propriété intellectuelle :</h2>
        <p>Tous les contenus présents sur ce site (textes, images, code, design) sont la propriété de Simon Fanny et sont protégés par le droit d’auteur © 2025. Toute reproduction, représentation ou utilisation, totale ou partielle, sans autorisation est interdite.</p>

        <h2>Données personnelles :</h2>
        <p>Ce site ne collecte aucune donnée personnelle. Toutes les interactions sont anonymes et ne sont pas conservées.</p>

        <h2>Contact :</h2>
        <p>Pour toute question ou remarque concernant le site, veuillez contacter l'éditeur via l'adresse email ci-dessus.</p>

      </div>
    </div>
  )
}

export default MentionsLegales