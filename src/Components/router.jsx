/**
 * @file router.jsx
 * @description Composant de routage pour l'application.
 * @author Simon Fanny
 * @date 08/01/2026
 * @project Portfolio - Projet8 - OpenClassrooms
 *
 * ===============================================================================
 */

import React from "react";
import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from '../Pages/Home/Home'
import MentionsLegales from '../Pages/MentionsLegales/MentionsLegales'

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'mentions', element: <MentionsLegales /> },
    ]
  }
]);