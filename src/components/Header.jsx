import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
      <header>
        <h1>Mi Portafolio</h1>
        <nav>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/profile">Sobre Mí</Link></li>
            <li><Link to="/projects">Proyectos</Link></li>
            <li><Link to="/skills">Habilidades</Link></li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;
