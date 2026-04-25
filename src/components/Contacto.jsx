import { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user_contact', JSON.stringify(formData));
    console.log("Datos capturados:", formData);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">ENVÍANOS UN MENSAJE</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input 
              name="nombre" 
              placeholder="NOMBRE" 
              onChange={handleChange} 
              className="form-input" 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              name="email" 
              type="email" 
              placeholder="EMAIL" 
              onChange={handleChange} 
              className="form-input" 
              required 
            />
          </div>
          <div className="form-group">
            <textarea 
              name="mensaje" 
              placeholder="MENSAJE" 
              onChange={handleChange} 
              className="form-textarea" 
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="btn-submit">ENVIAR MENSAJE</button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;