/**
 * @file Modal.jsx
 * @description Composant Modal réutilisable pour afficher des détails
 * @author Simon Fanny
 * @date 22/12/2025
 * @project Portfolio - Projet8 - OpenClassrooms
 */

import React, { useEffect } from 'react'
import './modal.scss'

function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    // Empêcher le scroll du body quand la modal est ouverte
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Nettoyage au démontage (pour ne pas bloquer le scroll de la page arrière si modale fermée trop vite ou si le composant n'existe plus)
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Fermer la modal avec la touche Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    // Ajout d'un écouteur d'événement pour la touche Escape
    document.addEventListener('keydown', handleEscape)
    return () => {
      // Nettoyage de l'écouteur d'événement pour éviter les fuites de mémoire
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null // si la modal n'est pas ouverte, ne rien rendre

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> 
        <button className="modal-close" onClick={onClose} aria-label="Fermer la modal">
          ×
        </button>
        {children} 
      </div>
    </div>
  )
}

export default Modal

