import Card from "../components/Card";
import "./Productos.css";

import imgCalistenia from "../assets/calistenia.jpg"
import imgPowerlifting from "../assets/powerlifting.jpg";
import imgCulturismo from "../assets/culturismo.jpg";

function Productos() {
  
  const listaServicios = [
    {
      id: 1,
      nombre: "POWERLIFTING",
      descripcion: "Domina los levantamientos fundamentales: sentadilla, press de banca y peso muerto. Desarrolla fuerza bruta y técnica.",
      precio: "$50 USD / mes",
      imagen: imgPowerlifting
    },
    {
      id: 2,
      nombre: "CALISTENIA",
      descripcion: "Dominio del peso corporal. Desarrolla fuerza funcional, agilidad y control mediante movimientos avanzados.",
      precio: "$40 USD / mes",
      imagen: imgCalistenia
    },
    {
      id: 3,
      nombre: "FISICOCULTURISMO",
      descripcion: "Esculpe tu físico. Entrenamiento enfocado en la hipertrofia y planes de nutrición personalizados.",
      precio: "$60 USD / mes",
      imagen: imgCulturismo
    }
  ];

  return (
    <div className="productos-container">
      <div className="productos-header">
        <h2>Nuestros Programas</h2>
        <p>Elige el enfoque de entrenamiento que mejor se adapte a tus metas físicas.</p>
      </div>

      <div className="grid-cards">
        {listaServicios.map((servicio) => (
          <Card
            key={servicio.id}
            nombre={servicio.nombre}
            descripcion={servicio.descripcion}
            precio={servicio.precio}
            imagen={servicio.imagen}
          />
        ))}
      </div>
    </div>
  );
}

export default Productos;