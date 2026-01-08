/**
 * @file Layout.jsx
 * @description Composant de mise en page principal contenant Header, Footer et zone de contenu.
 *              Affiche le Header, le main et le Footer.
 * @author Simon Fanny
 * @date 22/12/2025
 * @project Portfolio - Projet8 - OpenClassrooms
 * 
 * ===============================================================================
 */

import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './layout.scss'
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'

function Layout() {
  const location = useLocation();

  // Support des ancres (#about, #projects, etc.) avec React Router
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [location]);

  return (
    <div className="layout">
      <Header />
      <main className="layout__main-container">
        <Outlet /> {/* Ici s'afficheront le contenu des pages enfants */}
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default Layout