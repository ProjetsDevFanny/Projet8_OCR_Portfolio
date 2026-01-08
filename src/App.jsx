/**
 * @file App.jsx
 * @description Composant racine de l'application qui initialise le RouterProvider pour gérer le routage.
 * @author Simon Fanny
 * @date 21/12/2025
 * @project Portfolio - Projet8 - OpenClassrooms
 *
 * ===============================================================================
 */

import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { AppRouter } from './Components/router'
import './styles/main.scss'
    
function App() {
  return (
    <RouterProvider router={AppRouter} />
  )
}

export default App
