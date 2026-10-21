import { useState } from "react";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !correo) {
      alert("Por favor completa los campos requeridos.");
      return;
    }
    alert(`¡Gracias ${nombre}! Nos pondremos en contacto contigo.`);
  };

  return (
    <section className="contacto-container">
      <h2>Contacto</h2>
      <p>Escríbenos a: <strong>Dynamic_club@gmail.com</strong></p>
      <p>Instagram <strong>Dynamic_club</strong></p>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Tu Nombre" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Tu Correo" 
          value={correo} 
          onChange={(e) => setCorreo(e.target.value)} 
        />
        <button type="submit">Enviar Mensaje</button>
      </form>
    </section>
  );
}

export default Contacto;