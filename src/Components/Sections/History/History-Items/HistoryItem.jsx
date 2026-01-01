/**
 * @file HistoryItem.jsx
 * @description Composant pour afficher un élément de la timeline du parcours professionnel
 * @author Simon Fanny
 * @date 22/12/2025
 * @project Portfolio - Projet8 - OpenClassrooms
 */

import React from 'react'
import './historyItem.scss'

function HistoryItem({ experience }) {
  const { title, entreprise, location, description, date, side } = experience;

  return (
    <div className={`timeline-item timeline-item--${side}`}>
      <div className="timeline-item__content">
        <h3 className="timeline-item__title">{title}</h3>
        <h4 className="timeline-item__entreprise">{entreprise}</h4>
        <span className="timeline-item__location">{location}</span>
        <p className="timeline-item__description">{description}</p>
      </div>

      <span className="timeline-item__dot" />
      <span className="timeline-item__date">{date}</span>
    </div>
  );
}

export default HistoryItem;