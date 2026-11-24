import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LayoutPrincipal from './layout/LayoutPrincipal.jsx';
import './App.css';

const Inicio = lazy(() => import('./pages/Inicio.jsx'));
const Destino = lazy(() => import('./pages/Destino.jsx'));
const DetalleDestino = lazy(() => import('./pages/DetalleDestino.jsx'));
const Nosotros = lazy(() => import('./pages/Nosotros.jsx'));

function CargandoPagina() {
  return (
    <section className="mensaje cargando" role="status" aria-live="polite">
      <span className="indicador-carga" aria-hidden="true"></span>
      <h1>Cargando página...</h1>
      <p>Por favor, espera un momento.</p>
    </section>
  );
}

function App() {
  return (
    <Suspense fallback={<CargandoPagina />}>
      <Routes>
        <Route element={<LayoutPrincipal />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/destinos" element={<Destino />} />
          <Route path="/destinos/:id" element={<DetalleDestino />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="*" element={<section className="mensaje"><h1>Página no encontrada</h1><p>La dirección que buscas no existe.</p></section>} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;