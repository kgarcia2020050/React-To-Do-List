import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function ModificarTarea() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const valores = useParams();

   useEffect(() => {
    axios
      .get(`/api/tareaPorId/${valores.ID}`)
      .then((res) => {
        setNombre(res.data.Tarea_hallada.nombre);
        setDescripcion(res.data.Tarea_hallada.descripcion);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function editarUsuario() {
    const updateTask = {
      nombre: nombre,
      descripcion: descripcion,
    };
    axios
      .put(`/api/editarTarea/${valores.ID}`, updateTask)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "Tarea modificada con exito",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.response.data.Error,
        });
        console.log(error);
      });
  }

  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4">Editar la tarea</h2>
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
          <button onClick={editarUsuario} className="btn btn-success">
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModificarTarea;
