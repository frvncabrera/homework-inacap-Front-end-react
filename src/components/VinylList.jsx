import { useEffect, useState } from "react";
import api from "../services/api";

function VinylList() {
  const [vinilos, setVinilos] = useState([]);

  async function fetchVinilos() {
    try {
      const response = await api.get("albums/");
      if (response.status === 200) {
        console.log(response.data);
        setVinilos(response.data);
      }
    } catch (e) {
      console.log("Se ha producido un error inesperado");
    }
  }

  useEffect(() => {
    fetchVinilos();
  }, []);

  async function handleDelete(id) {
    try {
      const response = await api.delete(`/albums/${id}/`);
      if (response.status === 204 || response.status === 200) {
        setVinilos(vinilos.filter(v => v.id !== id));
        alert("Vinilo eliminado correctamente.");
      } else {
        alert("Error al eliminar el vinilo.");
      }
    } catch (error) {
      alert("Error al eliminar el vinilo.");
    }
  }

  return (
    <>
      <h2>Listado de vinilos</h2>

      <div className="d-flex m-4 flex-wrap">
        {vinilos.map((vinilo) => (
          <article key={vinilo.id} className="m-2">
            <div className="card" style={{ width: '18rem' }}>
              <img src={vinilo.portada} className="card-img-top" alt="Portada" />
              <div className="card-body">
                <h5 className="card-title">{vinilo.titulo}</h5>
                <p>Artista: {vinilo.artista.nombre}</p>
                <p>Publicación: {vinilo.publicacion}</p>
                <p>Género: {vinilo.genero.map((g) => g.nombre).join(", ")}</p>
                <p>Precio: {vinilo.precio}</p>
                <p>Stock: {vinilo.stock}</p>
                <button onClick={() => handleDelete(vinilo.id)} className="btn btn-danger">
                  Eliminar
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default VinylList;