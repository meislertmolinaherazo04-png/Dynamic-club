import { Link } from "react-router-dom";
import "./Inicio.css";

function Inicio() {
  return (
    <div className="inicio-container">
      <div className="inicio-content">
        <h1>Bienvenido a Dynamic Club</h1>
        <p>Tu espacio especializado en calistenia, fuerza y acondicionamiento físico de alto rendimiento.</p>
        <p>Entrena con propósito, supera tus límites y alcanza tus metas con nosotros.</p>
        
        <Link to="/productos" className="btn-ir-productos">
          Ver Nuestros Programas
        </Link>
      </div>
    </div>
  );
}

export default Inicio;