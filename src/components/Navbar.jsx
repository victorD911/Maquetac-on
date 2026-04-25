import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">URBAN THREADS</div>
        <ul className="navbar-menu">
          <Link to="/" className="navbar-link">Inicio</Link>
          <Link to="/Products" className="navbar-link">Productos</Link>
          <Link to="/Contacto" className="navbar-link">Contacto</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;