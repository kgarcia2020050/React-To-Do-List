import axios from "axios";
import React, { useState } from "react";

import Swal from "sweetalert2";

import Navbar from "./Navbar";

function NuevaTarea() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  var id = localStorage.getItem("identidad");

  function agregarUsuario() {
    var tarea = {
      nombre: nombre,
      descripcion: descripcion,
    };

    axios
      .post("/api/nuevaTarea/" + id, tarea)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "Tarea agregada con exito",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.response.data.Error,
        });
      });
  }

  return (
    <>
      <Navbar />{" "}
      <div className="container">
        <div className="row">
          <h2 className="mt-4">Crear nueva tarea</h2>
        </div>

        <div className="row">
          <div className="col-sm-6 offset-3">
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={nombre}
                  onChange={(n) => {
                    setNombre(n.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">
                  Descripcion
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={descripcion}
                  onChange={(d) => {
                    setDescripcion(d.target.value);
                  }}
                />
              </div>
            <button onClick={agregarUsuario} className="btn btn-success">
              Guardar tarea
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NuevaTarea;
