const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h2 className="footer-logo">URBAN THREADS</h2>
          <p className="footer-text">
            Redefiniendo el estilo urbano con diseños minimalistas y calidad premium.
          </p>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">ENLACES</h3>
          <ul className="footer-links">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Productos</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">AYUDA</h3>
          <ul className="footer-links">
            <li><a href="#">Guía de tallas</a></li>
            <li><a href="#">Envíos</a></li>
            <li><a href="#">Devoluciones</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-title">SÍGUENOS</h3>
          <div className="footer-socials">
            <a href="#"><i className="fi fi-brands-twitter"></i></a>
            <a href="#"><i className="fi fi-brands-pinterest"></i></a>
            <a href="#"><i className="fi fi-brands-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          &copy; {currentYear} Urban Threads. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;