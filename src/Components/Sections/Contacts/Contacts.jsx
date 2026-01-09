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
import emailjs from '@emailjs/browser';

function Contacts() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Gestion des changements des champs du formulaire
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  
    setFormData(previousData => {
      return {
        ...previousData,     // copie tous les champs existants actuels dans un nouvel objet (garantit la non perte des données existantes)
        [name]: value    // met à jour (écrase) uniquement le(les) champ(s) qui a (ont) changé
      };
    });
  };

  // reset du formulaire
  const resetMessageAndForm = () => {
    setSubmitMessage('');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',  
      message: ''
    });
  };

  // Vérification de l'email
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  // Gestion de l'envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

      // Vérification de l'email (regex plus stricte) avant envoi
  if (!validateEmail(formData.email)) {
    setSubmitMessage('Email invalide !');
    setTimeout(() => {
      setSubmitMessage('');
    }, 3000);
    setIsSubmitting(false);
    return;
  }

    // Envoi des données du formulaire à EmailJS
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log('Données du formulaire:', formData);
      console.log(typeof emailjs); // "object"

      // Délai d'envoi pour simuler un traitement asynchrone
      await new Promise(resolve => setTimeout(resolve, 2000));

      setSubmitMessage('Merci ! Votre message a été envoyé avec succès.');
      setTimeout(() => {
        resetMessageAndForm();
      }, 5000);

    } catch (error) {
      setSubmitMessage('Une erreur est survenue. Veuillez réessayer.');
      setTimeout(() => {
        resetMessageAndForm();
      }, 4000);

    } finally {
      setIsSubmitting(false); // bouton submit redevient cliquable
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