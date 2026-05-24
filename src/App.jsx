import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home';
import Tienda from './pages/Tienda';
import Contacto from './pages/Contacto';
import Nosotros from './pages/Nosotros';
import Carrito from './pages/Carrito';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <nav className="navbar">
          <div className="logo">
            <img src="/img/logo.png" alt="Logo Frutos Ochoa" />
            Frutos Ochoa
          </div>
          <div className="links">
            <Link to="/">Inicio</Link>
            <Link to="/nosotros">Quiénes Somos</Link>
            <Link to="/tienda">Tienda</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
        </nav>

        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="social-links">
            <a href="#"><FaFacebook size={24} /></a>
            <a href="#"><FaInstagram size={24} /></a>
            <a href="#"><FaWhatsapp size={24} /></a>
          </div>
          <p>© 2026 Frutos Deshidratados Ochoa. Todos los derechos reservados.</p>
        </footer>
      </Router>
    </CartProvider>
  );
}

export default App;