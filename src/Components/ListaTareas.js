import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "./Navbar";

function ListaTareas() {
  const [listadoTareas, setListadoTareas] = useState([]);

  var identidad = localStorage.getItem("identidad");

  useEffect(() => {
    axios
      .get("/api/verTareas/" + identidad)
      .then((res) => {
        setListadoTareas(res.data.Listado_tareas);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function eliminar(id) {
    Swal.fire({
      title: "Estas seguro?",
      text: "Si eliminas esta tarea, no la puedes recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar.",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminada", "La tarea se elimino correctamente", "success");
        axios.delete("/api/eliminarTarea/" + id);
        axios
          .get("/api/verTareas/" + identidad)
          .then((res) => {
            setListadoTareas(res.data.Listado_tareas);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  }

  return (
    <>
      <Navbar />
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card rounded-3">
                <div className="card-body p-4">
                  <h4 className="text-center my-3 pb-3">Mi lista de tareas</h4>
                  <table className="table mb-4">
                    <thead>
                      <tr>
                        <th scope="col">Nombre de la tarea</th>
                        <th scope="col">Descripcion de la tarea</th>
                        <th scope="col">Opciones</th>
                      </tr>
                    </thead>
                    {listadoTareas.map((datos) => {
                      return (
                        <tbody key={datos._id}>
                          <tr>
                            <td>{datos.nombre}</td>
                            <td>{datos.descripcion}</td>
                            <td>
                              <Link to={`/modificarTarea/${datos._id}`}>
                                <button className="btn btn-outline-primary">
                                  <i className="fa-solid fa-pen"></i>
                                </button>
                              </Link>
                              <button
                                onClick={() => {
                                  eliminar(datos._id);
                                }}
                                className="btn btn-outline-danger"
                              >
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
    </>
  );
}

export default ListaTareas;
