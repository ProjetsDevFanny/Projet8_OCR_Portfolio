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
        <div className="about__container_text">
          <div className="about__container_text_title">
            <h2>À propos de moi</h2>
          </div>
          <div className="about__container_text_paragraph">
            <p>
              Développeuse web passionnée par la programmation informatique depuis 2 ans. <br /> J'ai commencé par apprendre le HTML, le CSS et le JavaScript pour ensuite me spécialiser en React, Node.js, Express, MongoDB.              
            </p>
          </div>
        </div>
        <div className="about__container_picture">
          <img className="about__container_picture_photo" src="/src/assets/images/photo_profile.jpg" alt="About_photo_of_Fanny_Simon" />
        </div>
      </div>
    </div>
  );
}

export default About
