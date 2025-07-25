function VinylItem({ vinilo }) {
  // Destructuring
  const { titulo, artista, genero, portada, precio, publicacion, stock } =
    vinilo;
  return (
    <article className="m-2">
      <div className="card" style={{ width: '18rem' }}>
        <img src={portada} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>

          <p>artista: {artista.nombre}</p>
          <p className="card-text">publicacion: {publicacion} </p>
          <p className="card-text">
            genero: {genero.map((g) => g.nombre).join(", ")}
          </p>
          <p className="card-text">precio: {precio}</p>
          <p className="card-text">stock: {stock}</p>
        </div>
      </div>
    </article>
  );
}

export default VinylItem;
