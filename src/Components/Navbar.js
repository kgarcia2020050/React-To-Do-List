import React from "react";
import Logo from "../Components/Logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
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
                <Link className="nav-link" to="/verTareas/:ID">
                  Mis tareas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/nuevaTarea/:ID">
                  Agregar tarea
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Cerrar sesion
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
