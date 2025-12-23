/**
 * @file Contacts.jsx
 * @description Composant de section Contacts avec formulaire de contact.
 * @author Simon Fanny
 * @date 22/12/2025
 * @project Portfolio - Projet8 - OpenClassrooms
 * 
 * ===============================================================================
 */

import React, { useState } from 'react'
import './contacts.scss'

function Contacts() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulation d'envoi (à remplacer par votre logique d'envoi réel)
    try {
      // Ici vous pouvez ajouter votre logique d'envoi (API, email service, etc.)
      console.log('Données du formulaire:', formData);
      
      // Simulation d'un délai d'envoi
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitMessage('Merci ! Votre message a été envoyé avec succès.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contacts">
      <div className="contacts__container">
        <h2 className="contacts__title">Contactez-moi</h2>
        <p className="contacts__subtitle">
          Un projet ? Une opportunité professionnelle ? <br /> N'hésitez pas à me contacter.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">Prénom *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="form-input"
                placeholder="Votre prénom"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="lastName" className="form-label">Nom *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="form-input"
                placeholder="Votre nom"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-input"
              placeholder="votre.email@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="form-textarea"
              placeholder="Votre message..."
              rows="5"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="form-submit-btn"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
          </button>

          {submitMessage && (
            <div className={`form-message ${submitMessage.includes('succès') ? 'form-message--success' : 'form-message--error'}`}>
              {submitMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contacts