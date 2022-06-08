import "./App.css";
import ListaTareas from "./Components/ListaTareas";
import ModificarTarea from "./Components/ModificarTarea";
import NuevaTarea from "./Components/NuevaTarea";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logo from "../src/Components/Logo.jpg";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <img src={Logo} alt="Logo" width={100} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Mis tareas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="nuevatarea">
                  Agregar tarea
                </a>
              </li>
              {/*           <li className="nav-item">
              <a className="nav-link">Cerrar sesión</a>
            </li> */}
            </ul>
          </div>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaTareas />} exact />
          <Route path="/nuevaTarea" element={<NuevaTarea />} exact />
          <Route
            path="/modificarTarea/:ID"
            element={<ModificarTarea />}
            exact
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
