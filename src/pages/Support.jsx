import React, { useState } from 'react';
import './Support.css';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Nome é obrigatório.";
    if (!formData.phone) errors.phone = "Telefone é obrigatório.";
    if (!formData.email) {
      errors.email = "Email é obrigatório.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email inválido.";
    }
    if (!formData.message) errors.message = "Dúvida/Elogio/Sugestão é obrigatório.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log('Form data:', formData);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="support-page">
      <h2>Precisa de ajuda? Chama o Chef!</h2>
      <p>Utilize esse espaço para nos ajudar a melhorar a sua experiência no site.</p>
      {isSubmitted ? (
        <p className="success-message">Sua mensagem foi enviada com sucesso!</p>
      ) : (
        <form onSubmit={handleSubmit} className="support-form">
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={formErrors.name ? 'input-error' : ''}
              required
            />
            {formErrors.name && <span className="error-message">{formErrors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={formErrors.phone ? 'input-error' : ''}
              required
            />
            {formErrors.phone && <span className="error-message">{formErrors.phone}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={formErrors.email ? 'input-error' : ''}
              required
            />
            {formErrors.email && <span className="error-message">{formErrors.email}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Dúvida/Elogio/Sugestão:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={formErrors.message ? 'input-error' : ''}
              required
              rows="6"
            />
            {formErrors.message && <span className="error-message">{formErrors.message}</span>}
          </div>
          <button type="submit" className="submit-button">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default Support;