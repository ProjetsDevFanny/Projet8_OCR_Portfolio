/**
 * @file History.jsx
 * @description Section Parcours présentant Simon Fanny et ses expériences professionnelles
 * @author Simon Fanny
 * @date 22/12/2025
 * @project Portfolio - Projet8 - OpenClassrooms
 *
 * ===============================================================================
 */

import React from 'react'
import './history.scss'
import HistoryItem from "../History-Items/HistoryItem";
import experiences from "../../../../assets/data/experiencesData.json";

function History() {
  return (
    <div className="history">
      <div className="history__container">
        <h2 className="history__title">Parcours professionnel</h2>

        <div className="timeline__container">
          {experiences.map((experience) => (
            <HistoryItem
              key={experience.id}
              experience={experience}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default History