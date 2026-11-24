import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <>
      <section className="inicio">
        <span className="subtitulo subtitulo-claro">AVENTÚRATE A DESCUBRIR</span>
        <h1>El Perú te espera.<br />Vive una experiencia única.</h1>
        <p>Descubre destinos extraordinarios, culturas milenarias y paisajes que te sorprenderán.</p>
        <Link to="/destinos" className="boton">Explorar destinos</Link>
      </section>
      <section className="bienvenida">
        <span className="subtitulo">UNA TIERRA DE MARAVILLAS</span>
        <h2>Mucho por descubrir</h2>
        <p>Desde antiguas ciudades hasta playas y montañas, encuentra tu próximo lugar favorito en el Perú.</p>
        <Link to="/nosotros" className="enlace-texto">Conoce más sobre nosotros →</Link>
      </section>
    </>
  );
}

export default Inicio;
