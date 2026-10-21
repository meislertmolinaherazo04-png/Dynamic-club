import "./Card.css";

interface CardProps {
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string;
}

function Card({ nombre, descripcion, precio, imagen }: CardProps) {
  return (
    <div className="card">
      <img src={imagen} alt={nombre} className="card-img" />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <strong>{precio}</strong>
      <button onClick={() => alert(`Más información sobre ${nombre}`)}>
        Consultar
      </button>
    </div>
  );
}

export default Card;