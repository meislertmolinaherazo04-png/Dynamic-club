import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Navbar.css";
import imgLogo from "../assets/logo.jpg";


function Navbar() {
  return (
    <header className="header-nav">
      <div className="logo-container">
        <img src={imgLogo} alt="Dynamic Club Logo" className="logo-img" />
        <span className="logo-text">DYNAMIC CLUB</span>
      </div>
      <nav className="nav-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>INICIO</NavLink>

        <NavLink to="/productos" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>PROGRAMAS</NavLink>

        <NavLink to="/contacto" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>CONTACTOS</NavLink>
      </nav>
      <Link to="/contacto" className="btn-get-started">EMPEZAR</Link>
    </header>
  );
}

export default Navbar;


