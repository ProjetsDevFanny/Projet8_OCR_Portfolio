/**
 * @file Home.jsx
 * @description Page d'accueil principale du portfolio avec toutes les sections.
 * @author Simon Fanny
 * @date 22/12/2025
 * @project Portfolio - Projet8 - OpenClassrooms
 *
 * ===============================================================================
 */

import React from 'react'
import About from '../../Components/Sections/About/About'
import Projects from '../../Components/Sections/Projects/Projects'
import Contacts from '../../Components/Sections/Contacts/Contacts'
import References from '../../Components/Sections/References/References'
import History from '../../Components/Sections/History/History'
import Hero from '../../Components/Hero/Hero'
import './home.scss'

function Home() {
  return (
    <div className="home">
      {/* Section Accueil/Hero */}
      <section id="hero" className="home__hero">
        <Hero />
      </section>

      {/* Section À propos */}
      <section id="about" className="home__about">
        <About />
      </section>

      {/* Section Projets */}
      <section id="projects" className="home__projects">
        <Projects />
      </section>

      {/* Section Parcours */}
      <section id="history" className="home__history">
        <History />
      </section>

      {/* Section References */}
      <section id="references" className="home__references">
        <References />
      </section>

      {/* Section Contact */}
      <section id="contact" className="home__contact">
        <Contacts />
      </section>
    </div>
  )
}

export default Home
