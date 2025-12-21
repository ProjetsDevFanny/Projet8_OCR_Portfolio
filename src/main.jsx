// * @file main.jsx
//  * @description Point d'entrée de l'application React. Initialise le rendu de l'application dans le DOM.
//  * @author Simon Fanny
//  * @date 21/12/2025
//  * @project Portfolio - Projet8 - OpenClassrooms
//  * 
//  * ===============================================================================
//  */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
