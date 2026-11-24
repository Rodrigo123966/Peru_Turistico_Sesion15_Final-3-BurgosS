import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { listarDestinos } from '../service/destinoService.js';

function Destino() {
  const [destinos, setDestinos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [categoria, setCategoria] = useState('Todas');

  useEffect(() => {
    let activo = true;
    listarDestinos()
      .then((datos) => { if (activo) setDestinos(datos); })
      .catch((err) => { if (activo) setError(err.message); })
      .finally(() => { if (activo) setCargando(false); });
    return () => { activo = false; };
  }, []);

  const categorias = ['Todas', ...new Set(destinos.map((d) => d.categoria).filter(Boolean))];
  const visibles = categoria === 'Todas' ? destinos : destinos.filter((d) => d.categoria === categoria);

  if (cargando) return <p className="mensaje">Cargando destinos...</p>;
  if (error) return <section className="mensaje"><h1>No se pudieron cargar los destinos</h1><p>{error}</p></section>;

  return (
    <section className="pagina-destinos">
      <span className="subtitulo">DESCUBRE EL PERÚ</span>
      <h1>Destinos turísticos</h1>
      <p>Conoce lugares increíbles, culturas ancestrales y paisajes inolvidables.</p>
      <div className="filtros" aria-label="Filtrar por categoría">
        {categorias.map((item) => (
          <button key={item} type="button" className={categoria === item ? 'filtro activo' : 'filtro'} onClick={() => setCategoria(item)}>{item}</button>
        ))}
      </div>
      {visibles.length === 0 ? <p className="mensaje">No hay destinos en esta categoría.</p> : (
        <div className="contenedor-destinos">
          {visibles.map((destino) => (
            <article className="tarjeta" key={destino.id}>
              <img
                src={destino.imagen}
                alt={`Imagen del destino turístico ${destino.nombre}`}
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
              />
              <div className="tarjeta-contenido">
                {destino.destacado && <span className="etiqueta">Destino destacado</span>}
                <h2>{destino.nombre}</h2>
                <p>📍 {destino.ciudad}, {destino.region}</p>
                <p>🏷️ {destino.categoria}</p>
                <Link to={`/destinos/${destino.id}`}>Ver destino</Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Destino;
