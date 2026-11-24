const URL_API = '/data/destinos.json';

export async function listarDestinos() {
  const respuesta = await fetch(URL_API);
  if (!respuesta.ok) throw new Error('No se pudo cargar la lista de destinos.');
  const datos = await respuesta.json();
  if (!Array.isArray(datos)) throw new Error('El archivo de destinos no tiene un formato válido.');
  return datos;
}

export async function obtenerDestino(id) {
  const destinos = await listarDestinos();
  return destinos.find((destino) => String(destino.id) === String(id)) ?? null;
}

export async function listarDestacados() {
  const destinos = await listarDestinos();
  return destinos.filter((destino) => destino.destacado === true);
}

export async function listarPorCategoria(categoria) {
  const destinos = await listarDestinos();
  return destinos.filter((destino) => destino.categoria === categoria);
}
