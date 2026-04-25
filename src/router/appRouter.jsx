import { Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Contacto from '../components/Contacto';
import Products from '../components/Products';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Contacto" element={<Contacto />} />
    </Routes>
  );
};

export default AppRouter;