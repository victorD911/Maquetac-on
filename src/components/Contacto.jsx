import { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({ 
    nombre: '', 
    apellidos: '', 
    email: '', 
    asunto: '', 
    mensaje: '' 
  });

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
      <div className="contact-header">
        <h2 className="section-title">CONTACTO</h2>
        <p className="section-subtitle">¿Tienes alguna pregunta? Nos encantaría escucharte</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3 className="info-main-title">INFORMACIÓN DE CONTACTO</h3>
          
          <div className="info-item">
            <div className="info-icon-box"><i className="fi fi-rr-marker"></i></div>
            <div className="info-text">
              <h4>DIRECCIÓN</h4>
              <p>Calle Urban Style 123<br/>28001 Madrid, España</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-box"><i className="fi fi-rr-phone-call"></i></div>
            <div className="info-text">
              <h4>TELÉFONO</h4>
              <p>+34 91 123 45 67</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-box"><i className="fi fi-rr-envelope"></i></div>
            <div className="info-text">
              <h4>EMAIL</h4>
              <p>info@urbanthreads.com</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-box"><i className="fi fi-rr-clock"></i></div>
            <div className="info-text">
              <h4>HORARIO</h4>
              <p>Lun - Vie: 9:00 - 18:00<br/>Sáb: 10:00 - 14:00</p>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <h3 className="form-main-title">ENVÍANOS UN MENSAJE</h3>
          
          <div className="demo-alert">
            <p><strong>Demo:</strong> Este es un formulario de demostración. Los mensajes no se enviarán realmente.</p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>NOMBRE</label>
                <input name="nombre" onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>APELLIDOS</label>
                <input name="apellidos" onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <label>EMAIL</label>
              <input name="email" type="email" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>ASUNTO</label>
              <select name="asunto" onChange={handleChange}>
                <option value="">Selecciona un asunto</option>
                <option value="ventas">Consulta general</option>
                <option value="soporte">Información de producto</option>
                <option value="soporte">Estado de pedido</option>
                <option value="soporte">Devoluciones</option>
                <option value="soporte">Otro</option>
              </select>
            </div>

            <div className="form-group">
              <label>MENSAJE</label>
              <textarea name="mensaje" rows="4" onChange={handleChange}></textarea>
            </div>

            <button type="submit" className="btn-send">ENVIAR MENSAJE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;