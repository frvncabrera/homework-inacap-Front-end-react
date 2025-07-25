import { Routes, Route, NavLink } from "react-router-dom";
import ArtistList from "../components/ArtistList";
import ArtistForm from "../components/ArtistForm";

function ArtistPage() {
  return (
    <>
      <h1>Gestion Artistas</h1>
      <NavLink to={"/artistas/crear/"}>Crear</NavLink>{" | "}
      <NavLink to={"/artistas/listar/"}>Listado</NavLink>

      <Routes>
        <Route path="/listar/" element={<ArtistList />}></Route>
        <Route path="/crear/" element={<ArtistForm />}></Route>
      </Routes>
    </>
  );
}

export default ArtistPage;
