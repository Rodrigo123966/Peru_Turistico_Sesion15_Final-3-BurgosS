import { NavLink, Link } from 'react-router-dom';

function Header() {
  return (
    <header className="encabezado">
      <Link className="marca" to="/" aria-label="Perú Turístico, inicio">Perú <span>Turístico</span></Link>
      <nav aria-label="Navegación principal">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/destinos">Destinos</NavLink>
        <NavLink to="/nosotros">Nosotros</NavLink>
      </nav>
    </header>
  );
}

export default Header;
