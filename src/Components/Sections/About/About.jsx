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
import photoProfile from "../../../assets/images/photo_profile.webp";
import aboutData from '../../../assets/data/aboutData.json'
import './about.scss'

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__container_title">
          <h2>À propos de moi</h2>
        </div>
        <div className="about__container_content">
          {aboutData.map((aboutSection) => {
            return (
              <div className="about__container_content_text" key={aboutSection.idAbout}>
                <p className="about__container_content_text_introduction">
                  {aboutSection.introduction}
                </p>
                <ul className="aboutSection">
                  <li>
                    <span className="aboutSection_span">Stacks :</span> {aboutSection.stacks}
                  </li>
                  <li>
                    <span className="aboutSection_span">Parcours :{" "}</span>
                    {aboutSection.parcours.map((parcours, index) => (
                      <span key={parcours.idParcours}>
                        <a href={parcours.link}>
                          {parcours.name}
                        </a>
                        {index < aboutSection.parcours.length - 1 &&
                          (index === aboutSection.parcours.length - 2 ? " et " : ", ")}
                      </span>
                    ))}
                  </li>
                  <li>
                    <span className="aboutSection_span">Projets principaux : </span>

                    {aboutSection.projects.map((project, index) => (
                      <span key={project.idProject}>
                        <a href={project.link}>
                          {project.name}
                        </a>
                        {index < aboutSection.projects.length - 1 &&
                          (index === aboutSection.projects.length - 2 ? " et " : ", ")}
                      </span>
                    ))}
                  </li>
                  <li>
                    <span className="aboutSection_span">Approche :</span> {aboutSection.approach}
                  </li>
                  <li>
                    <span className="aboutSection_span">Objectif :</span> {aboutSection.search}
                  </li>
                  <li>
                    <span className="aboutSection_span">Hobbies : </span>
                    {aboutSection.hobbies.map((hobby) => (
                      <ul className="hobbiesSection" key={hobby.idHobby}>
                        <li>
                          <span className="hobbiesSection_span">
                            {hobby.name} {":"}
                          </span>
                          {hobby.description} {"▸"}
                          <a
                            href={hobby.linkGithub}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {hobby.textLinkGitHub} {", "}
                          </a>
                          {hobby.linkWebsite && (
                            <a
                              href={hobby.linkWebsite}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {hobby.textLinkWebsite} {"."}
                            </a>
                          )}
                        </li>
                      </ul>
                    ))}
                  </li>
                </ul>
              </div>
            )
          })}
          <div className="about__container_content_picture">
            <img className="about__container_content_picture_photo" src={photoProfile} alt="About_photo_of_Fanny_Simon" loading="lazy" aria-label="Photo de profil de Fanny SIMON" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
