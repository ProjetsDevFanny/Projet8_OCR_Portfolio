/**
 * @file App.jsx
 * @description Composant racine de l'application qui rend le layout et la page d'accueil.
 * @author Simon Fanny
 * @date 21/12/2025
 * @project Portfolio - Projet8 - OpenClassrooms
 *
 * ===============================================================================
 */

import React from 'react'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import './styles/main.scss'

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default App
