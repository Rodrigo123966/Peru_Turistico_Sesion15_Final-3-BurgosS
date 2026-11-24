import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { obtenerDestino } from '../service/destinoService.js';

function DetalleDestino() {
  const { id } = useParams();
  const [destino, setDestino] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let activo = true;
    setCargando(true);
    setError('');
    obtenerDestino(id)
      .then((resultado) => { if (activo) setDestino(resultado); })
      .catch((err) => { if (activo) setError(err.message); })
      .finally(() => { if (activo) setCargando(false); });
    return () => { activo = false; };
  }, [id]);

  if (cargando) return <p className="mensaje">Cargando destino...</p>;
  if (error) return <section className="mensaje"><h1>Error al cargar</h1><p>{error}</p><Link className="boton" to="/destinos">Volver a destinos</Link></section>;
  if (!destino) return <section className="mensaje"><h1>Destino no encontrado</h1><Link className="boton" to="/destinos">Volver a destinos</Link></section>;

  return (
    <section className="detalle-destino">
      <span className="subtitulo">DESCUBRE ESTE LUGAR</span>
      <h1>{destino.nombre}</h1>
      <img
        src={destino.imagen}
        alt={`Imagen del destino turístico ${destino.nombre}`}
        loading="lazy"
        decoding="async"
        width="1200"
        height="700"
      />
      <div className="informacion-destino">
        <p><strong>📍 Ubicación:</strong> {destino.ciudad}, {destino.region}</p>
        <p><strong>🏷️ Categoría:</strong> {destino.categoria}</p>
        {destino.duracionVisita && <p><strong>⏱️ Duración:</strong> {destino.duracionVisita}</p>}
        {destino.precioEntrada !== undefined && <p><strong>🎟️ Entrada referencial:</strong> S/ {destino.precioEntrada}</p>}
        <h2>Sobre este destino</h2>
        <p>{destino.descripcion}</p>
      </div>
      <Link to="/destinos" className="boton">Volver a destinos</Link>
    </section>
  );
}
export default DetalleDestino;